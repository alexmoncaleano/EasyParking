/*package com.api.project.EasyParking.ServiceImplement;

import com.api.project.EasyParking.DAO.UsuariosDao;
import com.api.project.EasyParking.Servi.UsuariosService;
import com.api.project.EasyParking.model.Usuarios;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UsuariosServiceImpl implements UsuariosService {

    @Autowired
    private UsuariosDao usuarioDao;

    @Override

    public Usuarios save(Usuarios usuario) {
        return usuarioDao.save(usuario);
    }

    @Override
    @Transactional(readOnly = true)
    public void delete(Integer id) {
        usuarioDao.deleteById(id);
    }

    @Override
    @Transactional(readOnly = true)
    public Usuarios findById(Integer id) {
        return usuarioDao.findById(id).orElse(null);
    }

    @Override
    public List<Usuarios> findAll() {
        return (List<Usuarios>) usuarioDao.findAll();
    }

    @Override
    public Usuarios findByusuarioAndclave(String user, String password) {
        return usuarioDao.findByUsuarioAndClave(user, password);
    }

}
*/