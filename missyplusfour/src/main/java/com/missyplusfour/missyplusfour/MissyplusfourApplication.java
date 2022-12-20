package com.missyplusfour.missyplusfour;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

// Temporarily disabling security figures
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class MissyplusfourApplication {

	public static void main(String[] args) {
		SpringApplication.run(MissyplusfourApplication.class, args);
	}

}
