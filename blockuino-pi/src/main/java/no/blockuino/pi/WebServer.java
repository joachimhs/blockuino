package no.blockuino.pi;

import no.blockuino.pi.models.Project;
import no.blockuino.pi.util.FileUtil;
import no.haagensoftware.hyrrokkin.deserializer.RestDeserializer;
import no.haagensoftware.hyrrokkin.serializer.RestSerializer;
import org.apache.log4j.ConsoleAppender;
import org.apache.log4j.Level;
import org.apache.log4j.Logger;
import org.apache.log4j.PatternLayout;

import java.nio.file.*;
import java.util.List;

import java.io.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.Enumeration;
import java.util.Properties;

import static spark.Spark.*;

/**
 * Created by jhsmbp on 09/09/16.
 */
public class WebServer {
    private static final Logger logger = Logger.getLogger(WebServer.class.getName());

    public static void main(String[] args) throws IOException {
        if (System.getProperty("log4j.configuration") == null) {
            configureLogger();
        }

        readProperties();

        staticFiles.location("/public"); // Static files
        staticFiles.externalLocation(System.getProperty("blockuino.webappDir"));

        String arduinoProjectFile = System.getProperty("blockuino.arduinoProjectFile");
        String pioExecutable = System.getProperty("blockuino.pioExecutable");
        String savedDirectory = System.getProperty("blockuino.savedProjectsDir");

        get("/onPi", (req, res) -> "true");
        get("/onPis/*", (req, res) -> {
            res.header("Content-Type", "application/json");
            return "{ \"onPi\": { \"id\": \"123\", \"onPi\": true}}";
        });

        get("/blockuino/projects", (req, res) -> {
            res.header("Content-Type", "application/json");
            List<Project> projects = getAllProjects(savedDirectory);
            RestSerializer serializer = new RestSerializer();
            return serializer.serialize(projects, new ArrayList<>(), false);
        });

        get("/blockuino/projects/*", (req, res) -> {
            res.header("Content-Type", "application/json");
            String projectId = req.splat()[0];
            //Initialize with blank response (if no project is saved with the ID yet)
            String projectJson = "{ \"project\": { \"id\": \"" + projectId + "\"}}";

            //If file exists, return saves project
            if (fileExists(savedDirectory, projectId + ".json")) {
                projectJson = getFileContent(savedDirectory, projectId + ".json");
            }

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

                FileUtil.writeContentsToFile(
                        FileSystems.getDefault().getPath(savedDirectory + File.separatorChar + project.getId() + ".json"),
                        serializer.serialize(project, new ArrayList<>(), false).toString());

                logger.info("/project PUT");
                logger.info(content);
            }
            return content;
        });

        put("/blockuino/projects/:projectId", (req, res) -> {
            String content = req.body();
            String projectId = req.params(":projectId");

            if (projectId != null && content != null) {
                RestDeserializer deserializer = new RestDeserializer();
                RestSerializer serializer = new RestSerializer();
                Project project = deserializer.deserialize(content, Project.class);
                project.setId(projectId);
                project.setUpdatedDate("" + (System.currentTimeMillis() / 1000));
                if (project.getCreatedDate() == null) {
                    project.setCreatedDate("" + (System.currentTimeMillis() / 1000));
                }

                content = serializer.serialize(project, new ArrayList<>(), false).toString();

                FileUtil.writeContentsToFile(
                        FileSystems.getDefault().getPath(savedDirectory + File.separatorChar + projectId + ".json"),
                        content);

                logger.info("/project PUT");
                logger.info(content);
            }
            return content;
        });

        post("/upload", (req, res) -> {
            String code = req.body();
            String returnMessage = "";

            if (code != null && code.length() > 10) {
                Files.write(Paths.get(arduinoProjectFile), code.getBytes());
                returnMessage = executeCommandAndReturnResult (pioExecutable);
            }

            return "{ \"status\": \"OK\", \"exitStatus\": \"" + returnMessage + "\"}";
        });
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

    private static String executeCommandAndReturnResult(String command) throws IOException, InterruptedException {
        String returnMessage = null;

        logger.info("Executing command: " + command);
        Process process = Runtime.getRuntime().exec(command);
        int exitStatus = process.waitFor();


        BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        BufferedReader bufferedErrorReader = new BufferedReader(new InputStreamReader(process.getErrorStream()));

        String currentLine=null;

        StringBuilder stringBuilder = new StringBuilder();
        if (exitStatus == 0) {
            currentLine= bufferedReader.readLine();
            while(currentLine !=null)
            {
                stringBuilder.append(currentLine);
                currentLine = bufferedReader.readLine();
            }

            returnMessage = stringBuilder.toString();
        } else {
            currentLine= bufferedErrorReader.readLine();
            while(currentLine !=null)
            {
                stringBuilder.append(currentLine);
                currentLine = bufferedReader.readLine();
            }

            returnMessage = stringBuilder.toString();
        }

        logger.info("command return: " + returnMessage.toString());

        return returnMessage;
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
