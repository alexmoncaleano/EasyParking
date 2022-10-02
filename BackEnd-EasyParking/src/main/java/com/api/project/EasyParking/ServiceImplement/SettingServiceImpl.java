package com.api.project.EasyParking.ServiceImplement;

import com.api.project.EasyParking.DAO.SettingDao;
import com.api.project.EasyParking.Servi.SettingService;
import com.api.project.EasyParking.model.Setting;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class SettingServiceImpl implements SettingService {

    @Autowired
    private SettingDao settingDao;

    @Override
    @Transactional(readOnly=false)
    public Setting save(Setting setting) {
        return settingDao.save(setting);
    }

    @Override
    @Transactional(readOnly=false)
    public void delete(Integer id){
        settingDao.deleteById(id);
    }

    @Override
    @Transactional(readOnly=true)
    public Setting findById(Integer id) {
        return settingDao.findById(id).orElse(null);
    }

    @Override
    @Transactional(readOnly=true)
    public List<Setting> findAll() {
        return (List<Setting>) settingDao.findAll();
    }

}
