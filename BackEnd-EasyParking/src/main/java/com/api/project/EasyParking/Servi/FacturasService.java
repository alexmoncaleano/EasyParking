package com.api.project.EasyParking.Servi;

import com.api.project.EasyParking.model.CheckOut;
import com.api.project.EasyParking.model.Facturas;
import com.api.project.EasyParking.model.Register;

import java.util.List;
public interface FacturasService {
    public Facturas save(Facturas factura);
    public void delete(Integer id);
    public Facturas findById(Integer id);
    public List<Facturas> findAll();
    public Facturas customerRegiter(Register register);
    public Integer numberingInvoices(Integer idConfiguracion);
    public Facturas checkOut(CheckOut checkout);
}

