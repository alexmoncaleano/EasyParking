package com.api.project.EasyParking.DAO;

import com.api.project.EasyParking.model.Personas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PersonasDao extends JpaRepository<Personas, Integer> {

}
