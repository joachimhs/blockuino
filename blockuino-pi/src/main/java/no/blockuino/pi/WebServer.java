package no.blockuino.pi;

import com.google.gson.Gson;
import no.blockuino.pi.cassandra.CassandraDataPlugin;
import no.blockuino.pi.cassandra.dao.ProjectDao;
import no.blockuino.pi.models.Credentials;
import no.blockuino.pi.models.JniResult;
import no.blockuino.pi.models.Project;
import no.blockuino.pi.models.Session;
import no.blockuino.pi.util.FileUtil;
import no.haagensoftware.hyrrokkin.base.HyrrokkinDeserializer;
import no.haagensoftware.hyrrokkin.base.HyrrokkinSerializer;
import no.haagensoftware.hyrrokkin.deserializer.RestDeserializer;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import org.apache.log4j.ConsoleAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;

import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.Charset;
import java.nio.charset.StandardCharsets;
import java.nio.file.*;
import java.util.*;

import java.io.*;

import static spark.Spark.*;

/**
 * Created by jhsmbp on 09/09/16.
 */
public class WebServer {
    private static final Logger logger = Logger.getLogger(WebServer.class.getName());
    private static Map<String, Session> sessions = new HashMap<>();

    public static void main(String[] args) throws IOException {
        sessions.clear();
        if (System.getProperty("log4j.configuration") == null) {
            configureLogger();
        }

        readProperties();
        CassandraDataPlugin.getInstance();

        staticFiles.location("/public"); // Static files
        staticFiles.externalLocation(System.getProperty("blockuino.webappDir"));

        String arduinoProjectFile = System.getProperty("blockuino.arduinoProjectFile");
        String pioExecutable = System.getProperty("blockuino.pioExecutable");
        String savedDirectory = System.getProperty("blockuino.savedProjectsDir");
        String pioDir = System.getProperty("blockuino.pioDir");

        get("/onPi", (req, res) -> "true");
        get("/onPis/*", (req, res) -> {
            res.header("Content-Type", "application/json");
            return "{ \"onPi\": { \"id\": \"123\", \"onPi\": true}}";
        });

        get("/blockuino/projects", (req, res) -> {
            res.header("Content-Type", "application/json");
            String username = getUsernameFromId(req.cookie("uuid"));
            List<Project> projects = CassandraDataPlugin.getInstance().getProjectDao().getProjectsForUsername("DEFAULT_USER");

            if (username != null) {
                projects.addAll(CassandraDataPlugin.getInstance().getProjectDao().getProjectsForUsername(username));
            }
            RestSerializer serializer = new RestSerializer();
            return serializer.serialize(projects, new ArrayList<>(), false);
        });

        get("/blockuino/projects/*", (req, res) -> {
            res.header("Content-Type", "application/json");
            String projectId = req.splat()[0];
            //Initialize with blank response (if no project is saved with the ID yet)
            String projectJson = "{ \"project\": { \"id\": \"" + projectId + "\"}}";

            String username = getUsernameFromId(req.cookie("uuid"));

            Project project = CassandraDataPlugin.getInstance().getProjectDao().getProjectFromId(projectId);

            if (project != null) {
                if (project.getContent() == null) {
                    project.setContent("");
                }

                RestSerializer serializer = new RestSerializer();
                projectJson = serializer.serialize(project).toString();
            }

            /*
            //If file exists, return saves project
            if (fileExists(savedDirectory, projectId + ".json")) {
                projectJson = getFileContent(savedDirectory, projectId + ".json");
            }*/

            return projectJson;
        });


        post("/blockuino/projects", (req, res) -> {
            String content = req.body();

            if (content != null) {
                RestDeserializer deserializer = new RestDeserializer();
                RestSerializer serializer = new RestSerializer();
                Project project = deserializer.deserialize(content, Project.class);

                project.setUpdatedDate("" + (System.currentTimeMillis() / 1000));
                if (project.getCreatedDate() == null) {
                    project.setCreatedDate("" + (System.currentTimeMillis() / 1000));
                }

                Session session = getSessionFromId(req.cookie("uuid"));
                if (session != null && session.getAuthenticated() != null && session.getAuthenticated().booleanValue()) {
                    project.setUsername(session.getUsername());
                }
                /*FileUtil.writeContentsToFile(
                        FileSystems.getDefault().getPath(savedDirectory + File.separatorChar + project.getId() + ".json"),
                        serializer.serialize(project, new ArrayList<>(), false).toString());*/
                CassandraDataPlugin.getInstance().getProjectDao().persistProject(project);

                logger.info("/project PUT");
                logger.info(content);
            }
            return content;
        });

        put("/blockuino/projects/:projectId", (req, res) -> {
            String content = req.body();
            String projectId = req.params(":projectId");
            Project oldProject = null;

            String username = getUsernameFromId(req.cookie("uuid"));
            if (username != null) {
                oldProject = CassandraDataPlugin.getInstance().getProjectDao().getProject(projectId, username);
            }

            if (oldProject == null) {
                oldProject = CassandraDataPlugin.getInstance().getProjectDao().getProject(projectId, "DEFAULT_USER");
            }

            if (projectId != null && content != null) {
                RestDeserializer deserializer = new RestDeserializer();
                RestSerializer serializer = new RestSerializer();
                Project project = deserializer.deserialize(content, Project.class);
                project.setId(projectId);

                if (oldProject == null || oldProject.getUsername() == null) {
                    oldProject = project;
                    project.setUsername(username);
                }

                if (oldProject != null && oldProject.getUsername().equals(username)) {
                    project.setUpdatedDate("" + (System.currentTimeMillis() / 1000));
                    if (project.getCreatedDate() == null) {
                        project.setCreatedDate("" + (System.currentTimeMillis() / 1000));
                    }

                    if (project.getContent() == null) {
                        project.setContent("");
                    }
                    content = serializer.serialize(project, new ArrayList<>(), false).toString();
                } else {
                    //create clone
                    project = new Project(oldProject, username);
                    content = "{\"newProjectId\": \"" + project.getId() + "\"}";
                }

                CassandraDataPlugin.getInstance().getProjectDao().persistProject(project);

                logger.info("/project PUT");
                logger.info(content);
            }
            return content;
        });

        post("/upload/:projectid/arduino/:arduino", (req, res) -> {
            String code = req.body();
            String projectId = req.params(":projectId");
            String arduino = req.params(":arduino");
            JniResult commandResult = null;

            if (arduino.equals("uno") || arduino.equals("nanoatmega328") || arduino.equals("bbcmicrobit")) {
                String hex = null;

                if (code != null && code.length() > 10 && projectId != null) {
                    Path projectPath = Paths.get(pioDir, projectId);
                    Path arduinoFilePath = Paths.get(pioDir, projectId, "src", "blockuino.ino");

                    if (!Files.exists(projectPath)) {
                        Files.createDirectories(projectPath);
                    }

                    String initCommand = "pio init -b " + arduino + " -d " + projectPath.toAbsolutePath().toString();
                    JniResult initCommandResult = executeCommandAndReturnResult(initCommand);

                    if (arduino.equals("bbcmicrobit")) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 361";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    //If NeoPixels are needed. Install library
                    if (initCommandResult.getExitStatus() == 0 && code.indexOf("#include <Adafruit_NeoPixel.h>") != -1) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 28";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    //If DHT11 are needed. Install library
                    if (initCommandResult.getExitStatus() == 0 && code.indexOf("#include <DHT.h>") != -1) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 19";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    //If Adafruit GFX are needed. Install library
                    if (initCommandResult.getExitStatus() == 0 && code.indexOf("#include <Adafruit_GFX.h>") != -1) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 13";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    //If Adafruit_SSD1306 are needed. Install library
                    if (initCommandResult.getExitStatus() == 0 && code.indexOf("#include <Adafruit_SSD1306.h>") != -1) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 135";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    //If RFReceiver.h are needed. Install library
                    if (initCommandResult.getExitStatus() == 0 && code.indexOf("#include <RFReceiver.h>") != -1) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 1500";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    //If RFTransmitter.h are needed. Install library
                    if (initCommandResult.getExitStatus() == 0 && code.indexOf("#include <RFTransmitter.h>") != -1) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 1501";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    //If PinChangeInterruptHandler.h are needed. Install library
                    if (initCommandResult.getExitStatus() == 0 && code.indexOf("#include <PinChangeInterruptHandler.h>") != -1) {
                        String libCommand = "pio lib --storage-dir " + projectPath.toAbsolutePath().toString() + "/lib install 1499";
                        JniResult neopixelCommandResult = executeCommandAndReturnResult(libCommand);
                        initCommandResult.addJniResult(neopixelCommandResult);
                    }

                    Files.write(arduinoFilePath, code.getBytes());
                    String executable = "pio run -s -d  " + projectPath.toAbsolutePath().toString();

                    if (arduino.equals("bbcmicrobit")) {
                        executable += " -e bbcmicrobit";
                    }
                    JniResult compileCommandResult = executeCommandAndReturnResult(executable);
                    hex = getFileContent(projectPath.toAbsolutePath().toString() + "/.pioenvs/" + arduino, "firmware.hex");

                    initCommandResult.setExitStatus(compileCommandResult.getExitStatus());
                    initCommandResult.addJniResult(compileCommandResult);

                    commandResult = initCommandResult;
                    commandResult.setHex(hex);
                }

                return new Gson().toJson(commandResult).toString();
            } else {
                return "{}";
            }
        });

        get("/hexfile/:projectId", (req, res) -> {
            String projectId = req.params(":projectId");
            Path projectPath = Paths.get(pioDir, projectId);

            String hexfileContents = getFileContent(projectPath.toAbsolutePath().toString() + "/.pioenvs/uno", "firmware.hex");

            return hexfileContents;
        });

        post("/generateToken", (req, res) -> {
            String httpBody = req.body();
            String restResponse = "{}";

            if (httpBody != null && httpBody.length() > 8) {
                Credentials creds = new Gson().fromJson(httpBody, Credentials.class);

                String jsonPayload = "{ \"username\": \"" + creds.getUsername() + "\"}";

                RestHelper rh = new RestHelper();
                restResponse = rh.postJsonContent("https://kodegenet.no/kodegenet/auth/token", jsonPayload);
            }

            return restResponse;
        });

        post("/login", (req, res) -> {
            String httpBody = req.body();
            boolean authenticated = false;

            Session newSession = new Session();

            if (httpBody != null && httpBody.length() > 8) {
                Credentials creds = new Gson().fromJson(httpBody, Credentials.class);

                String jsonPayload = "{ \"username\": \"" + creds.getUsername() + "\", \"password\": \"" + creds.getPassword() + "\"}";

                RestHelper rh = new RestHelper();
                String restResponse = rh.postJsonContent("https://kodegenet.no/kodegenet/auth/login", jsonPayload);

                HyrrokkinDeserializer deserializer = new RestDeserializer();
                Session hlokkSession = deserializer.deserialize(restResponse, Session.class);

                if (hlokkSession.getAuthenticated().booleanValue()) {
                    newSession.setAuthenticated(hlokkSession.getAuthenticated());
                    newSession.setUsername(creds.getUsername());
                    newSession.setId(hlokkSession.getId().replace("-", "").substring(0, 12));
                    sessions.put(newSession.getId(), newSession);
                    authenticated = true;
                }
            }

            if (authenticated) {
                HyrrokkinSerializer serializer = new RestSerializer();
                return serializer.serialize(newSession);
            } else {
                return ("ERROR");
            }
        });

        get("/currSession", (req, res) -> {
            String sessionId = req.cookie("uuid");
            Session session = null;

            if (sessionId != null) {
                session = sessions.get(sessionId);
            }

            if (session != null) {
                HyrrokkinSerializer serializer = new RestSerializer();
                return serializer.serialize(session);
            } else {
                return "";
            }

        });

        get("*", (request, response) -> renderContent("index.html"));
    }

