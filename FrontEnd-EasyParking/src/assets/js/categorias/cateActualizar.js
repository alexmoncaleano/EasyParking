function actualizarCate(){
    const codigo = document.getElementById("cod").value;
    const nombre = document.getElementById("nom").value;
    const apellido= document.getElementById("apell").value;
    const tdoc= document.getElementById("tdoc").value;
    const ndoc= document.getElementById("ndoc").value;
    const tele= document.getElementById("tele").value;
    const dire= document.getElementById("dire").value;
    const email= document.getElementById("email").value;

    if(nombre!==""){
        let objetoEnviar = {
            id_Persona:codigo,
            nombre:nombre,
            apellidos:apellido,
            tipoDoc:tdoc,
            numDoc:ndoc,     
            telefono:tele,
            direccion:dire,
            email:email,
        }
        const apiCrear1 = "http://localhost:8080/persona/";

        fetch(apiCrear1,{
            method:"PUT",
            body:JSON.stringify(objetoEnviar),
            headers:{"Content-type":"application/json;charset=UTF-8"}
        })
        .then((respuesta)=>respuesta.json())
        .then((datos)=>{
        
            if (datos.hasOwnProperty("id_Persona")) {
                               document.getElementById("cateMsgOk1").style.display="";
                document.getElementById("cateMsgError1").style.display="none";
                
            } else {
                document.getElementById("cateMsgOk1").style.display="none";
                document.getElementById("cateMsgError1").style.display="";
                
            }
        })
        .catch(
            (miError)=>{console.log(miError);  console.log(pillado);}
        );

        //document.getElementById("formaCateCrear").reset();
        //document.getElementById("formaCateCrear").classList.remove("was-validated");
    }

}