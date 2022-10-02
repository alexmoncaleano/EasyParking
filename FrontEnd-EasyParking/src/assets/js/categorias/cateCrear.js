function crearRol(){
    const nombre = document.getElementById("nom").value;
    const apellido= document.getElementById("apell").value;
    const tdoc= document.getElementById("tdoc").value;
    const ndoc= document.getElementById("ndoc").value;
    const tele= document.getElementById("tele").value;
    const dire= document.getElementById("dire").value;
    const email= document.getElementById("email").value;

    if(nombre !== " "){
        let objetoEnviar = {
            nombre:nombre,
            apellidos:apellido,
            tipoDoc:tdoc,
            numDoc:ndoc,     
            direccion:dire,
            telefono:tele,
            email:email,
        }

        const apiCrear = "http://localhost:8080/persona/";

        fetch(apiCrear,{
            method:"POST",
            body:JSON.stringify(objetoEnviar),
            headers:{"Content-type":"application/json;charset=UTF-8"}
        })
        .then(respuesta=>respuesta.json())
        .then((datos=>{
            console.log(datos)
            if (datos.hasOwnProperty("id_Persona")) {
                document.getElementById("cateMsgOk").style.display="";
                document.getElementById("cateMsgError").style.display="none";
            } else {
                document.getElementById("cateMsgOk").style.display="none";
                document.getElementById("cateMsgError").style.display="";
            }
        })
        .catch(
            miError=> console.log(miError))
        );

        document.getElementById("formaCateCrear").reset();
        document.getElementById("formaCateCrear").classList.remove("was-validated");
    }

}