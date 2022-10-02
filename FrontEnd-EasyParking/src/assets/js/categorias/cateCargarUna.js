function obtenerCateActualizar(codigo) {
    const apiListaRol1 = "http://localhost:8080/persona/list/"+codigo;
    const miPrimeraPromesa = fetch(apiListaRol1)
    .then((resultado) => resultado.json()).then((dato)=>{
        if(dato.hasOwnProperty("nombre"))
        {
            document.getElementById("cod").value=dato.id_Persona;
            document.getElementById("nom").value=dato.nombre;
            document.getElementById("apell").value=dato.apellidos;
            document.getElementById("tdoc").value=dato.tipoDoc;
            document.getElementById("ndoc").value=dato.numDoc;
            document.getElementById("tele").value=dato.telefono;
            document.getElementById("dire").value=dato.direccion;
            document.getElementById("email").value=dato.email;
        }else{

        }

    }).catch((mierror)=> console.log(mierror) );
  
    
  }