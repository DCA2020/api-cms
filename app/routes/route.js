//#region CONTROLADORES Y OBJETOS PARA ENRUTAR

var ControllerNoticia = require('../controllers/notice/controllerNoticia');
var ControllerCategoriaNoticia = require('../controllers/notice/controllerCategoriaNoticia');
var ControllerEstadoNoticia = require('../controllers/notice/controllerEstadoNoticia');
var Noticia = require('../models/notice/noticia');
var CategoriaNoticia = require('../models/notice/categoriaNoticia');
var EstadoNoticia = require('../models/notice/estadoNoticia');
//#endregion

// lib and tools for mongoose
var multer = require('multer');
const path = require('path');
var mime = require('mime');
var fs = require('fs');

module.exports = function (app) {

    //#region RUTAS ABIERTAS DEL API
    app.get('/api/noticia/:page/:rows', ControllerNoticia.getNoticiasEnListaPaginada);
    app.get('/api/noticias', ControllerNoticia.getNoticias);
    app.post('/api/noticia', ControllerNoticia.setNoticia);
    app.put('/api/noticia', ControllerNoticia.updateNoticia);
    app.delete('/api/noticia/:noticia_id', ControllerNoticia.removeNoticia);
    app.put('/api/noticia/:noticia_id/activo/:noticia_activo', ControllerNoticia.updateEstadoNoticia);
    app.put('/api/noticiac/:noticia_id/enpaginaprincipal/:noticia_enpaginaprincipal', ControllerNoticia.updateEnPaginaPrincipalNoticia);
    app.put('/api/noticiaa/:noticia_id/megusta/:noticia_megusta', ControllerNoticia.updateVotoNoticia);
    app.put('/api/noticiab/:noticia_id/nomegusta/:noticia_nomegusta', ControllerNoticia.updateVotoNoticia);

    //  todos los estados de las noticias
    app.get('/api/estadoNoticia', ControllerEstadoNoticia.getEstadoNoticia);
    app.post('/api/estadoNoticia', ControllerEstadoNoticia.setEstadoNoticia);
    app.put('/api/estadoNoticia/:estadoNoticia_id', ControllerEstadoNoticia.updateEstadoNoticia);
    app.delete('/api/estadoNoticia/:estadoNoticia_id', ControllerEstadoNoticia.removeEstadoNoticia);

    // todos las categorias de las noticias
    app.get('/api/categoriaNoticia', ControllerCategoriaNoticia.getCategoriaNoticia);
    app.post('/api/categoriaNoticia', ControllerCategoriaNoticia.setCategoriaNoticia);
    app.put('/api/categoriaNoticia/:categoriaNoticia_id', ControllerCategoriaNoticia.updateCategoriaNoticia);
    app.delete('/api/categoriaNoticia/:categoriaNoticia_id', ControllerCategoriaNoticia.removeCategoriaNoticia);

    //#endregion
};
