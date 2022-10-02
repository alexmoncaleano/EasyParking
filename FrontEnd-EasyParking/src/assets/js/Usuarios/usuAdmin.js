function eliminarActualizar3() {
    const apiListaUsu = "http://localhost:8080/usuario/list";
    const miPrimeraPromesa = fetch(apiListaUsu).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilasAdmin3(misDatos);
    });
  }
  
  function agregarFilasAdmin3(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const codigou = arregloExterno[i].id_Usuarios;
      const usua = arregloExterno[i].usuario;
      const clav = arregloExterno[i].clave;
      const rol1 = arregloExterno[i].rol;
      const perso = arregloExterno[i].id_Persona;             
  
      document.getElementById("tablaUsuAdmin").insertRow(-1).innerHTML =
        //"<td>" + codigou + "</td>" + 
        "<td>" + usua + "</td>" +"<td>" + clav +"</td>"+"<td>"+rol1 +"</td>"+"<td>"+ perso.id_Persona +"</td>"
        + "<td> <a href='javascript:confirmarBorrarUsuario("+codigou+");'><i class='fa-solid fa-trash check-rojo'></i>&nbsp;"
        +"<a href='#usuupdate/"+codigou+"'><i class='fa-solid fa-pen-to-square check-verde'></i></a>"+"</td>"
        ;
    }
  }
  function confirmarBorrarUsuario(codigou)
  {
      if(window.confirm(" Seguro que quieres eliminar el usuario?"))
      {
          window.location.replace("#usudelete/"+codigou);
      }
  }