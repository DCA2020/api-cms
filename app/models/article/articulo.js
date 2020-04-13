var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports = mongoose.model('Articulo', {
    titulo: String,
    resumen: String,
    descripcion: String,
    metatags: String,
    estadoArticulo: {type: Schema.ObjectId, ref: "EstadoArticulo"},
    categoriaArticulo: {type: Schema.ObjectId, ref: "CategoriaArticulo"},
    orden: String,
    url: String,
    visitas: Number,
    activo: Boolean,
    meGusta: Number,
    noMeGusta: Number,
    enPaginaPrincipal: Boolean,
    voto: {
        excelente: Boolean,
        bueno: Boolean,
        regular: Boolean,
        malo: Boolean
    },
    fechaPublicacion: {
        dia: String,
        mes: String,
        ano: String
    },
    personaRegistro: {type: Schema.ObjectId, ref: "Persona"},
    fechaRegistro: {type: Date, default: Date.now()},
    personaCambio: {type: Schema.ObjectId, ref: "Persona"},
    fechaCambio: {type: Date, default: Date.now()},
    imagenPrincipal: String,
    imagenBanner: String
});
