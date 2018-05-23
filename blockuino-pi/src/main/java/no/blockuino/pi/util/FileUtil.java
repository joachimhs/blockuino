package no.blockuino.pi.util;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.File;
import java.io.IOException;
import java.nio.charset.Charset;
import java.nio.file.FileSystems;
import java.nio.file.Files;
import java.nio.file.Path;

/**
 * Created by jhsmbp on 01/10/16.
 */
public class FileUtil {
    public static void writeContentsToFile(Path jsonPath, String fileContent) {
        BufferedWriter fileWriter = null;
        try {
            fileWriter = Files.newBufferedWriter(jsonPath, Charset.forName("utf-8"));
            fileWriter.write(fileContent, 0, fileContent.length());
            fileWriter.flush();
        } catch (IOException e) {
            e.printStackTrace();  //To change body of catch statement use File | Settings | File Templates.
        } finally {
            if (fileWriter != null) {
                try {
                    fileWriter.close();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            }
        }
    }

    public static String getFileContents(String path) throws IOException {
        String returnString = null;
        File file = new File(path);
        if (file.exists() && file.isFile()) {
            BufferedReader fileBufferedReader = null;
            try {
                fileBufferedReader = Files.newBufferedReader((FileSystems.getDefault().getPath(path)), Charset.forName("utf-8"));

                StringBuffer sb = new StringBuffer();
                String line = null;
                while ((line = fileBufferedReader.readLine()) != null) {
                    sb.append(line).append("\n");
                }

                if (sb.length() > 0) {
                    returnString = sb.toString();
                }
            } finally {
                if (fileBufferedReader != null) {
                    fileBufferedReader.close();
                }
            }
        }

        return returnString;
    }
}
