package com.example.insurance.controllers;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.example.insurance.entities.Insurer;
import com.example.insurance.services.InsurerService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/insurers")
public class InsurerController {
    @Autowired
    private InsurerService insurerService;

    @GetMapping
    public List<Insurer> getAllInsurers() {
        return insurerService.getAllInsurers();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Insurer> getInsurerById(@PathVariable Integer id) {
        Optional<Insurer> insurer = insurerService.getInsurerById(id);
        return insurer.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Insurer> createInsurer(@RequestBody Insurer insurer) {
        return ResponseEntity.ok(insurerService.createInsurer(insurer));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Insurer> updateInsurer(@PathVariable Integer id, @RequestBody Insurer updatedInsurer) {
        Insurer insurer = insurerService.updateInsurer(id, updatedInsurer);
        return insurer != null ? ResponseEntity.ok(insurer) : ResponseEntity.notFound().build();
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInsurer(@PathVariable Integer id) {
        return insurerService.deleteInsurer(id) ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
