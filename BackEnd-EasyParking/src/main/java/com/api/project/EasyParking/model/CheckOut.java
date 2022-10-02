package com.api.project.EasyParking.model;

import lombok.Data;
import java.util.Date;

@Data
public class CheckOut {
    private String placa;
    private Date fechaSalida;
	public String getPlaca() {
		return placa;
	}
	public void setPlaca(String placa) {
		this.placa = placa;
	}
	public Date getFechaSalida() {
		return fechaSalida;
	}
	public void setFechaSalida(Date fechaSalida) {
		this.fechaSalida = fechaSalida;
	}
    
}
