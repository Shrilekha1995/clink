package app.clinkApi.controller;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

public class TestClass {

	public static void main(String[] args) {

		System.out.println( System.getProperty("user.dir") + "\\src\\abc.png");
		BCryptPasswordEncoder b=new BCryptPasswordEncoder();
		System.out.println(b.encode("123456"));
		
		for(int i=0;i<100;i++)
		{
		double num=Math.random()*200000;
		System.out.println(Math.round(num));
		}


	}

}
