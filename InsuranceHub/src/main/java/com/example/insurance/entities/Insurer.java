package com.example.insurance.entities;

import jakarta.persistence.*;


import java.util.List;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

@Entity
@Table(name = "insurer")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})  // Prevents Lazy Initialization issues

public class Insurer {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "I_ID")  
    private Integer id;  

    @Column(name = "I_name", nullable = false)
    private String name;  

    @Column(name = "LicenseNO", nullable = false, unique = true)
    private String licenseNo;  

    @OneToOne(fetch = FetchType.LAZY)  
    @JoinColumn(name = "UID", nullable = false)
    @JsonIgnore  // 👈 Prevents serialization issues with User
    private User user;

    @OneToMany(mappedBy = "insurer", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    @JsonManagedReference
    // 👈 Prevents infinite loop
    @JsonIgnore 
    private List<Policy> policies;


	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLicenseNo() {
		return licenseNo;
	}

	public void setLicenseNo(String licenseNo) {
		this.licenseNo = licenseNo;
	}

	public User getUser() {
		return user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	public List<Policy> getPolicies() {
		return policies;
	}

	public void setPolicies(List<Policy> policies) {
		this.policies = policies;
	}

	

}
