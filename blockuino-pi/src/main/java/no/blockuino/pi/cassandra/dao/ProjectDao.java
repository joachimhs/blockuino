package no.blockuino.pi.cassandra.dao;

import com.datastax.driver.core.Session;
import com.datastax.driver.mapping.Mapper;
import com.datastax.driver.mapping.MappingManager;
import com.datastax.driver.mapping.Result;
import no.blockuino.pi.cassandra.CassandraAccessor;
import no.blockuino.pi.models.Project;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by joachimhaagenskeie on 15/04/2017.
 */
public class ProjectDao {
    private Session session;
    private String keyspace = "";

    public ProjectDao(Session session) {
        this.session = session;
        this.keyspace = System.getProperty("no.kodegenet.blockuino.db.keyspace", "blockuino_no");

        this.initializeTable();
    }

    private void initializeTable() {
        session.execute("CREATE TABLE IF NOT EXISTS " + keyspace + ".projects(" +
                "id text, " +
                "name text, " +
                "title text, " +
                "content text, " +
                "xml text, " +
                "username text, " +
                "createdDate text, " +
                "updatedDate text, " +
                "remixOf text, " +
                "PRIMARY KEY (id)" +
                ");");

        session.execute("CREATE INDEX IF NOT EXISTS project_ownedBy_idx ON " + keyspace + ".projects(username);");
    }

    public Project getProject(String projectId, String username) {
        Project project = null;

        Mapper<Project> mapper = new MappingManager(session).mapper(Project.class);
        project = mapper.get(projectId, username);

        return project;
    }

    public Project getProjectFromId(String projectId) {
        Project project = null;

        CassandraAccessor cassandraAccessor = new MappingManager(session).createAccessor(CassandraAccessor.class);
        Result<Project> projectResult = cassandraAccessor.getProjectFromId(projectId);

        project = projectResult.one();

        return project;
    }

    public List<Project> getProjectsForUsername(String username) {
        List<Project> projects = new ArrayList<>();

        CassandraAccessor cassandraAccessor = new MappingManager(session).createAccessor(CassandraAccessor.class);
        Result<Project> projectResult = cassandraAccessor.getProjectsForUsername(username);

        projects.addAll(projectResult.all());

        return projects;
    }

    public void persistProject(Project project) {
        Mapper<Project> mapper = new MappingManager(session).mapper(Project.class);
        mapper.save(project);
    }

    /*
    ublic List<CassandraCategoryData> getCategories(String host) {
        List<CassandraCategoryData> cassandraCategoryDatas = new ArrayList<>();

        CassandraAccessor categoryAccessor = new MappingManager(session).createAccessor(CassandraAccessor.class);
        Result<CassandraCategoryData> categoryDataResult = categoryAccessor.getCategories(host);

        for (CassandraCategoryData cd : categoryDataResult.all()) {
            cassandraCategoryDatas.add(cd);
        }

        return cassandraCategoryDatas;
    }

    public CassandraCategoryData getCategory(String name, String host) {
        CassandraCategoryData cassandraCategoryData = null;

        Mapper<CassandraCategoryData> mapper = new MappingManager(session).mapper(CassandraCategoryData.class);
        cassandraCategoryData = mapper.get(name, host);

        return cassandraCategoryData;
    }

    public void persistCategory(CategoryData categoryData, String host) {
        Mapper<CassandraCategoryData> mapper = new MappingManager(session).mapper(CassandraCategoryData.class);
        mapper.save(new CassandraCategoryData(categoryData, host));
    }
     */
}
