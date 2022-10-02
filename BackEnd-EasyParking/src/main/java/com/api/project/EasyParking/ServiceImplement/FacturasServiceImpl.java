package com.api.project.EasyParking.ServiceImplement;

import com.api.project.EasyParking.DAO.FacturasDao;
import com.api.project.EasyParking.Servi.FacturasService;
import com.api.project.EasyParking.Servi.PlazasService;
import com.api.project.EasyParking.Servi.SettingService;
import com.api.project.EasyParking.model.*;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
@Service
public class FacturasServiceImpl implements FacturasService {
    @Autowired
    private FacturasDao facturaDao;
    @Autowired
    private SettingService settingService;
    @Autowired
    private PlazasService plazasService;
    @Override
    @Transactional(readOnly=false)
    public Facturas save(Facturas factura){
        return facturaDao.save(factura);
    }
    @Override
    @Transactional(readOnly=false)
    public void delete(Integer id){
        facturaDao.deleteById(id);
    }
    @Override
    @Transactional(readOnly=true)
    public Facturas findById(Integer id){
        return facturaDao.findById(id).orElse(null);
    }

    @Override
    public List<Facturas> findAll() {
        return (List<Facturas>) facturaDao.findAll();
    }

    @Override
    public Facturas customerRegiter(Register register) {
        Plazas plazas = new Plazas(); plazas.setTipoplaza(register.getTipoVehiculo()); plazas.setEstado("Available");
        Plazas plaza = plazasService.findByTipoplazaAndEstado(plazas);
        if (plaza == null){return null;}
        List<Facturas> fac = facturaDao.findByPlaca("");
        Facturas factura  = null;
        if (fac.toArray().length != 0){factura = fac.get(0);
            factura.setId_Plazas(plaza);
            plaza.setEstado(register.getPlaca());
            plazasService.save(plaza);
            factura.setTipoVehiculo(register.getTipoVehiculo());
            factura.setPlaca(register.getPlaca());
            factura.setTipoContrato(register.getTipoContrato());
            factura.setFechaEntrada(register.getFechaEntrada());
            factura.setValor(register.getValor());
            factura.setId_Persona(register.getId_Persona());
            facturaDao.save(factura);}
        return factura;
    }
    @Override
    public Integer numberingInvoices(Integer idConfiguracion) {
        Setting setting = settingService.findById(idConfiguracion);
        String prefijo = setting.getPrefijoFac();
        int numberinginit = setting.getNumeracionInic();
        int numberingend = setting.getNumeracionEnd();
        Facturas invoices = new Facturas();
        invoices.setTipoVehiculo("");
        invoices.setPlaca("");
        invoices.setTipoContrato("");
        for (int x = numberinginit; x <= numberingend; x++) {
            invoices.setCodigoFactura((prefijo + x));
            invoices.setId_Facturas(x);
            facturaDao.save(invoices);
        }
        return numberingend - numberinginit;
    }
    @Override
    public Facturas checkOut(CheckOut checkout) {
        Facturas Invoices = facturaDao.findByPlacaAndValor(checkout.getPlaca(), 99999999.0);
        if (Invoices == null){
            return null;
        }
        else{
            Invoices.setFechafactura(checkout.getFechaSalida());
            Invoices.setFechaSallida(checkout.getFechaSalida());
            int diferenciaDeTiempo = (int)( (checkout.getFechaSalida().getTime() - Invoices.getFechaEntrada().getTime()) / (1000 * 60));
            int day = (int)(diferenciaDeTiempo / 1440);
            int hour = (int)((diferenciaDeTiempo % 1440)/60);
            int minutes = (int)((diferenciaDeTiempo % 1440)%60);
            if (Invoices.getTipoVehiculo().equals("Car")){
                if (diferenciaDeTiempo < 11){Invoices.setValor(settingService.findById(1).getFraccionCarro());}
                else{
                    Double valorday = (day * settingService.findById(1).getValorDiaCarro());
                    Double valorhour =(hour * settingService.findById(1).getTarifaCarro());
                    Double valorminutes = 0.0;
                    if(minutes>10){valorminutes = settingService.findById(1).getTarifaCarro();}
                    double valor = valorday + valorhour + valorminutes;
                    Invoices.setValor(valor);
                }
            }
            if (Invoices.getTipoVehiculo().equals("Motorcycle")){
                if (diferenciaDeTiempo < 11){Invoices.setValor(settingService.findById(1).getFraccionMoto());}
                else{
                    Double valorday = (day * settingService.findById(1).getValorDiaMoto());
                    Double valorhour =(hour * settingService.findById(1).getTarifaMoto());
                    Double valorminutes = 0.0;
                    if(minutes>10){valorminutes = settingService.findById(1).getTarifaMoto();}
                    double valor = valorday + valorhour + valorminutes;
                    Invoices.setValor(valor);
                }
            }facturaDao.save(Invoices); Plazas plaza = Invoices.getId_Plazas(); plaza.setEstado("Available");plazasService.save(plaza);
            return Invoices;}
    }
}


