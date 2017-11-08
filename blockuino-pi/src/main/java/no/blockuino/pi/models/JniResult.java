package no.blockuino.pi.models;

/**
 * Created by joachimhaagenskeie on 10/05/2017.
 */
public class JniResult {
    private int exitStatus;
    private String returnMessage;
    private String errorMessage;
    private String hex;

    public JniResult() {
    }

    public JniResult(int exitStatus, String returnMessage) {
        this.exitStatus = exitStatus;
        this.returnMessage = returnMessage;
    }

    public JniResult(int exitStatus, String returnMessage, String errorMessage) {
        this.exitStatus = exitStatus;
        this.returnMessage = returnMessage;
        this.errorMessage = errorMessage;
    }

    public void addJniResult(JniResult jniResult) {
        if (jniResult != null && jniResult.getReturnMessage() != null) {
            this.returnMessage += jniResult.returnMessage;
        }

        if (jniResult != null && jniResult.getErrorMessage() != null) {
            this.errorMessage += jniResult.getErrorMessage();
        }
    }

    public int getExitStatus() {
        return exitStatus;
    }

    public void setExitStatus(int exitStatus) {
        this.exitStatus = exitStatus;
    }

    public String getReturnMessage() {
        return returnMessage;
    }

    public void setReturnMessage(String returnMessage) {
        this.returnMessage = returnMessage;
    }

    public String getErrorMessage() {
        return errorMessage;
    }

    public void setErrorMessage(String errorMessage) {
        this.errorMessage = errorMessage;
    }

    public String getHex() {
        return hex;
    }

    public void setHex(String hex) {
        this.hex = hex;
    }
}
