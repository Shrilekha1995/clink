package app.clinkApi.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import app.clinkApi.model.User;

@Repository
public interface UserRepository extends CrudRepository<User,Long > {
    
	@Query("SELECT u FROM User u WHERE LOWER(u.email) = LOWER(:email) and LOWER(u.password) = LOWER(:password) ")
	User findUserByEmailPassword(@Param("email")String email,@Param("password") String password);

}




