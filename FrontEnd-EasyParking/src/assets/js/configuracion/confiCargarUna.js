function obtenerConfiActualizar(codigop) {
    const apiListaConfi = "http://localhost:8080/setting/list/"+codigop;
    const miPrimeraPromesa = fetch(apiListaConfi)
    .then((resultado) => resultado.json()).then((dato)=>{
        if(dato.hasOwnProperty("id_Configuracion"))
        {
            console.log(dato);
            document.getElementById("codi").value=dato.id_Configuracion;
            document.getElementById("tablaConfinombrepark").value=dato.nombreParqueadero;
            document.getElementById("tablaConficarroplazas").value=dato.plazasCarro;
            document.getElementById("tablaConfimotoplazas").value=dato.plazasMoto;
            document.getElementById("tablaConfiprefijo").value=dato.prefijoFac;
            document.getElementById("tablaConfidesde").value=dato.numeracionInic;
            document.getElementById("tablaConfihasta").value=dato.numeracionEnd;
            document.getElementById("tablaConficarrohora").value=dato.tarifaCarro;
            document.getElementById("tablaConfimotohora").value=dato.tarifaMoto;
            document.getElementById("tablaConficarrofrac").value=dato.fraccionCarro;
            document.getElementById("tablaConfimotofrac").value=dato.fraccionMoto;
            document.getElementById("tablaConficarrodia").value=dato.valorDiaCarro;
            document.getElementById("tablaConfimotodia").value=dato.valorDiaMoto;
            document.getElementById("tablaConficarrosemana").value=dato.valorSemanaCarro;
            document.getElementById("tablaConfimotosemana").value=dato.valorSemanaMoto;
            document.getElementById("tablaConficarromes").value=dato.valorMesCarro;
            document.getElementById("tablaConfimotomes").value=dato.valorMesMoto;

        }else{

        }

    }).catch((mierror)=> console.log(mierror) );

}