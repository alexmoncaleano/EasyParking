function capturarRoles() {
    const apiListaRol = "http://localhost:8080/persona/list";
    const miPrimeraPromesa = fetch(apiListaRol).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilas(misDatos);
    });
  }
  
  function agregarFilas(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const codigo = arregloExterno[i].id_Persona;
      const nombre = arregloExterno[i].nombre;
      const apellido = arregloExterno[i].apellidos;
      const tipodoc = arregloExterno[i].tipoDoc;
      const numdocu = arregloExterno[i].numDoc;
      const direccion = arregloExterno[i].direccion;
      const telefono = arregloExterno[i].telefono;
      const email = arregloExterno[i].email;
  
      document.getElementById("tablaCateListar").insertRow(-1).innerHTML =
      "<td>" + codigo + "</td>" + "<td>" + nombre + "</td>"
      +"<td>" + apellido +"</td>"+"<td>"+tipodoc +"</td>"+"<td>"+ numdocu +"</td>"
      +"<td>"+direccion +"</td>"+"<td>"+telefono +"</td>"
      +"<td>"+email +"</td>";
    }
  }
  