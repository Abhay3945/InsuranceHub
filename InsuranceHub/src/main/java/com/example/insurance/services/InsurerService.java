package com.example.insurance.services;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.insurance.entities.Insurer;
import com.example.insurance.repositories.InsurerRepository;

import java.util.List;
import java.util.Optional;

@Service
public class InsurerService {
    @Autowired
    private InsurerRepository insurerRepository;

    public List<Insurer> getAllInsurers() {
        return insurerRepository.findAll();
    }

    public Optional<Insurer> getInsurerById(Integer id) {
        return insurerRepository.findById(id);
    }

    public Insurer createInsurer(Insurer insurer) {
        return insurerRepository.save(insurer);
    }

    public Insurer updateInsurer(Integer id, Insurer updatedInsurer) {
        if (insurerRepository.existsById(id)) {
            updatedInsurer.setId(id);
            return insurerRepository.save(updatedInsurer);
        }
        return null;
    }

    public boolean deleteInsurer(Integer id) {
        if (insurerRepository.existsById(id)) {
            insurerRepository.deleteById(id);
            return true;
        }
        return false;
    }
}
