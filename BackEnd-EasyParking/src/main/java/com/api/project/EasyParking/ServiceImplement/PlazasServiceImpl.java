package com.api.project.EasyParking.ServiceImplement;

import com.api.project.EasyParking.DAO.PlazasDao;
import com.api.project.EasyParking.Servi.PlazasService;
import com.api.project.EasyParking.Servi.SettingService;
import com.api.project.EasyParking.model.CheckOut;
import com.api.project.EasyParking.model.Plazas;
import com.api.project.EasyParking.model.Setting;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class PlazasServiceImpl implements PlazasService {
    @Autowired
    private PlazasDao plazaDao;
    @Autowired
    private SettingService settingService;
    @Override
    @Transactional(readOnly=false)
    public Plazas save(Plazas plaza){
        return plazaDao.save(plaza);
    }
    @Override
    @Transactional(readOnly=false)
    public void delete(Integer id){
        plazaDao.deleteById(id);
    }
    @Override
    @Transactional(readOnly=true)
    public Plazas findById(Integer id){
        return plazaDao.findById(id).orElse(null);
    }

    @Override
    public List<Plazas> findAll() {
        return (List<Plazas>) plazaDao.findAll();
    }

    @Override
    @Transactional(readOnly=false)
    public Integer generateSeats(Integer idConfiguracion) {
        plazaDao.deleteAll();
        Setting setting = settingService.findById(idConfiguracion);
        int SeatsMotorcycle = setting.getPlazasMoto();
        int SeatsCar = setting.getPlazasCarro();
        Plazas seats = new Plazas();
        int com = 1;
        for (int x = 0; x < SeatsMotorcycle; x++) {
            seats.setId_Plazas(com);
            seats.setCodigoPlaza("Motorcycle " + com);
            seats.setEstado("Available");
            seats.setTipoplaza("Motorcycle");
            plazaDao.save(seats);
            com++;
        }
        com = 1;
        for (int x = 0; x < SeatsCar; x++) {
            seats.setId_Plazas(com);
            seats.setCodigoPlaza("Car " + com);
            seats.setEstado("Available");
            seats.setTipoplaza("Car");
            plazaDao.save(seats);
            com++;
        }
        return SeatsMotorcycle + SeatsCar;
    }
    public Plazas findByTipoplazaAndEstado(Plazas plaza){
        List<Plazas> plazas = plazaDao.findByTipoplazaAndEstado(plaza.getTipoplaza(), plaza.getEstado());
        if (plazas.toArray().length != 0){
            return plazas.get(0);
        }else{
            return null;
        }
    }
    public Integer findByTipoplazaAndEstadoul(Plazas plaza){
        List<Plazas> plazas = plazaDao.findByTipoplazaAndEstado(plaza.getTipoplaza(), plaza.getEstado());
            return plazas.toArray().length;
    }

    @Override
    public Plazas findByPlaca(CheckOut placa) {
        String Placa = placa.getPlaca();
        Plazas plaza = plazaDao.findByEstado(Placa);
        if(plaza != null){
            return plaza;
        }
        else{
            Plazas plaz = new Plazas(); return plaz;}
    }


}