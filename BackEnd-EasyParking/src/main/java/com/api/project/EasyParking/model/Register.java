package com.api.project.EasyParking.model;

import lombok.Data;
import java.util.Date;
@Data
public class Register {
    private String placa;
    private String tipoVehiculo;
    private String tipoContrato;
    private Date fechaEntrada;
    private Double valor;
    private Personas id_Persona;
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public String getTipoVehiculo() {
		return tipoVehiculo;
	}
	public void setTipoVehiculo(String tipoVehiculo) {
		this.tipoVehiculo = tipoVehiculo;
	}
	public String getTipoContrato() {
		return tipoContrato;
	}
	public void setTipoContrato(String tipoContrato) {
		this.tipoContrato = tipoContrato;
	}
	public Date getFechaEntrada() {
		return fechaEntrada;
	}
	public void setFechaEntrada(Date fechaEntrada) {
		this.fechaEntrada = fechaEntrada;
	}
	public Double getValor() {
		return valor;
	}
	public void setValor(Double valor) {
		this.valor = valor;
	}
	public Personas getId_Persona() {
		return id_Persona;
	}
	public void setId_Persona(Personas id_Persona) {
		this.id_Persona = id_Persona;
	}
    
    
}
