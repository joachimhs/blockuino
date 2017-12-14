package no.blockuino.pi;

import org.apache.http.Header;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.entity.StringEntity;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;
import org.apache.log4j.Logger;
import org.mozilla.universalchardet.UniversalDetector;

import java.io.IOException;
import java.io.UnsupportedEncodingException;

/**
 * Created by joachimhaagenskeie on 09/11/2017.
 */
public class RestHelper {
    private static final Logger logger = Logger.getLogger(RestHelper.class.getName());

    public static String guessEncoding(String input) {
        UniversalDetector detector = new UniversalDetector(null);
        byte[] buf = new byte[4096];

        detector.handleData(input.getBytes(), 0, input.getBytes().length - 1);

        detector.dataEnd();

        String encoding = detector.getDetectedCharset();
        if (encoding == null) {
            encoding = "UTF-8";
            logger.info("Bruker standard UTF-8 encoding");
        } else {
            logger.info("Gjetter " + encoding + " encoding");
        }

        return encoding;
    }

    public String postJsonContent(String url, String jsonContent) {
        String json = null;


        try {
            String encoding = guessEncoding(jsonContent);
            byte[] jsonBytes = jsonContent.getBytes(encoding);
            if (jsonBytes != null) {
                jsonContent = new String(jsonBytes, "UTF-8");
            }
        } catch (UnsupportedEncodingException e) {
            //Nothing to do. using string as-is
        }

        logger.info("POSTING TO: " + url);

        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {

            HttpPost httpPost = new HttpPost(url);
            StringEntity requestEntity = new StringEntity(jsonContent);
            httpPost.setEntity(requestEntity);

            httpPost.setHeader("Content-Type", "application/json;charset=UTF-8");
            httpPost.setHeader("Accept", "application/json");


            for (Header header : httpPost.getAllHeaders()) {
                logger.info("Req header " + header.getName() + " : " + header.getValue());
            }

            logger.info("\n" + EntityUtils.toString(httpPost.getEntity(), "UTF-8"));

            HttpResponse response = httpclient.execute(httpPost);

            HttpEntity entity = response.getEntity();
            json = EntityUtils.toString(entity);

            logger.info("---");
            for (Header header : response.getAllHeaders()) {
                logger.info("Res header " + header.getName() + " : " + header.getValue());

                logger.info(json);
            }
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // When HttpClient instance is no longer needed,
            // shut down the connection manager to ensure
            // immediate deallocation of all system resources
            httpclient.getConnectionManager().shutdown();
        }

        return json;
    }

    public String fetchJsonContent(String url) {
        String json = null;

        logger.info("FETCHING FROM: " + url);
        CloseableHttpClient httpclient = HttpClients.createDefault();
        try {

            HttpGet httpGet = new HttpGet(url);

            for (Header header : httpGet.getAllHeaders()) {
                logger.info("Req header " + header.getName() + " : " + header.getValue());
            }

            HttpResponse response = httpclient.execute(httpGet);

            HttpEntity entity = response.getEntity();
            json = EntityUtils.toString(entity);

            logger.info("---");
            for (Header header : response.getAllHeaders()) {
                logger.info("Res header " + header.getName() + " : " + header.getValue());
            }

            logger.info(json);
        } catch (ClientProtocolException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        } finally {
            // When HttpClient instance is no longer needed,
            // shut down the connection manager to ensure
            // immediate deallocation of all system resources
            httpclient.getConnectionManager().shutdown();
        }

        return json;
    }
}
