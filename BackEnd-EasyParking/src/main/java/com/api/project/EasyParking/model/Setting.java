package com.api.project.EasyParking.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table (name = "configuracion")
public class Setting {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_Configuracion")
    private Integer id_Configuracion;

    @Column(name = "nombreparqueadero")
    private String nombreParqueadero;

    @Column(name = "plazascarro")
    private Integer plazasCarro;

    @Column(name = "plazasmoto")
    private Integer plazasMoto;

    @Column(name = "prefijofac")
    private String prefijoFac;

    @Column(name = "numeracioninic")
    private Integer numeracionInic;

    @Column(name = "numeracionend")
    private Integer numeracionEnd;

    @Column(name = "valorhoracarro")
    private Double tarifaCarro;

    @Column(name = "valorhoramoto")
    private Double tarifaMoto;

    @Column(name = "valorfraccarro")
    private Double fraccionCarro;

    @Column(name = "valorfracmoto")
    private Double fraccionMoto;

    @Column(name = "valordiacarro")
    private Double valorDiaCarro;

    @Column(name = "valordiamoto")
    private Double valorDiaMoto;

    @Column(name = "valorsemanacarro")
    private Double valorSemanaCarro;

    @Column(name = "valorsemanamoto")
    private Double valorSemanaMoto;

    @Column(name = "valormescarro")
    private Double valorMesCarro;

    @Column(name = "valormesmoto")
    private Double valorMesMoto;

    public Integer getId_Configuracion() {
        return id_Configuracion;
    }




    public void setId_Configuracion(Integer idConfiguracion) {
        this.id_Configuracion = idConfiguracion;
    }




	public String getNombreParqueadero() {
		return nombreParqueadero;
	}




	public void setNombreParqueadero(String nombreParqueadero) {
		this.nombreParqueadero = nombreParqueadero;
	}




	public Integer getPlazasCarro() {
		return plazasCarro;
	}




	public void setPlazasCarro(Integer plazasCarro) {
		this.plazasCarro = plazasCarro;
	}




	public Integer getPlazasMoto() {
		return plazasMoto;
	}




	public void setPlazasMoto(Integer plazasMoto) {
		this.plazasMoto = plazasMoto;
	}




	public String getPrefijoFac() {
		return prefijoFac;
	}




	public void setPrefijoFac(String prefijoFac) {
		this.prefijoFac = prefijoFac;
	}




	public Integer getNumeracionInic() {
		return numeracionInic;
	}




	public void setNumeracionInic(Integer numeracionInic) {
		this.numeracionInic = numeracionInic;
	}




	public Integer getNumeracionEnd() {
		return numeracionEnd;
	}




	public void setNumeracionEnd(Integer numeracionEnd) {
		this.numeracionEnd = numeracionEnd;
	}




	public Double getTarifaCarro() {
		return tarifaCarro;
	}




	public void setTarifaCarro(Double tarifaCarro) {
		this.tarifaCarro = tarifaCarro;
	}




	public Double getTarifaMoto() {
		return tarifaMoto;
	}




	public void setTarifaMoto(Double tarifaMoto) {
		this.tarifaMoto = tarifaMoto;
	}




	public Double getFraccionCarro() {
		return fraccionCarro;
	}




	public void setFraccionCarro(Double fraccionCarro) {
		this.fraccionCarro = fraccionCarro;
	}




	public Double getFraccionMoto() {
		return fraccionMoto;
	}




	public void setFraccionMoto(Double fraccionMoto) {
		this.fraccionMoto = fraccionMoto;
	}




	public Double getValorDiaCarro() {
		return valorDiaCarro;
	}




	public void setValorDiaCarro(Double valorDiaCarro) {
		this.valorDiaCarro = valorDiaCarro;
	}




	public Double getValorDiaMoto() {
		return valorDiaMoto;
	}




	public void setValorDiaMoto(Double valorDiaMoto) {
		this.valorDiaMoto = valorDiaMoto;
	}




	public Double getValorSemanaCarro() {
		return valorSemanaCarro;
	}




	public void setValorSemanaCarro(Double valorSemanaCarro) {
		this.valorSemanaCarro = valorSemanaCarro;
	}




	public Double getValorSemanaMoto() {
		return valorSemanaMoto;
	}




	public void setValorSemanaMoto(Double valorSemanaMoto) {
		this.valorSemanaMoto = valorSemanaMoto;
	}




	public Double getValorMesCarro() {
		return valorMesCarro;
	}




	public void setValorMesCarro(Double valorMesCarro) {
		this.valorMesCarro = valorMesCarro;
	}




	public Double getValorMesMoto() {
		return valorMesMoto;
	}




	public void setValorMesMoto(Double valorMesMoto) {
		this.valorMesMoto = valorMesMoto;
	}

    
}
