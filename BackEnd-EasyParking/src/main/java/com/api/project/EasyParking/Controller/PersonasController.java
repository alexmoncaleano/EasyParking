package com.api.project.EasyParking.Controller;

import com.api.project.EasyParking.Servi.PersonasService;
import com.api.project.EasyParking.model.Personas;
import java.util.List;
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


@RestController
@CrossOrigin("*")
@RequestMapping("/persona")
public class PersonasController {

    @Autowired
    private PersonasService personaservice;

    @PostMapping(value = "/")
    public ResponseEntity<Personas> agregar(@RequestBody Personas persona) {
        Personas obj = personaservice.save(persona);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Personas> eliminar(@PathVariable Integer id) {
        Personas obj = personaservice.findById(id);
        if (obj != null) {
            personaservice.delete(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<Personas> editar(@RequestBody Personas persona) {
        Personas obj = personaservice.findById(persona.getId_Persona());
        if (obj != null) {

            obj.setNombre(persona.getNombre());
            obj.setApellidos(persona.getApellidos());
            obj.setDireccion(persona.getDireccion());
            obj.setEmail(persona.getEmail());
            obj.setNumDoc(persona.getNumDoc());
            obj.setTipoDoc(persona.getTipoDoc());
            obj.setTelefono(persona.getTelefono());

            personaservice.save(obj);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @GetMapping("/list")
    public List<Personas> consultarTodo() {
        return personaservice.findAll();
    }

    @GetMapping("/list/{id}")
    public Personas consultaPorId(@PathVariable Integer id) {
        return personaservice.findById(id);
    }
}
