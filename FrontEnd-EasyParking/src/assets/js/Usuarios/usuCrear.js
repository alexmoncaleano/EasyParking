function crearUsu(){
    //const codigou =document.getElementById("codu").value;
    const usua = document.getElementById("usu").value;
    const clav = document.getElementById("cla").value;
    const rol1 = document.getElementById("rol").value;
    const perso = document.getElementById("idper").value;
        if(usua !== " "){
        let persoenviar={
            usuario: usua,
            clave: clav,
            rol: rol1,
            id_Persona: {
                id_Persona: perso
                }
            }        
        const apiCrear = "http://localhost:8080/usuario/";
        fetch(apiCrear, {
            method:"POST",
            body:JSON.stringify(persoenviar),
            headers:{"Content-type":"application/json; charset=UTF-8"}
        })
        .then(respuesta=>respuesta.json())
        .then((datos => {
            if (datos.hasOwnProperty("id_Usuarios")) {
                document.getElementById("usuMsgOk").style.display="";
                document.getElementById("usuMsgError").style.display="none";
            } else {
                document.getElementById("usuMsgOk").style.display="none";
                document.getElementById("usuMsgError").style.display="";
            }
        })
        .catch(miError => console.log(miError))
        );

        document.getElementById("formaUsuCrear").reset();
        document.getElementById("formaUsuCrear").classList.remove("was-validated");
    }

}