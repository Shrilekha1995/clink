package app.clinkApi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import app.clinkApi.model.User;
import app.clinkApi.repository.UserRepository;

@Service
@Transactional
public class UserServiceImpl implements UserService {

	@Autowired
	BCryptPasswordEncoder passwordEncoder;
	private JavaMailSender javaMailSender;
	
	@Autowired
	public UserServiceImpl(JavaMailSender javaMailSender)
	{
		this.javaMailSender=javaMailSender;
	}


	@Autowired
	UserRepository userRepository;

	public List<User> getAllUser() {

		return (List<User>) userRepository.findAll();
	}

	public User save(User user) {
		String p=passwordEncoder.encode(user.getPassword());
		System.out.println(p);
		user.setPassword(p);
		return userRepository.save(user);
	}

	public User update(User user) {
		String p=passwordEncoder.encode(user.getPassword());
		System.out.println(p);
		user.setPassword(p);
		return userRepository.save(user);
	}

	public void delete(Long id) {
		userRepository.deleteById(id);
		
	}

	public User findUserByEmailPassword(String email, String password) {
	
		User u=userRepository.findUserByEmailPassword(email,password);
		return u;
	}

	
	@Override
	public int sendResetPasswordLink(String email) {
		System.out.println("in sendNotification()");
		SimpleMailMessage mail= new SimpleMailMessage();
	
		
		mail.setFrom("clink24x7@gmail.com");
		
		mail.setTo(email);
	
		
		mail.setSubject("Reset your password");
		double num=Math.random()*200000;
		int number=(int) Math.round(num);
		String text="your OTP is :"+number;
		mail.setText(text);
		
		javaMailSender.send(mail);
		return number;
		
	}

	@Override
	public String updatePassword(String email, String password) {
		this.userRepository.updatePassword(email,password);
		return "success";
	}


}
