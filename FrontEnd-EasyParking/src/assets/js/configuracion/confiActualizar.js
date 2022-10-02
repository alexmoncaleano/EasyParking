function actualizarConfi(){
    console.log("si estoy aqui, solo falta actualizar los nombres de los imput")
    const nombreparc = document.getElementById("tablaConfinombrepark").value;
    const plazcarr= document.getElementById("tablaConficarroplazas").value;
    const plazmot= document.getElementById("tablaConfimotoplazas").value;
    const prefactu= document.getElementById("tablaConfiprefijo").value;
    const numerini= document.getElementById("tablaConfidesde").value;
    const numerend= document.getElementById("tablaConfihasta").value;
    const tarcar= document.getElementById("tablaConficarrohora").value;
    const tarmot = document.getElementById("tablaConfimotohora").value;
    const fracarr = document.getElementById("tablaConficarrofrac").value;
    const framoto= document.getElementById("tablaConfimotofrac").value;
    const vrdiaca= document.getElementById("tablaConficarrodia").value;
    const vrdiamo= document.getElementById("tablaConfimotodia").value;
    const vesemca= document.getElementById("tablaConficarrosemana").value;
    const vrsemmo= document.getElementById("tablaConfimotosemana").value;
    const vrmesca= document.getElementById("tablaConficarromes").value;
    const vrmesmo= document.getElementById("tablaConfimotomes").value;

 
    
        let objetoEnviar = {
            id_Configuracion:1,
            nombreParqueadero:nombreparc,
            plazasCarro:plazcarr,
            plazasMoto:plazmot,
            prefijoFac:prefactu,     
            numeracionInic:numerini,
            numeracionEnd:numerend,
            tarifaCarro:tarcar,
            tarifaMoto:tarmot,
            fraccionCarro:fracarr,
            fraccionMoto:framoto,
            valorDiaCarro:vrdiaca,
            valorDiaMoto:vrdiamo,
            valorSemanaCarro:vesemca,
            valorSemanaMoto:vrsemmo,
            valorMesCarro:vrmesca,
            valorMesMoto:vrmesmo,
        }
        const apiCrear11 = "http://localhost:8080/setting/";

        fetch(apiCrear11,{
            method:"PUT",
            body:JSON.stringify(objetoEnviar),
            headers:{"Content-type":"application/json;charset=UTF-8"}
        })
        .then((respuesta)=>respuesta.json())
        .then((datos)=>{
            if (datos.hasOwnProperty("id_Configuracion")) {
                document.getElementById("confiMsgOk1").style.display="";
                document.getElementById("confiMsgError1").style.display="none";
                
            } else {
                document.getElementById("confiMsgOk1").style.display="none";
                document.getElementById("confiMsgError1").style.display="";
                
            }
        })
        .catch(
            (miError)=>{console.log(miError);}
        );

        //document.getElementById("formaCateCrear").reset();
        //document.getElementById("formaCateCrear").classList.remove("was-validated");
    

}