package com.api.project.EasyParking.model;

import com.sun.istack.NotNull;
import lombok.Data;

import java.io.Serializable;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;



@Data
@Entity
@Table(name = "plazas")
public class Plazas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Plazas")
    private Integer id_Plazas;

    @Column(name = "codigoplaza")
    private String codigoPlaza;

    @Column(name = "tipoplaza")
    private String tipoplaza;

    @Column(name = "estado")
    private String estado;

	public Integer getId_Plazas() {
		return id_Plazas;
	}

	public void setId_Plazas(Integer id_Plazas) {
		this.id_Plazas = id_Plazas;
	}

	public String getCodigoPlaza() {
		return codigoPlaza;
	}

	public void setCodigoPlaza(String codigoPlaza) {
		this.codigoPlaza = codigoPlaza;
	}

	public String getTipoplaza() {
		return tipoplaza;
	}

	public void setTipoplaza(String tipoplaza) {
		this.tipoplaza = tipoplaza;
	}

	public String getEstado() {
		return estado;
	}

	public void setEstado(String estado) {
		this.estado = estado;
	}

	



}
