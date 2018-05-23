package no.blockuino.pi.models;

import com.google.gson.annotations.Expose;

/**
 * Created by joachimhaagenskeie on 15/04/2017.
 */
public class Credentials {
    @Expose private String username;
    @Expose private String password;

    public Credentials() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
