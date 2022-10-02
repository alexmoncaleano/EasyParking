package com.api.project.EasyParking.Controller;

import com.api.project.EasyParking.Servi.SettingService;
import com.api.project.EasyParking.model.Setting;
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
@RequestMapping("/setting")
public class SettingController {

    @Autowired
    private SettingService settingService;

    @PostMapping(value = "/")
    public ResponseEntity<Setting> agregar(@RequestBody Setting setting) {
        Setting obj = settingService.save(setting);
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<Setting> eliminar(@PathVariable Integer id) {
        Setting obj = settingService.findById(id);
        if (obj != null) {
            settingService.delete(id);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @PutMapping(value = "/")
    public ResponseEntity<Setting> editar(@RequestBody Setting setting) {
        Setting obj = settingService.findById(setting.getId_Configuracion());
        if (obj != null) {

            obj.setNombreParqueadero(setting.getNombreParqueadero());
            obj.setPrefijoFac(setting.getPrefijoFac());
            obj.setNumeracionInic(setting.getNumeracionInic());
            obj.setNumeracionEnd(setting.getNumeracionEnd());
            obj.setPlazasCarro(setting.getPlazasCarro());
            obj.setPlazasMoto(setting.getPlazasMoto());
            obj.setTarifaCarro(setting.getTarifaCarro());
            obj.setFraccionMoto(setting.getTarifaMoto());
            obj.setFraccionCarro(setting.getFraccionCarro());
            obj.setTarifaMoto(setting.getTarifaMoto());
            obj.setValorDiaCarro(setting.getValorDiaCarro());
            obj.setValorDiaMoto(setting.getValorDiaMoto());
            obj.setValorSemanaCarro(setting.getValorSemanaCarro());
            obj.setValorSemanaMoto(setting.getValorSemanaMoto());
            obj.setValorMesCarro(setting.getValorMesCarro());
            obj.setValorMesMoto(setting.getValorMesMoto());


            settingService.save(obj);
        } else {
            return new ResponseEntity<>(obj, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return new ResponseEntity<>(obj, HttpStatus.OK);
    }

    @GetMapping("/list")
    public List<Setting> consultarTodo() {
        return settingService.findAll();
    }

    @GetMapping("/list/{id}")
    public Setting consultaPorId(@PathVariable Integer id) {
        return settingService.findById(id);
    }



}
