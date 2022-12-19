package com.missyplusfour.missyplusfour.service;

import com.missyplusfour.missyplusfour.model.User;
import com.missyplusfour.missyplusfour.repository.UserRespository;
import org.springframework.stereotype.Service;

// Telling spring to create an instance of this class.
@Service
public class UserService {

    // Field Injection - User service will be passing the user save operations to user repository.
    UserRespository userRespository;

    public UserService(UserRespository userRespository) {
        super();
        this.userRespository = userRespository;
    }

    public User save(User user) {
        return userRespository.save(user);
    }
}