    private static Session getSessionFromId(String cookieId) {
        Session session = null;

        if (cookieId != null) {
            session = sessions.get(cookieId);
        }

        return session;
    }

    private static String getUsernameFromId(String cookieId) {
        Session session = getSessionFromId(cookieId);
        String username = null;

        if (session != null) {
            username = session.getUsername();
        }
        return username;
    }

    private static String renderContent(String htmlFile) {
        try {
            // Return a String which has all
            // the contents of the file.
            Path path = Paths.get(System.getProperty("blockuino.webappDir") + "/index.html");
            return new String(Files.readAllBytes(path), Charset.defaultCharset());
        } catch (IOException ioe) {
            // Add your own exception handlers here.
        }
        return null;
    }

    private static List<Project> getAllProjects(String directory) {
        List<Project> projects = new ArrayList<>();

        RestDeserializer deserializer = new RestDeserializer();

        for (String file : fileList(directory)) {
            if (file.endsWith(".json")) {
                String projectJson = getFileContent(directory, file);
                projects.add(deserializer.deserialize(projectJson, Project.class));
            }
        }

        return projects;
    }

    private static List<String> fileList(String directory) {
        List<String> fileNames = new ArrayList<>();
        try (DirectoryStream<Path> directoryStream = Files.newDirectoryStream(Paths.get(directory))) {
            for (Path path : directoryStream) {
                fileNames.add(path.getFileName().toString());
            }
        } catch (IOException ex) {}
        return fileNames;
    }

