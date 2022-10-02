package com.api.project.EasyParking.Controller;

import com.api.project.EasyParking.Servi.PlazasService;
import com.api.project.EasyParking.model.CheckOut;
import com.api.project.EasyParking.model.Plazas;
import com.api.project.EasyParking.model.Setting;
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
@RequestMapping("/plaza")
public class PlazasController {

    @Autowired
    private PlazasService plazaservice;

    @PostMapping(value = "/")
    public ResponseEntity<Plazas> agregar(@RequestBody Plazas plaza) {
        Plazas obj = plazaservice.save(plaza);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Plazas> eliminar(@PathVariable Integer id) {
        Plazas obj = plazaservice.findById(id);
        if (obj != null) {
            plazaservice.delete(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<Plazas> editar(@RequestBody Plazas plaza) {
        Plazas obj = plazaservice.findById(plaza.getId_Plazas());
        if (obj != null) {

            obj.setCodigoPlaza(plaza.getCodigoPlaza());
            obj.setEstado(plaza.getEstado());
            obj.setTipoplaza(plaza.getTipoplaza());



            plazaservice.save(obj);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @GetMapping("/list")
    public List<Plazas> consultarTodo() {
        return plazaservice.findAll();
    }

    @GetMapping("/list/{id}")
    public Plazas consultaPorId(@PathVariable Integer id) {
        return plazaservice.findById(id);
    }
    @PostMapping("/list/placa")
    public Plazas consultaPorPlaca(@RequestBody CheckOut placa) {
        return plazaservice.findByPlaca(placa);}

    @PostMapping(value = "/config")
    public Integer generateSeats() {
        Integer obj = plazaservice.generateSeats(1);
        return obj;
    }
    @PostMapping("/available")
    public ResponseEntity<Plazas> findBytipoplazaAndestado(@RequestBody Plazas plaza){
        Plazas obj = plazaservice.findByTipoplazaAndEstado(plaza);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }
    @PostMapping("/available/type")
    public Integer plazasdisponibles(@RequestBody Plazas plaza){
        return plazaservice.findByTipoplazaAndEstadoul(plaza);
    }
}