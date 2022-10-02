function capturarUsuarios() {
    const apiListaUsu = "http://localhost:8080/usuario/list/";
    console.log("entro a listar");
    const miPrimeraPromesa = fetch(apiListaUsu).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilasusu(misDatos);
    });
  }
  
  function agregarFilasusu(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const codigou = arregloExterno[i].id_Usuarios;
      const usua = arregloExterno[i].usuario;
      const clav = arregloExterno[i].clave;
      const rol1 = arregloExterno[i].rol;
      const persoid = arregloExterno[i].id_Persona.id_Persona;
      const personom = arregloExterno[i].id_Persona.nombre;
  
      document.getElementById("tablaUsuListar").insertRow(-1).innerHTML =
      "<td>" + codigou + "</td>" + "<td>" + usua + "</td>"
      +"<td>" + clav +"</td>"+"<td>"+rol1 +"</td>"+"<td>"+ persoid +"</td>"
      +"<td>"+ personom +"</td>";
    }
  }
  