    private static boolean fileExists(String directory, String filename) {
        Path path = FileSystems.getDefault().getPath(directory + File.separatorChar + filename);
        return Files.exists(path);
    }

    private static String getFileContent(String directory, String filename) {
        String fileContent = null;

        Path path = FileSystems.getDefault().getPath(directory + File.separatorChar + filename);
        if (Files.isRegularFile(path)) {
            try {
                fileContent = FileUtil.getFileContents(path.toAbsolutePath().toString());
            } catch (IOException e) {
                fileContent = null;
                e.printStackTrace();
            }
        }

        return fileContent;

    }

    private static JniResult executeCommandAndReturnResult(String command) throws IOException, InterruptedException {
        logger.info("Executing command: " + command);
        Process process = Runtime.getRuntime().exec(command);
        int exitStatus = process.waitFor();

        String returnMessage =  getInputAsString(process.getInputStream());
        String errorMessage =  getInputAsString(process.getErrorStream());

        logger.info("command return: " + returnMessage.toString());
        logger.info("command error: " + errorMessage.toString());

        return new JniResult(exitStatus, returnMessage, errorMessage);
    }

    private static String getInputAsString(InputStream is)
    {
        try(java.util.Scanner s = new java.util.Scanner(is))
        {
            return s.useDelimiter("\\A").hasNext() ? s.next() : "";
        }
    }

