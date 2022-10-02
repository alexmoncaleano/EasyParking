function crearPlazas()
{

        const apiCrearpla = "http://localhost:8080/plaza/config";
        console.log("entro a crear plaza");
        fetch(apiCrearpla,{
            method:"POST",
            headers:{"Content-type":"application/json;charset=UTF-8"}
        })
        .then((respuesta)=> respuesta.json())
        .then((datos)=>{console.log("entro a la promesa de crear plazas");
            console.log(datos);
            if (datos != null)
            {
                console.log("reconocio que llegó");
                capturarPlazas1();
                document.getElementById("conficla1MsgplaOk1").style.display="";
                document.getElementById("conficla1MsgError1").style.display="none";
            }
            else{
                document.getElementById("conficla1MsgOk1").style.display="none";
                document.getElementById("conficla1MsgError1").style.display="";
            }
        })
        .catch(
            (miError)=>{console.log(miError); console.log("no creo plazas error")}
        );

    }
    function capturarPlazas1() {
        const apiListaPlaza1 = "http://localhost:8080/plaza/list";
        const miPrimeraPromesa1 = fetch(apiListaPlaza1).then((resultado) => 
          resultado.json()
        );
      
        Promise.all([miPrimeraPromesa1]).then((arregloDeDatos1) => {
          const misDatos1 = arregloDeDatos1[0];
          agregarFilasplaza1(misDatos1);
        });
      }
      
      function agregarFilasplaza1(arregloExterno) {
        const cantidad = arregloExterno.length;
        for (let i = 0; i < cantidad; i++) 
        {
          const codigoplaza = arregloExterno[i].codigoPlaza;
          const tipoplaza = arregloExterno[i].tipoplaza;
          const estado= arregloExterno[i].estado;
    
      
          document.getElementById("tablaPlazasCreadas").insertRow(-1).innerHTML =
            "<td>" + codigoplaza + "</td>" + "<td>" + tipoplaza + "</td>"+"<td>" + estado + "</td>";
        }
      }