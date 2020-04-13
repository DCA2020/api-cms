var Articulo = require('../../models/article/articulo');

// validar empresa
exports.getArticulos = function (req, res) {
    Articulo.find({ empresa: req.params.empresa, passwordHash: req.params.password },
        function (err, empresa) {
            if (err)
                res.send(err);
            res.json(empresa); // devuelve todos los registros en base a una busqueda
        }
    );
};
// Obtiene todos los objetos Articulo de la base de datos
exports.getArticuloPorID = function (req, res) {
    Articulo.findOne({_id: req.params.empresa_id},
        function (err, empresa) {
            if (err)
                res.send(err);
            res.json(empresa); // devuelve todos los registros
        }
    );
};

// Obtiene todos los objetos Articulo de la base de datos
exports.getArticulo = function (req, res) {
    Articulo.find(
        function (err, empresa) {
            if (err)
                res.send(err);
            res.json(empresa); // devuelve todos los registros
        }
    );
};

// Guarda un objeto Articulo en base de datos
exports.setArticulo = function (req, res) {

    // Creo el objeto Articulo
    Articulo.create(
        {
            empresa: req.body.empresa,
            codigo: req.body.codigo,
            descripcion: req.body.descripcion
        },
        function (err, empresa) {
            if (err)
                res.send(err);

            // Obtine y devuelve todas las empresas tras crear una de ellas
            Articulo.find(function (err_, empresa_) {
                if (err_)
                    res.send(err_);
                res.json(empresa_);
            });
        });
};

// Modificamos un objeto Articulo de la base de datos
exports.updateImagenArticulo = function (req, res) {
    Articulo.update({ _id: req.params.empresa_id },
        { $set: { imagen: req.params.empresa_imagen } },
        function (err, empresa) {
            if (err) {
                console.log(err);
                res.send(err);
            }

            // Obtine y devuelve todas las empresas tras crear una de ellas
            Articulo.find(function (err_, empresa_) {
                if (err_)
                    res.send(err_)
                res.json(empresa_);
            });
        });
};

// Modificamos un objeto Articulo de la base de datos
exports.updateArticulo = function (req, res) {
    Articulo.update({ _id: req.params.empresa_id },
        {
            $set: {
                empresa: req.body.empresa,
                codigo: req.body.codigo,
                descripcion: req.body.descripcion
            }
        },
        function (err, empresa) {
            if (err)
                res.send(err);

            // Obtiene y devuelve todas las empresas tras crear una de ellas
            Articulo.find(function (err_, empresa_) {
                if (err_)
                    res.send(err_);
                res.json(empresa_);
            });
        });
};

// Elimino un objeto Articulo de la base de Datos
exports.removeArticulo = function (req, res) {
    Articulo.remove({ _id: req.params.empresa_id }, function (err, empresa) {
        if (err)
            res.send(err);

        // Obtine y devuelve todas las empresas tras borrar una de ellas
        Articulo.find(function (err_, empresa_) {
            if (err_)
                res.send(err_);
            res.json(empresa_);
        });
    });
};