    private static void readProperties() throws IOException {

            Properties properties = new Properties();
            File configFile = new File("config.properties");
            if (!configFile.exists()) {
                logger.info("config.properties not found at : " + configFile.getAbsolutePath() + " trying one level up.");
                configFile = new File("../config.properties");
            }
            if (!configFile.exists()) {
                logger.info("config.properties not found at : " + configFile.getAbsolutePath() + " trying one level up.");
                configFile = new File("../../config.properties");
            }
            if (configFile.exists()) {
                FileInputStream configStream = new FileInputStream(configFile);
                properties.load(configStream);
                configStream.close();
                logger.info("Server properties loaded from " + configFile.getAbsolutePath());
                for (Enumeration<Object> e = properties.keys(); e.hasMoreElements(); ) {
                    Object property = (String) e.nextElement();
                    logger.info("\t\t* " + property + "=" + properties.get(property));
                }
            } else {
                String message = "Could not find " + configFile.getAbsolutePath() + ". Unable to start.";
                System.err.println(message);
                throw new RuntimeException(message);
            }

            setProperties(properties);

            //port = Integer.parseInt(System.getProperty("no.haagensoftware.contentice.port", "8080"));
    }

    private static void setProperties(Properties properties) {
        Enumeration<Object> propEnum = properties.keys();
        while (propEnum.hasMoreElements()) {
            String property = (String) propEnum.nextElement();
            System.setProperty(property, properties.getProperty(property));
        }
    }

    private static void configureLogger() {
        Logger root = Logger.getRootLogger();
        if (!root.getAllAppenders().hasMoreElements()) {
            //Log4J is not configured. Set it up correctly!
            root.setLevel(Level.INFO);
            root.addAppender(new ConsoleAppender(new PatternLayout("%d %-5p [%t] %C{1}: %m%n")));
        }
    }
}
