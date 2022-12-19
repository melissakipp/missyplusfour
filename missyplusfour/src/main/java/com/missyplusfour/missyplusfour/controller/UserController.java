package com.missyplusfour.missyplusfour.controller;

import com.missyplusfour.missyplusfour.model.User;
import com.missyplusfour.missyplusfour.service.UserService;
import com.missyplusfour.missyplusfour.shared.GenericResponse;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    final
    UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/api/1.0/users")
    public GenericResponse createUser(@RequestBody User user) {
        userService.save(user);
        return new GenericResponse("User saved");
    }


}
