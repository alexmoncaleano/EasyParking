package com.api.project.EasyParking.DAO;

import com.api.project.EasyParking.model.Plazas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 *
 * @author USUARIO
 */
@Repository
public interface PlazasDao  extends JpaRepository<Plazas, Integer> {


    @Transactional(readOnly = false)
    List<Plazas> findByTipoplazaAndEstado(String TipoPlaza, String Estado);


    Plazas findByEstado(String Estado);
}