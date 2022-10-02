function registrovehiculo() {
    const placa = document.getElementById("placa").value;
    const cla = document.getElementById("selecttypevehicle").value;
        let objetoEnviar = {
            placa : placa,
            fechaSalida : "2022-09-16T14:32:49.294Z"
        }
    const apiCrearRol = "http://localhost:8080/plaza/list/placa";
    fetch(apiCrearRol, {
        method: "POST",
        body: JSON.stringify(objetoEnviar),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        if (datos.id_Plazas != null){
            let objetoEnviar = {
                placa : placa,
                fechaSalida : new Date()
            }
        const apiCrearRol = "http://localhost:8080/factura/checkout";
        fetch(apiCrearRol, {
            method: "POST",
            body: JSON.stringify(objetoEnviar),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        })
        .then(respuesta => respuesta.json())
        .then(datos => {
            if (datos.hasOwnProperty('id_Facturas')) {
                document.getElementById("regisMsgOk").style.display = "";
                document.getElementById("regisMsgError").style.display = "none";
                document.getElementById("regisReciIngre").style.display = "none";
                document.getElementById("regisReci").style.display = "none";
                document.getElementById("regisRecicheckout").style.display = "";
                const Placa = datos.placa;
                const Tipo = datos.tipoVehiculo;
                const Plaza = datos.id_Plazas.codigoPlaza;
                const fechaEntrada = datos.fechaEntrada;
                const fechaSalida = datos.fechaSallida;
                const valor = datos.valor;
                actualizarplazas();
                
               
                document.getElementById("tablaregisvehiculos").insertRow(-1).innerHTML = "<td>" + Placa + "</td>"
                    + "<td>" + Tipo + "</td>" + "<td>" + Plaza + "</td>" + "<td>" + fechaEntrada + "</td>";
                document.getElementById("tablaregischeckoutvehiculos").insertRow(-1).innerHTML = "<td>" + Placa + "</td>"
            + "<td>" + Tipo + "</td>" + "<td>" + Plaza + "</td>" + "<td>" + fechaEntrada + "</td>" + "<td>" + fechaSalida + "</td>" + "<td>" + valor + "</td>";
            } else {
                console.log("No se puede grabar -> " + datos.status);
                document.getElementById("regisMsgOk").style.display = "none";
                document.getElementById("regisMsgError").style.display = "";
                document.getElementById("placa1").setAttribute = 'placa';
            }

        })
        .catch(miError => console.log(miError));
    document.getElementById("formaRegisCrear").reset();
    document.getElementById("formaRegisCrear").classList.remove("was-validated");
    }

        
        else{
            if (cla !== "Seleccione") {
                let objetoEnviar = {
                    placa : placa,
                    tipoVehiculo : cla,
                    tipoContrato : "string",
                    fechaEntrada : new Date(),
                    valor: 99999999,
                    id_Persona: {
                      id_Persona: "1",
                    }
                  }
            const apiCrearRol = "http://localhost:8080/factura/registro";
            fetch(apiCrearRol, {
                method: "POST",
                body: JSON.stringify(objetoEnviar),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
                .then(respuesta => respuesta.json())
                .then(datos => {
                    if (datos.hasOwnProperty('id_Facturas')) {
                        console.log(datos)
                        document.getElementById("regisMsgOk").style.display = "";
                        document.getElementById("regisMsgError").style.display = "none";
                        document.getElementById("regisReciIngre").style.display = "";
                        document.getElementById("regisRecicheckout").style.display = "none";
                        document.getElementById("regisReci").style.display = "none";
                        const Placa = datos.placa;
                        const Tipo = datos.tipoVehiculo;
                        const Plaza = datos.id_Plazas.codigoPlaza;
                        const fechaEntrada = datos.fechaEntrada;
                        actualizarplazas();
                        
                        document.getElementById("tablaregischeckoutvehiculos").insertRow(-1).innerHTML = "<td>" + Placa + "</td>"
                    + "<td>" + Tipo + "</td>" + "<td>" + Plaza + "</td>" + "<td>" + fechaEntrada;
            
                        document.getElementById("tablaregisvehiculos").insertRow(-1).innerHTML = "<td>" + Placa + "</td>"
                    + "<td>" + Tipo + "</td>" + "<td>" + Plaza + "</td>" + "<td>" + fechaEntrada + "</td>";
                    } else {
                        
                        document.getElementById("regisMsgOk").style.display = "none";
                        document.getElementById("regisMsgError").style.display = "";
                        document.getElementById("placa1").setAttribute = 'placa';
                    }
        
                })
                .catch(miError => console.log(miError));
            document.getElementById("formaRegisCrear").reset();
            document.getElementById("formaRegisCrear").classList.remove("was-validated");
            }else{
                document.getElementById("formaRegisCrear").reset();
                document.getElementById("formaRegisCrear").classList.remove("was-validated");
                document.getElementById("regisMsgOk").style.display = "none";
                document.getElementById("regisMsgError").style.display = "";
            }
        }
    })
    .catch(miError => console.log(miError));
    
}      
function imprimir(){
    console.log("si estoy aqui")
    //document.getElementById("tablaregisvehiculos").reset;
    document.getElementById("tablaregisvehiculos").deleteRow(-1)
    document.getElementById("tablaregischeckoutvehiculos").deleteRow(-1)
    document.getElementById("regisMsgOk").style.display = "none";
    document.getElementById("regisReciIngre").style.display = "none";
    document.getElementById("regisRecicheckout").style.display = "none";
    document.getElementById("formaRegisCrear1").innerHTML;
    document.getElementById("regisReci").style.display = "";
    document.getElementById("regisboton").style.display = "";
    
}  
function actualizarplazas() {
        let objetoEnviarcar = {
            id_Plazas: 0,
            codigoPlaza: "string",
            tipoplaza: "Car",
            estado: "Available"
          }
    const apiConsultadisponiblescar = "http://localhost:8080/plaza/available/type";
    fetch(apiConsultadisponiblescar, {
        method: "POST",
        body: JSON.stringify(objetoEnviarcar),
        headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
        if (datos > 0){
            document.getElementById("idplazascarro").innerHTML= datos + " Disponibles";
        }else{document.getElementById("idplazascarro").innerHTML= "Sin disponibles";
    }
}).catch(miError => console.log(miError));
    let objetoEnviarmotorcycle = {
        id_Plazas: 0,
        codigoPlaza: "string",
        tipoplaza: "Motorcycle",
        estado: "Available"
    }
    const apiConsultadisponiblesmotorcycle = "http://localhost:8080/plaza/available/type";
    fetch(apiConsultadisponiblesmotorcycle, {
    method: "POST",
    body: JSON.stringify(objetoEnviarmotorcycle),
    headers: { "Content-type": "application/json; charset=UTF-8" }
    })
    .then(respuesta => respuesta.json())
    .then(datos => {
    if (datos > 0){
        document.getElementById("idplazasmoto").innerHTML= datos + " Disponibles";
    }else{document.getElementById("idplazasmoto").innerHTML= "Sin disponibles";
    }
    }).catch(miError => console.log(miError));
    
    const apiObtenerclientes = "http://localhost:8080/factura/list";
    const miPromesaregis = fetch(apiObtenerclientes).then(respuesta => respuesta.json())
        .catch(miError => console.log(miError))

    Promise.all([miPromesaregis]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        const cantidadRegistros = datos.length;
        let clientes = 0;
        for (let i = 0; i < cantidadRegistros; i++) {
            if(datos[i].valor == 99999999){
                clientes = clientes + 1} }
        if (clientes > 0){document.getElementById("idclientes").innerHTML= " Clientes activos: " + clientes;  
        }else{document.getElementById("idclientes").innerHTML= "Sin Clientes";}
    
        
    });
}


