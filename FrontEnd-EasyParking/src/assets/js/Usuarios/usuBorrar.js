function eliminarUsu(parametro) {
    const apiListaUsu = "http://localhost:8080/usuario/"+parametro;
    const miPrimeraPromesa = fetch(apiListaUsu,{method:"DELETE"}).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      console.log(misDatos);
      if(misDatos.hasOwnProperty('id_Usuarios'))
      {
            document.getElementById("alertUsuEliminar").classList.add("alert-primary");
            document.getElementById("msgUsuEliminar").innerHTML="El usuario fue eliminada";
      }
      else
      {
        document.getElementById("alertUsuEliminar").classList.add("alert-danger");
        document.getElementById("msgUsuEliminar").innerHTML="El usuario NO FUE eliminada";
      }
    });
  }