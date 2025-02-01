package com.example.insurance.entities;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "Users")
public class User {


	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Integer uid;

	    @Column(nullable = false)
	    private String uname;

	    @Column(nullable = false, unique = true)
	    private String email;

	    @Column(nullable = false)
	    private String password;

	    @Column(nullable = false)
	    private String role;
	    
	    @Column(nullable = false) // Make the address field required
	    private String address;  // Added the address field

	    // Getters and Setters
	    public Integer getUid() {
	        return uid;
	    }

	    public void setUid(Integer uid) {
	        this.uid = uid;
	    }

	    public String getUname() {
	        return uname;
	    }

	    public void setUname(String uname) {
	        this.uname = uname;
	    }

	    public String getEmail() {
	        return email;
	    }

	    public void setEmail(String email) {
	        this.email = email;
	    }

	    public String getPassword() {
	        return password;
	    }

	    public void setPassword(String password) {
	        this.password = password;
	    }

	    public String getRole() {
	        return role;
	    }

	    public void setRole(String role) {
	        this.role = role;
	    }
	
	    public String getAddress() {
	        return address;
	    }

	    public void setAddress(String address) {
	        this.address = address;

	
	
	
	
	
	
	
	
	
	    }
	
	
	
	
}
