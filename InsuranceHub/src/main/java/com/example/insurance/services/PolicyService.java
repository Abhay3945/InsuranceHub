package com.example.insurance.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.insurance.entities.Policy;
import com.example.insurance.repositories.PolicyRepository;

import java.util.List;
import java.util.Optional;

@Service
public class PolicyService {
    @Autowired
    private PolicyRepository policyRepository;
//
//    public List<Policy> getAllPolicies() {
//        return policyRepository.findAll();
//    }

    public List<Policy> getAllPolicies() {
        List<Policy> policies = policyRepository.findAll();
        System.out.println("Fetched policies: " + policies);  // Debugging line to print policies
        return policies;
    }

    
    public Optional<Policy> getPolicyById(Integer id) {
        return policyRepository.findById(id);
    }

    public Policy createPolicy(Policy policy) {
        return policyRepository.save(policy);
    }

    public Policy updatePolicy(Integer id, Policy updatedPolicy) {
        if (policyRepository.existsById(id)) {
            updatedPolicy.setPolicyID(id);
            return policyRepository.save(updatedPolicy);
        }
        return null;
    }

    public boolean deletePolicy(Integer id) {
        if (policyRepository.existsById(id)) {
            policyRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
