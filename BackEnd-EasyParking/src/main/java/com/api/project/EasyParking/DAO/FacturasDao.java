package com.api.project.EasyParking.DAO;

import com.api.project.EasyParking.model.Facturas;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Repository
public interface FacturasDao extends JpaRepository<Facturas, Integer> {

    @Transactional(readOnly = false)
    List<Facturas> findByPlaca(String Placa);

    @Transactional(readOnly = false)
    Facturas findByPlacaAndValor(String Placa, Double Valor);

}
