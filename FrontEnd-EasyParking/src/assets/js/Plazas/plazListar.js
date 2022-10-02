function capturarPlazas() {
    const apiListaPlaza = "http://localhost:8080/plaza/list";
    const miPrimeraPromesa = fetch(apiListaPlaza).then(resultado => 
      resultado.json())
    
    Promise.all([miPrimeraPromesa]).then((arregloDeDatos) => {
      const misDatos = arregloDeDatos[0];
      agregarFilasplaza(misDatos);
    });
  }
  
  function agregarFilasplaza(arregloExterno) {
    const cantidad = arregloExterno.length;
    for (let i = 0; i < cantidad; i++) 
    {
      const codigoplaza = arregloExterno[i].codigoPlaza;
      const tipoplaza = arregloExterno[i].tipoplaza;
      const estado= arregloExterno[i].estado;

  
      document.getElementById("tablaPlazListar").insertRow(-1).innerHTML =
        "<td>" + codigoplaza + "</td>" + "<td>" + tipoplaza + "</td>"+"<td>" + estado + "</td>";
    }
  }
  