package com.api.project.EasyParking.ServiceImplement;

import com.api.project.EasyParking.DAO.PersonasDao;
import com.api.project.EasyParking.Servi.PersonasService;
import com.api.project.EasyParking.model.Personas;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class PersonasServiceImpl implements PersonasService {
    @Autowired
    private PersonasDao personaDao;
    @Override
    public Personas save(Personas persona){
        return personaDao.save(persona);
    }
    @Override
    @Transactional(readOnly=false)
    public void delete(Integer id){
        personaDao.deleteById(id);
    }
    @Override
    @Transactional(readOnly=true)
    public Personas findById(Integer id){
        return personaDao.findById(id).orElse(null);
    }

    @Override
    public List<Personas> findAll() {
        return (List<Personas>) personaDao.findAll();
    }
}


