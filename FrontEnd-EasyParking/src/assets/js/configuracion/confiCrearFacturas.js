function crearFacturas()
{

        const apiCrearpla = "http://localhost:8080/factura/config";
        console.log("entro a crear factura");
        fetch(apiCrearpla,{
            method:"POST",
            headers:{"Content-type":"application/json;charset=UTF-8"}
        })
        .then((respuesta)=> respuesta.json())
        .then((datos)=>{console.log("entro a la promesa de crear facturas");
            console.log(datos);
            if (datos != null)
            {
                console.log("reconocio que llegó");
                capturarFacturas1();
                document.getElementById("confifac1MsgplaOk1").style.display="";
                document.getElementById("confifac1MsgError1").style.display="none";
            }
            else{
                document.getElementById("confifac1MsgOk1").style.display="none";
                document.getElementById("confifacMsgError1").style.display="";
            }
        })
        .catch(
            (miError)=>{console.log(miError); console.log("no creo facturas error")}
        );

    }
    
   function capturarFacturas1() {
        const apiListaFactura1 = "http://localhost:8080/factura/list";
        const miPrimeraPromesa2 = fetch(apiListaFactura1).then((resultado) => 
          resultado.json()
        );
      
        Promise.all([miPrimeraPromesa2]).then((arregloDeDatos1) => {
          const misDatos2 = arregloDeDatos1[0];
          agregarFilasfactura1(misDatos2);
        });
      }
      
      function agregarFilasfactura1(arregloExterno) {
        const cantidad = arregloExterno.length;
        for (let i = 0; i < cantidad; i++) 
        {
          const codigofactura = arregloExterno[i].codigoFactura;
          const tipovehic = arregloExterno[i].tipoVehiculo;
          const placa= arregloExterno[i].placa;
          const tipocontrato = arregloExterno[i].tipoContrato;
          const fechaentrada= arregloExterno[i].fechaEntrada;    
          const fechasalida = arregloExterno[i].fechaSallida;
          const valor= arregloExterno[i].valor;  
          const fechafactura = arregloExterno[i].fechafactura;
          const objetopersona= arregloExterno[i].id_Persona;    
          document.getElementById("tablaFacturasCreadas").insertRow(-1).innerHTML =
            "<td>" + codigofactura + "</td>" + "<td>" + tipovehic + "</td>"+"<td>" + placa + "</td>"
            +"<td>" + tipocontrato + "</td>" + "<td>" + fechaentrada + "</td>"+"<td>" + fechasalida + "</td>"
            "<td>" + valor + "</td>" + "<td>" + fechafactura + "</td>"+"<td>" + objetopersona + "</td>";

        }
      }