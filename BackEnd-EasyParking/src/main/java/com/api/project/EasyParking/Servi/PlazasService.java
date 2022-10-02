package com.api.project.EasyParking.Servi;

import com.api.project.EasyParking.model.CheckOut;
import com.api.project.EasyParking.model.Plazas;
import java.util.List;
import java.util.Optional;

/**
 *
 * @author USUARIO
 */
public interface PlazasService {
    public Plazas save(Plazas plaza);
    public void delete(Integer id);
    public Plazas findById(Integer id);
    public List<Plazas> findAll();
    public Integer generateSeats(Integer idparqueadero);
    Plazas findByTipoplazaAndEstado(Plazas plaza);
    Plazas findByPlaca(CheckOut placa);

    public Integer findByTipoplazaAndEstadoul(Plazas plaza);
}
