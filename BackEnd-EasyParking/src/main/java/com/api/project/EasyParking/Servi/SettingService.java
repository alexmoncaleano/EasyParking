package com.api.project.EasyParking.Servi;

import com.api.project.EasyParking.model.Setting;
import java.util.List;

public interface SettingService {
    public Setting save(Setting setting);
    public void delete(Integer id);
    public Setting findById(Integer id);
    public List<Setting> findAll();

}
