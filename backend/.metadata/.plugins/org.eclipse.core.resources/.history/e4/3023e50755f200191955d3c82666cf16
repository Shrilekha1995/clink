package app.clinkApi.controller;


import java.util.Date;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import app.clinkApi.model.User;
import app.clinkApi.service.UserService;
import app.clinkApi.service.UserServiceImpl;

@RestController
public class UserController {

	@Autowired
	UserService userService;

	@GetMapping(value = "/users")
	public ResponseEntity<List<User>> getAllUser() {
		List<User> users = userService.getAllUser();
		return new ResponseEntity<List<User>>(users, HttpStatus.OK);

	}

	@DeleteMapping("/delete/{id}")
	public ResponseEntity<String> deleteByid(@PathVariable("id") Long id) {
		if (id == null)
			throw new NullPointerException("id  can not be null");
		userService.delete(id);
		return ResponseEntity.ok("user deleted successfully");

	}

	@PostMapping(value = "/save")
	public ResponseEntity<User> saveUser(@RequestBody User user) {
		System.out.println("hello");

		System.out.println(user);
		if (user == null)
			throw new NullPointerException("Person object can not be null");
		User userdb = userService.save(user);
		user.setCreateddate(new Date());
		return new ResponseEntity<User>(userdb, HttpStatus.OK);

	}

	@PostMapping(value = "/update")
	public ResponseEntity<User> updateUser(@RequestBody User user) {
		if (user == null)
			throw new NullPointerException("Person object can not be null");
		User userdb = userService.update(user);
		user.setCreateddate(new Date());
		return new ResponseEntity<User>(userdb, HttpStatus.OK);

	}
	
	@PostMapping("/login")
	public String findUserByEmailPassword(@RequestBody User user)
	{
		
		String email=user.getEmail();
		String password=user.getPassword();
		
		User u=userService.findUserByEmailPassword(email,password);
		System.out.println("******************"+u+"**********");
		if(u!=null)
		{
			return "true";
		}
			
		return "false";
		
	}

}
