package com.missyplusfour.missyplusfour.util;

import com.missyplusfour.missyplusfour.model.User;
import com.missyplusfour.missyplusfour.repository.UserRepository;
import jakarta.validation.ConstraintValidator;
import jakarta.validation.ConstraintValidatorContext;

import org.springframework.beans.factory.annotation.Autowired;

public class UniqueUsernameValidator implements ConstraintValidator<UniqueUsername, String>{

    @Autowired
    UserRepository userRepository;

    @Override
    public boolean isValid(String value, ConstraintValidatorContext context) {

        User inDB = userRepository.findByUsername(value);
        if(inDB == null) {
            return true;
        }

        return false;
    }

}
