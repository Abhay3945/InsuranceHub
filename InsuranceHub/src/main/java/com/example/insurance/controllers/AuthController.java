package com.example.insurance.controllers;

import com.example.insurance.entities.User;
import com.example.insurance.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api1s")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserService userService;
    
    
   
        // Register endpoint
        @PostMapping("/register")
        public ResponseEntity<?> registerUser(@RequestBody User user) {
            try {
                User registeredUser = userService.registerUser(user);
                return ResponseEntity.ok(registeredUser); // Return the registered user
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: " + e.getMessage());
            }
        }

        // Login endpoint
        @PostMapping("/login")
        public ResponseEntity<?> loginUser(@RequestBody User user) {
            Optional<User> loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());
            if (loggedInUser.isPresent()) {
                return ResponseEntity.ok(loggedInUser.get()); // Return the logged-in user details
            } else {
                return ResponseEntity.status(401).body("Invalid credentials");
            }
        }

     // Update endpoint
        @PutMapping("/update/{id}")
        public ResponseEntity<?> updateUser(@PathVariable Long id, @RequestBody User user) {
            try {
                User updatedUser = userService.updateUser(id, user);
                return ResponseEntity.ok(updatedUser); // Return updated user
            } catch (Exception e) {
                return ResponseEntity.badRequest().body("Error: " + e.getMessage());
            }
        }

}

/*
    // Register endpoint
    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        try {
            User registeredUser = userService.registerUser(user);
            return ResponseEntity.ok(registeredUser); // Return 200 OK with the registered user details
        } catch (Exception e) {
            return ResponseEntity.badRequest().body("Error: " + e.getMessage()); // Return 400 Bad Request with the error message
        }
    }
*//*
    // Login endpoint
    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody User user) {
        // Perform login by matching email and password
        Optional<User> loggedInUser = userService.loginUser(user.getEmail(), user.getPassword());

        // If user found, return 200 OK with the user details
        if (loggedInUser.isPresent()) {
            return ResponseEntity.ok(loggedInUser.get());
        } else {
            // If not found, return 401 Unauthorized with an error message
            return ResponseEntity.status(401).body("Invalid credentials");
        }
    }
*/