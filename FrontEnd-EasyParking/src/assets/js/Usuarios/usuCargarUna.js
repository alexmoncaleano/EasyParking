function obtener_usuActualizar3(codigou) {
    const apiListaRol1 = "http://localhost:8080/usuario/list/"+codigou;
    const miPrimeraPromesa = fetch(apiListaRol1)
    .then((resultado) => resultado.json()).then((dato)=>{
        console.log("inicio entrar a cargar una");
        if(dato.hasOwnProperty("id_Usuarios"))
        {
            document.getElementById("codu").value=dato.id_Usuarios;
            document.getElementById("usu").value=dato.usuario;
            document.getElementById("cla").value=dato.clave;
            document.getElementById("rol").value=dato.rol;
            document.getElementById("idper").value=dato.id_Persona.id_Persona;
        }else{

        }

    }).catch((mierror)=> console.log(mierror) );
    
}