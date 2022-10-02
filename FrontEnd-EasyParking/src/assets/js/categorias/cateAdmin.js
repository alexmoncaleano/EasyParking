function eliminarActualizar() {
    const apiListaRol = "http://localhost:8080/persona/list";
    const miPrimeraPromesa = fetch(apiListaRol).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilasAdmin(misDatos);
    });
  }
  
  function agregarFilasAdmin(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const codigo = arregloExterno[i].id_Persona;
      const nombre = arregloExterno[i].nombre;
      const apellido = arregloExterno[i].apellidos;
      const tipodoc = arregloExterno[i].tipodoc;
      const numdocu = arregloExterno[i].numdocumento;
      const direccion = arregloExterno[i].direccion;
      const telefono = arregloExterno[i].telefono;
      const email = arregloExterno[i].email;             
  
      document.getElementById("tablaCateAdmin").insertRow(-1).innerHTML =
        "<td>" + codigo + "</td>" + "<td>" + nombre + "</td>"
        +"<td>" + apellido +"</td>"+"<td>"+tipodoc +"</td>"+"<td>"+ numdocu +"</td>"
        +"<td>"+direccion +"</td>"+"<td>"+telefono +"</td>"
        +"<td>"+email +"</td>"
        + "<td> <a href='javascript:confirmarBorrarCategoria("+codigo+");'><i class='fa-solid fa-trash check-rojo'></i>&nbsp;"
        +"<a href='#cateupdate/"+codigo+"'><i class='fa-solid fa-pen-to-square check-verde'></i></a>"+"</td>"
        ;
    }
  }
  function confirmarBorrarCategoria(codigo)
  {
      if(window.confirm(" Seguro que quieres eliminar la persona?"))
      {
          window.location.replace("#catedelete/"+codigo);
      }
  }