function eliminarCate(parametro) {
    const apiListaRol = "http://localhost:8080/persona/"+parametro;
    const miPrimeraPromesa = fetch(apiListaRol,{method:"DELETE"}).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      console.log(misDatos);
      if(misDatos.hasOwnProperty('id_Persona'))
      {
            document.getElementById("alertCateEliminar").classList.add("alert-primary");
            document.getElementById("msgCateEliminar").innerHTML="La persona fue eliminada";
      }
      else
      {
        document.getElementById("alertCateEliminar").classList.add("alert-danger");
        document.getElementById("msgCateEliminar").innerHTML="La persona NO FUE eliminada";
      }
    });
  }