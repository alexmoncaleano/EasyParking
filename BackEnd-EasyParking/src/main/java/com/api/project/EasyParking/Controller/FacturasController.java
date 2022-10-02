package com.api.project.EasyParking.Controller;


import com.api.project.EasyParking.Servi.FacturasService;
import com.api.project.EasyParking.model.CheckOut;
import com.api.project.EasyParking.model.Facturas;
import com.api.project.EasyParking.model.Register;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/factura")
public class FacturasController {

    @Autowired
    private FacturasService facturaservice;

    @PostMapping(value = "/")
    public ResponseEntity<Facturas> agregar(@RequestBody Facturas factura) {
        Facturas obj = facturaservice.save(factura);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Facturas> eliminar(@PathVariable Integer id) {
        Facturas obj = facturaservice.findById(id);
        if (obj != null) {
            facturaservice.delete(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<Facturas> editar(@RequestBody Facturas factura) {
        Facturas obj = facturaservice.findById(factura.getId_Facturas());
        if (obj != null) {

            obj.setFechaEntrada(factura.getFechaEntrada());
            obj.setFechaSallida(factura.getFechaSallida());
            obj.setCodigoFactura(factura.getCodigoFactura());
            obj.setId_Persona(factura.getId_Persona());
            obj.setPlaca(factura.getPlaca());
            obj.setTipoContrato(factura.getTipoContrato());
            obj.setTipoVehiculo(factura.getTipoVehiculo());

            obj.setId_Plazas(factura.getId_Plazas());

            obj.setFechafactura(factura.getFechafactura());

            facturaservice.save(obj);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @GetMapping("/list")
    public List<Facturas> consultarTodo() {
        return facturaservice.findAll();
    }

    @GetMapping("/list/{id}")
    public Facturas consultaPorId(@PathVariable Integer id) {
        return facturaservice.findById(id);
    }

    @PostMapping(value = "/config")
    public Integer generateInvoces() {
        Integer obj = facturaservice.numberingInvoices(1);
        return obj;
    }
    @PostMapping(value = "/registro")
    public ResponseEntity<Facturas> register(@RequestBody Register register) {
        Facturas obj = facturaservice.customerRegiter(register);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    @PostMapping(value = "/checkout")
    public ResponseEntity<Facturas> checkout(@RequestBody CheckOut checkout) {
        Facturas obj = facturaservice.checkOut(checkout);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
}
