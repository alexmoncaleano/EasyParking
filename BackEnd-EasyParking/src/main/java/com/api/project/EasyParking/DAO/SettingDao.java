package com.api.project.EasyParking.DAO;

import com.api.project.EasyParking.model.Setting;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SettingDao extends JpaRepository<Setting, Integer>{

}
