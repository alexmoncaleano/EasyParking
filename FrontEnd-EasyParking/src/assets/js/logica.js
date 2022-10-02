function logicaNegocio(url, param) {
    switch (url) {
        // Categorias
        // ***************************************************************
        case 'src/componentes/categorias/catelistar.html':
            capturarRoles();
            break;
        case 'src/componentes/categorias/cateadmin.html':
            eliminarActualizar(); 
            break;
        case 'src/componentes/categorias/cateborrar.html':
            eliminarCate(param);
            break;
        case 'src/componentes/categorias/cateactualizar.html':
            obtenerCateActualizar(param);
            break;
        // Usuarios
        // ***************************************************************
        case 'src/componentes/Usuarios/usulistar.html':
            capturarUsuarios();
            break;
        case 'src/componentes/Usuarios/usuadmin.html':
            eliminarActualizar3(); 
            break;
        case 'src/componentes/Usuarios/usuborrar.html':
            eliminarUsu(param);
            break;
        case 'src/componentes/Usuarios/usuactualizar.html':
            obtener_usuActualizar3(param);
            break;

        // Inicio
        // ***************************************************************
        case 'src/componentes/inicio.html':
            actinicio()
            break;
              
        // Configuracion
        // ***************************************************************
        case 'src/componentes/configuracion/confilistar.html':
            capturarConfi();
            break;
        case 'src/componentes/configuracion/confiAdmin.html':
            eliminarActualizar2(); 
            break;
        case 'src/componentes/configuracion/confiactualizar.html':
            obtenerConfiActualizar(1);
            break;
        case 'src/componentes/configuracion/confiCrearPlaza.html':
                crearPlazas();
            break;
        case 'src/componentes/configuracion/confiCrearFacturas.html':
            crearFacturas();
            break;
        
        // Registro
        // ***************************************************************
        case 'src/componentes/Registro/regislist.html':
            listvehicle();
            break;
        case 'src/componentes/Registro/regiscrear.html':
            actualizarplazas();
            break;
        case 'src/componentes/Registro/plazlistar.html':
            capturarPlazas();
            break   
        // Plazas
        // ***************************************************************
        case 'src/componentes/Plazas/plazlistar.html':
            


        default:
            console.log('Componente no requiere Javascript personalizado');
    
    }

}



