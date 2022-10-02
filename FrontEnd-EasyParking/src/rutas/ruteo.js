'use strict';

(function () {
    function init() {
        var router = new Router([
            new Route('home', 'inicio.html', true),
            // Rutas para personas
            new Route('catelist', 'categorias/catelistar.html'),
            new Route('cateadd', 'categorias/catecrear.html'),
            new Route('cateadmin', 'categorias/cateadmin.html'),
            new Route('catedelete', 'categorias/cateborrar.html'),
            new Route('cateupdate', 'categorias/cateactualizar.html'),
            

            // Rutas para usuarios, etc...
            new Route('usulist', 'Usuarios/usulistar.html'),
            new Route('usuadd', 'Usuarios/usucrear.html'),
            new Route('usuadmin', 'Usuarios/usuadmin.html'),
            new Route('usudelete', 'Usuarios/usuborrar.html'),
            new Route('usuupdate', 'Usuarios/usuactualizar.html'),
            new Route('login', 'acceso.html'),

            // Rutas para plazas
            new Route('plazlist', 'plazas/plazlistar.html'), 
            
            // Rutas para configuraciones
            new Route('confilist', 'configuracion/confilistar.html'),
            new Route('confiadmin', 'configuracion/confiAdmin.html'),
            new Route('confiupdate', 'configuracion/confiactualizar.html'),
            new Route('conficrearplaza', 'configuracion/confiCrearPlaza.html'),
            new Route('conficrearfacturas', 'configuracion/confiCrearFacturas.html'),

            //Rutas para agregar
            new Route('regiscrear', 'Registro/regiscrear.html'),
            new Route('regislist', 'Registro/regislist.html'),
            new Route('listplazas', 'Registro/plazlistar.html')
        ]);
    }
    init();
}());