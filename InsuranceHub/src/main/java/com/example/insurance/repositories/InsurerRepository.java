package com.example.insurance.repositories;


import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.insurance.entities.Insurer;

@Repository
public interface InsurerRepository extends JpaRepository<Insurer, Integer> {
}
