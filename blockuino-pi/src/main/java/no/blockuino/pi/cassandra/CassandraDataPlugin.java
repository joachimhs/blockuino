package no.blockuino.pi.cassandra;

import com.datastax.driver.core.*;
import no.blockuino.pi.cassandra.dao.ProjectDao;
import no.blockuino.pi.util.IntegerParser;

/**
 * Created by joachimhaagenskeie on 15/04/2017.
 */
public class CassandraDataPlugin {
    private static CassandraDataPlugin instance;
    private Cluster cluster;
    private Session session;

    //DAOs
    private ProjectDao projectDao;

    private CassandraDataPlugin() {
        setup();
    }

    public static CassandraDataPlugin getInstance() {
        if (instance == null) {
            instance = new CassandraDataPlugin();
        }

        return instance;
    }

    public void setup() {
        //Setting up the Cassandra environment, session and DAOs
        cluster = null;

        String hostString = System.getProperty("no.kodegenet.blockuino.db.cassandra.hosts", "127.0.0.1");

        Cluster.Builder clusterBuilder = Cluster.builder();
        if (hostString.contains(",")) {
            for (String host : hostString.split(",")) {
                clusterBuilder.addContactPoint(host.trim());
            }
        } else {
            clusterBuilder.addContactPoint(hostString.trim());
        }

        cluster = clusterBuilder.build();
        Metadata metadata = cluster.getMetadata();

        System.out.println("Connected to cluster: " + metadata.getClusterName());
        for (Host host : metadata.getAllHosts()) {
            System.out.printf("Datacenter: %s; Host: %s; Rack: %s;", host.getDatacenter(), host.getAddress(), host.getRack());
        }

        session = cluster.connect();
        this.initializeDb();

        projectDao = new ProjectDao(session);

        ResultSet rs = session.execute("select release_version from system.local");
        Row row = rs.one();
        System.out.println(" version: " + row.getString("release_version"));
    }

    private void initializeDb() {
        Integer replication = IntegerParser.parseIntegerFromString(System.getProperty("no.kodegenet.blockuino.db.cassandra.replicationFactor"), 1);
        String keyspace = System.getProperty("no.kodegenet.blockuino.db.keyspace", "blockuino_no");

        session.execute("CREATE KEYSPACE IF NOT EXISTS " + keyspace + " WITH replication = {'class': 'SimpleStrategy', 'replication_factor': " + replication.intValue() + "};");
    }

    public void teardown() {
        if (cluster != null) cluster.close();
    }

    public ProjectDao getProjectDao() {
        return projectDao;
    }
}
