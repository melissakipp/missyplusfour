package com.missyplusfour.missyplusfour.service;

import com.missyplusfour.missyplusfour.model.User;
import com.missyplusfour.missyplusfour.repository.UserRepository;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

// Telling spring to create an instance of this class.
@Service
public class UserService {

    // Field Injection - User service will be passing the user save operations to user repository.
    UserRepository userRepository;

    BCryptPasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository) {
        super();
        this.userRepository = userRepository;
        this.passwordEncoder = new BCryptPasswordEncoder();
    }

    public User save(User user) {
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepository.save(user);
    }
}
