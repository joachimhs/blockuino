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
public class SessionDao {
    private Session session;
    private String keyspace = "";
    private List<String> adminUserList;

    public SessionDao(Session session, List<String> adminUserList) {
        this.session = session;
        this.adminUserList = adminUserList;
        this.keyspace = System.getProperty("no.kodegenet.blockuino.db.keyspace", "blockuino_no");

        this.initializeTable();
    }

    private void initializeTable() {
        session.execute("CREATE TABLE IF NOT EXISTS " + keyspace + ".sessions(" +
                "id text, " +
                "username text, " +
                "authenticated boolean, " +
                "PRIMARY KEY (id)" +
                ");");
    }

    public no.blockuino.pi.models.Session getSession(String sessionId) {
        no.blockuino.pi.models.Session session = null;

        Mapper<no.blockuino.pi.models.Session> mapper = new MappingManager(this.session).mapper(no.blockuino.pi.models.Session.class);
        session = mapper.get(sessionId);

        addRole(session);

        return session;
    }

    public void persistSession(no.blockuino.pi.models.Session session) {
        Mapper<no.blockuino.pi.models.Session> mapper = new MappingManager(this.session).mapper(no.blockuino.pi.models.Session.class);

        addRole(session);

        mapper.save(session);
    }

    private void addRole(no.blockuino.pi.models.Session session) {
        if (session.getUsername() != null && adminUserList.contains(session.getUsername())) {
            session.setRole("admin");
        } else {
            session.setRole("user");
        }
    }
}
