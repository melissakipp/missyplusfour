package com.missyplusfour.missyplusfour.service;

import com.missyplusfour.missyplusfour.model.User;
import com.missyplusfour.missyplusfour.repository.UserRespository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

// Telling spring to create an instance of this class.
@Service
public class UserService {

    // Field Injection - User service will be passing the user save operations to user repository.
    UserRespository userRespository;

    BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRespository userRespository) {
        super();
        this.userRespository = userRespository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRespository.save(user);
    }
}
