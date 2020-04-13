//#region CONEXIONES A BD EN PRODUCCIÓN
//const uri = 'mongodb://167.86.127.137:27037/dca_cms'; //modo remoto
//#endregion

//#region CONEXIONES A BD LOCAL
const uri = 'mongodb://127.0.0.1:27017/dca_cms'; //modo local
//#endregion

module.exports = {
    mongoURI: uri
};

