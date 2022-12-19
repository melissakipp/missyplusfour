package com.missyplusfour.missyplusfour.controller;

import com.missyplusfour.missyplusfour.model.User;
import com.missyplusfour.missyplusfour.repository.UserRespository;

import static org.assertj.core.api.Assertions.assertThat;

import com.missyplusfour.missyplusfour.shared.GenericResponse;
import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.MethodSorters;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.Objects;

@RunWith(SpringRunner.class)
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ActiveProfiles("test")
public class UserControllerTest {

    private static final String API_1_0_USERS = "/api/1.0/users";

    // Create an HTTP client: spring boot will create an application context that will contain an instance
    @Autowired // Spring Boot Dependency Injection (Field Injection)
    TestRestTemplate testRestTemplate;

    @Autowired // Spring Boot Dependency Injection (Field Injection)
    UserRespository userRespository;

    @Before
    public void cleanup() {
        userRespository.deleteAll();
    }

    @Test
    public void postUser_whenUserIsValid_receiveOK() {
        User user = createValidUser();
        // Using the client
        ResponseEntity<Object> response = testRestTemplate.postForEntity(API_1_0_USERS, user, Object.class);
        // Test
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        // Fails: Create a UserController class then test will pass.
    }

    @Test
    public void postUser_whenUserIsValid_userSavedToDatabase() {
        User user = createValidUser();
        testRestTemplate.postForEntity(API_1_0_USERS, user, Object.class);
        assertThat(userRespository.count()).isEqualTo(1);
        // This test fails because we are getting a zero returned
        // Create in the controller
    }

    // Send a message back to the client
    @Test
    public void postUser_whenUserIsValid_receiveSuccessMessage() {
        User user = createValidUser();
        // Generic Response needs to be created
        ResponseEntity<GenericResponse> response = testRestTemplate.postForEntity(API_1_0_USERS, user, GenericResponse.class);
        assertThat(Objects.requireNonNull(response.getBody()).getMessage()).isNotNull();
    }

    private User createValidUser() {
        // What makes a valid user? (Once you have your requirements then create in User.java)
        User user = new User();
        user.setUsername("test-user");
        user.setDisplayName("test");
        user.setPassword("Abc123");
        return user;
    }

}
