function capturarConfi() {
    const apiListaConfi = "http://localhost:8080/setting/list";
    const miPrimeraPromesa = fetch(apiListaConfi).then((resultado) => 
      resultado.json()
    );
  
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilas2(misDatos);
    });
  }
  
  function agregarFilas2(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) {
      const codigop = arregloExterno[i].id_Configuracion;
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

 
      document.getElementById("tablaConfiListar").insertRow(-1).innerHTML =
      "<td>" + codigop + "</td>" + "<td>" + nombrep + "</td>"
      +"<td>" + plazasc +"</td>"+"<td>"+plazasm +"</td>"+"<td>"+ prefac +"</td>"
      +"<td>"+numini +"</td>"+"<td>"+numend +"</td>"+"<td>"+tarica +"</td>"+"<td>"+tarimo+"</td>"
      +"<td>"+fracca +"</td>"+"<td>"+fracmo +"</td>"+"<td>"+vrdiaca +"</td>"+"<td>"+vrdiamo+"</td>"
      +"<td>"+vrsemca +"</td>"+"<td>"+vrsemmo+"</td>"+"<td>"+vrmesca +"</td>"+"<td>"+vrmesmo+"</td>";
    }
  }
  