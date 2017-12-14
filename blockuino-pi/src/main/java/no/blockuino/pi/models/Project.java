package no.blockuino.pi.models;

import com.datastax.driver.mapping.annotations.ClusteringColumn;
import com.datastax.driver.mapping.annotations.PartitionKey;
import com.datastax.driver.mapping.annotations.Table;
import com.google.gson.annotations.Expose;
import no.haagensoftware.hyrrokkin.annotations.SerializedClassName;

import java.util.Date;
import java.util.UUID;

/**
 * Created by jhsmbp on 01/10/16.
 */
@SerializedClassName("project")
@Table(keyspace = "blockuino_no", name ="projects")
public class Project {
    @Expose @PartitionKey private String id;
    @Expose @ClusteringColumn private String username;

    @Expose private String name;
    @Expose private String xml;
    @Expose private String createdDate;
    @Expose private String updatedDate;
    @Expose private String content;
    @Expose private String title;
    @Expose private String remixOf;


    public Project() {
    }

    public Project(Project project, String username) {
        this.id = UUID.randomUUID().toString().replace("-", "").substring(0, 11);
        this.username = username;
        this.name = project.getName();
        this.xml = project.getXml();
        this.createdDate = "" + (System.currentTimeMillis() / 1000);
        this.updatedDate = "" + (System.currentTimeMillis() / 1000);
        this.content = project.getContent();
        this.title = project.getTitle();
        this.remixOf = project.getId();
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getXml() {
        return xml;
    }

    public void setXml(String xml) {
        this.xml = xml;
    }

    public String getCreatedDate() {
        return createdDate;
    }

    public void setCreatedDate(String createdDate) {
        this.createdDate = createdDate;
    }

    public String getUpdatedDate() {
        return updatedDate;
    }

    public void setUpdatedDate(String updatedDate) {
        this.updatedDate = updatedDate;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getRemixOf() {
        return remixOf;
    }

    public void setRemixOf(String remixOf) {
        this.remixOf = remixOf;
    }
}
