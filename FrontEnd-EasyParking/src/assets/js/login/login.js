function login() {
    const usuario = document.getElementById("usu").value;
    const contraseña = document.getElementById("cla").value;    
    let objetoEnviarlogin = {
        id_Usuarios: 0,
        usuario: usuario,
        clave: contraseña,
        rol: "string",
        id_Persona: {
          id_Persona: 0
        }
    }
const apiConsultalogin = "http://localhost:8080/usuario/login";
fetch(apiConsultalogin, {
    method: "POST",
    body: JSON.stringify(objetoEnviarlogin),
    headers: { "Content-type": "application/json; charset=UTF-8" }
})
.then(respuesta => respuesta.json())
.then(datos => {
    if (datos == true){
        window.location.href="#home";
        document.getElementById("menulateral").style.display = "";
    }else{   
        document.getElementById("loginMsgOk").style.display = "none";
        document.getElementById("loginMsgError").style.display = "";
    }
}).catch(miError => console.log(miError));
}