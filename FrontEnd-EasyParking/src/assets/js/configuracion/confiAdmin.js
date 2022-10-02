function eliminarActualizar2() {
    const apiListaConfi = "http://localhost:8080/setting/list";
    const miPrimeraPromesa = fetch(apiListaConfi).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilasAdmin2(misDatos);
    });
  }
  
  function agregarFilasAdmin2(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const nombrep = arregloExterno[i].nombreParqueadero;
      const plazasc = arregloExterno[i].plazasCarro;
      const plazasm = arregloExterno[i].plazasMoto;
      const prefac = arregloExterno[i].prefijoFac;
      const numini = arregloExterno[i].numeracionInic;
      const numend = arregloExterno[i].numeracionEnd;
      const tarica = arregloExterno[i].tarifaCarro;
      const tarimo = arregloExterno[i].tarifaMoto;
      const fracca = arregloExterno[i].fraccionCarro;
      const fracmo = arregloExterno[i].fraccionMoto;
      const vrdiaca = arregloExterno[i].valorDiaCarro;
      const vrdiamo = arregloExterno[i].valorDiaMoto;
      const vrsemca = arregloExterno[i].valorSemanaCarro;
      const vrsemmo = arregloExterno[i].valorSemanaMoto;
      const vrmesca = arregloExterno[i].valorMesCarro;
      const vrmesmo = arregloExterno[i].valorMesMoto;             
     
      document.getElementById("tablaConfinombrepark").insertRow(-1).innerHTML =
      "<td>" + nombrep +"</td>"; 
      
      document.getElementById("tablaConfiprefijo").insertRow(-1).innerHTML =
      "<td>"+ prefac +"</td>";

      document.getElementById("tablaConfidesde").insertRow(-1).innerHTML =
      "<td>"+numini +"</td>";

      document.getElementById("tablaConfihasta").insertRow(-1).innerHTML =
      "<td>"+numend +"</td>";

      document.getElementById("tablaConficarroplazas").insertRow(-1).innerHTML =
      "<td>" + plazasc +"</td>"; 
      
      document.getElementById("tablaConficarrofrac").insertRow(-1).innerHTML =
      "<td>"+fracca +"</td>";

      document.getElementById("tablaConficarrohora").insertRow(-1).innerHTML =
      "<td>"+tarica +"</td>";

      document.getElementById("tablaConficarrodia").insertRow(-1).innerHTML =
      "<td>"+vrdiaca +"</td>";

      document.getElementById("tablaConficarrosemana").insertRow(-1).innerHTML =
      "<td>"+vrsemca +"</td>";

      document.getElementById("tablaConficarromes").insertRow(-1).innerHTML =
      "<td>"+vrmesca +"</td>";

      document.getElementById("tablaConfimotoplazas").insertRow(-1).innerHTML =
      "<td>" + plazasm +"</td>"; 
      
      document.getElementById("tablaConfimotofrac").insertRow(-1).innerHTML =
      "<td>"+fracmo +"</td>";

      document.getElementById("tablaConfimotohora").insertRow(-1).innerHTML =
      "<td>"+tarimo +"</td>";

      document.getElementById("tablaConfimotodia").insertRow(-1).innerHTML =
      "<td>"+vrdiamo +"</td>";

      document.getElementById("tablaConfimotosemana").insertRow(-1).innerHTML =
      "<td>"+vrsemmo +"</td>";

      document.getElementById("tablaConfimotomes").insertRow(-1).innerHTML =
      "<td>"+vrmesmo +"</td>";
      
      
    }
  }
  function confirmarBorrarCategoria2(codigop)
  {
      if(window.confirm(" Seguro que quieres eliminar la persona?"))
      {
          window.location.replace("#confidelete/"+codigop);
      }
  }
  function confirmarCrearPlazas()
  {
    if(window.confirm(" Seguro que quieres crear nuevas plazas?"))
      {
          window.location.replace("#conficrearplaza/");
      }
  }
  function confirmarCrearFacturas()
  {
    if(window.confirm(" Seguro que quieres crear nuevas facturas?"))
      {
          window.location.replace("#conficrearfacturas/");
      }
  }