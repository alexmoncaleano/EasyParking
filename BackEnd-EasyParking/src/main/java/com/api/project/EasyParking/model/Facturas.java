package com.api.project.EasyParking.model;

import com.sun.istack.NotNull;
import lombok.Data;

import java.util.Date;
import java.io.Serializable;
import java.util.Objects;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "facturas")
public class Facturas implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "idfacturas")
    private Integer id_Facturas;

    @Column(name = "codigofactura")
    private String codigoFactura;

    @Column(name = "tipovehiculo")
    private String tipoVehiculo;

    @Column(name = "placa")
    private String placa;

    @Column(name = "tipocontrato")
    private String tipoContrato;

    @Column(name = "fechaentrada")
    private Date fechaEntrada;

    @Column(name = "fechasalida")
    private Date fechaSallida;

    @Column(name = "valor")
    private Double valor;

    @Column(name = "fechafactura")
    private Date fechafactura;


    //@NotNull
    @ManyToOne
    @JoinColumn(name = "id_Personas")
    private Personas id_Persona;

    //@NotNull
    @ManyToOne
    @JoinColumn(name = "id_Plazas")
    private Plazas id_Plazas;

    public Facturas(){}

    
    public Integer getId_Facturas() {
		return id_Facturas;
	}


	public void setId_Facturas(Integer id_Facturas) {
		this.id_Facturas = id_Facturas;
	}


	public String getCodigoFactura() {
		return codigoFactura;
	}


	public void setCodigoFactura(String codigoFactura) {
		this.codigoFactura = codigoFactura;
	}


	public String getTipoVehiculo() {
		return tipoVehiculo;
	}


	public void setTipoVehiculo(String tipoVehiculo) {
		this.tipoVehiculo = tipoVehiculo;
	}


	public String getPlaca() {
		return placa;
	}


	public void setPlaca(String placa) {
		this.placa = placa;
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


	public Date getFechaSallida() {
		return fechaSallida;
	}


	public void setFechaSallida(Date fechaSallida) {
		this.fechaSallida = fechaSallida;
	}


	public Double getValor() {
		return valor;
	}


	public void setValor(Double valor) {
		this.valor = valor;
	}


	public Date getFechafactura() {
		return fechafactura;
	}


	public void setFechafactura(Date fechafactura) {
		this.fechafactura = fechafactura;
	}


	public Personas getId_Persona() {
		return id_Persona;
	}


	public void setId_Persona(Personas id_Persona) {
		this.id_Persona = id_Persona;
	}


	public Plazas getId_Plazas() {
		return id_Plazas;
	}


	public void setId_Plazas(Plazas id_Plazas) {
		this.id_Plazas = id_Plazas;
	}


	@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof Facturas facturas)) return false;
        return getTipoVehiculo().equals(facturas.getTipoVehiculo());
    }

    @Override
    public int hashCode() {
        return Objects.hash(getTipoVehiculo());
    }
    
}
