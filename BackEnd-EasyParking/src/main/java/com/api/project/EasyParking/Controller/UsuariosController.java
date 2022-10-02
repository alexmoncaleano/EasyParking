/*package com.api.project.EasyParking.Controller;

import com.api.project.EasyParking.Servi.UsuariosService;
import com.api.project.EasyParking.model.Usuarios;
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
@RequestMapping("/usuario")
public class UsuariosController {

    @Autowired
    private UsuariosService usuarioservice;

    @PostMapping(value = "/")
    public ResponseEntity<Usuarios> agregar(@RequestBody Usuarios usuario) {
        Usuarios obj = usuarioservice.save(usuario);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Usuarios> eliminar(@PathVariable Integer id) {
        Usuarios obj = usuarioservice.findById(id);
        if (obj != null) {
            usuarioservice.delete(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<Usuarios> editar(@RequestBody Usuarios usuario) {
        Usuarios obj = usuarioservice.findById(usuario.getId_Usuarios());
        if (obj != null) {

            obj.setClave(usuario.getClave());
            obj.setId_Persona(usuario.getId_Persona());
            obj.setRol(usuario.getRol());
            obj.setUsuario(usuario.getUsuario());


            usuarioservice.save(obj);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @GetMapping("/list")
    public List<Usuarios> consultarTodo() {
        return usuarioservice.findAll();
    }

    @GetMapping("/list/{id}")
    public Usuarios consultaPorId(@PathVariable Integer id) {
        return usuarioservice.findById(id);
    }

    @PostMapping("/login")
    public boolean login(@RequestBody Usuarios usuarios) {
        Usuarios usuario = usuarioservice.findByusuarioAndclave(usuarios.getUsuario(), usuarios.getClave());
        return usuario != null;
    }
}
*/