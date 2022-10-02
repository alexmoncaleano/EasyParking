package com.api.project.EasyParking.Servi;

import com.api.project.EasyParking.model.Personas;
import java.util.List;
public interface PersonasService {
    public Personas save(Personas persona);
    public void delete(Integer id);
    public Personas findById(Integer id);
    public List<Personas> findAll();
}

