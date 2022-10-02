function listvehicle() {
    const apiObtenerclientes = "http://localhost:8080/factura/list";
    const miPromesaregis = fetch(apiObtenerclientes).then(respuesta => respuesta.json())
        .catch(miError => console.log(miError))

    Promise.all([miPromesaregis]).then((arregloDatos) => {
        const datos = arregloDatos[0];
        crearFilaregistroListar(datos);
    });
}

function crearFilaregistroListar(arrObjeto) {
    const cantidadRegistros = arrObjeto.length;
    for (let i = 0; i < cantidadRegistros; i++) {
        if(arrObjeto[i].valor == 99999999){
            const Placa = arrObjeto[i].placa;
            const Tipo = arrObjeto[i].tipoVehiculo;
            const Plaza = arrObjeto[i].id_Plazas.codigoPlaza;
            const fechaEntrada = arrObjeto[i].fechaEntrada;

        document.getElementById("tablavehiculos").insertRow(-1).innerHTML = "<td>" + Placa + "</td>"
            + "<td>" + Tipo + "</td>" + "<td>" + Plaza + "</td>" + "<td>" + fechaEntrada + "</td>";
    }}
}
