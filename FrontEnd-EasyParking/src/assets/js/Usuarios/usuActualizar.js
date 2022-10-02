function actualizarUsu(){
    const codigou = document.getElementById("codu").value;
    const usua = document.getElementById("usu").value;
    const clav= document.getElementById("cla").value;
    const rol1= document.getElementById("rol").value;
    const perso= document.getElementById("idper").value;

    if(codu!==""){
        let persoenviar={
            id_Persona:perso
        }
        let objetoEnviar = {
            id_Usuarios:codigou,
            usuario:usua,
            clave:clav,
            rol:rol1,
            id_Persona:persoenviar,     

        }
        const apiCrear1 = "http://localhost:8080/usuario/";

        fetch(apiCrear1,{
            method:"PUT",
            body:JSON.stringify(objetoEnviar),
            headers:{"Content-type":"application/json;charset=UTF-8"}
        })
        .then((respuesta)=>respuesta.json())
        .then((datos)=>{
        
            if (datos.hasOwnProperty("id_Persona")) {
                document.getElementById("usuMsgOk1").style.display="";
                document.getElementById("usuMsgError1").style.display="none";
                
            } else {
                document.getElementById("usuMsgOk1").style.display="none";
                document.getElementById("usuMsgError1").style.display="";
                
            }
        })
        .catch(
            (miError)=>{console.log(miError);  console.log(pillado);}
        );

        //document.getElementById("formausuCrear").reset();
        //document.getElementById("formausuCrear").classList.remove("was-validated");
    }

}