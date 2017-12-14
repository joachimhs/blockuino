package no.blockuino.pi.cassandra;

import com.datastax.driver.mapping.Result;
import com.datastax.driver.mapping.annotations.Accessor;
import com.datastax.driver.mapping.annotations.Param;
import com.datastax.driver.mapping.annotations.Query;
import no.blockuino.pi.models.Project;

/**
 * Created by joachimhaagenskeie on 16/04/2017.
 */
@Accessor
public interface CassandraAccessor {
    @Query("SELECT * FROM blockuino_no.projects where username = :username")
    public Result<Project> getProjectsForUsername(@Param("username")String username);

    @Query("SELECT * FROM blockuino_no.projects where id = :id")
    public Result<Project> getProjectFromId(@Param("id")String id);
}
