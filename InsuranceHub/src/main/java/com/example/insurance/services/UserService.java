package com.example.insurance.services;

import com.example.insurance.entities.User;
import com.example.insurance.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
	
	
	
	@Autowired
    private UserRepository userRepository;

    public User registerUser(User user) {
        // Check if the email already exists
        if (userRepository.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email is already in use");
        }

        // Save the user to the database
        user.setRole("Customer"); // Set default role as 'Customer'
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String email, String password) {
        // Validate the credentials
        return userRepository.findByEmailAndPassword(email, password);
    }
    
    public User updateUser(Long id, User userDetails) {
        // Fetch user by ID
        User existingUser = userRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + id));

        // Update fields
        existingUser.setUname(userDetails.getUname());
        existingUser.setEmail(userDetails.getEmail());
        existingUser.setPassword(userDetails.getPassword());
        existingUser.setRole(userDetails.getRole());
        existingUser.setAddress(userDetails.getAddress());

        // Save updated user
        return userRepository.save(existingUser);
    }
/*
 * 
 * 
 * 
    @Autowired
    private UserRepository userRepository;

   
    public User registerUser(User user) {
        return userRepository.save(user);
    }

    public Optional<User> loginUser(String email, String password) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user;  // Return the user if login is successful
        }
        return Optional.empty();  // Return empty if user not found or credentials invalid
    }
    
    */

}
