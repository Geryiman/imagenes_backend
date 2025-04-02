const imageNetwork = require('./network/imageNetwork');//importamos el archivo de la red de la imagen
function routes(app){
    app.use("/images",imageNetwork);//definimos la ruta de la imagen
}
module.exports = routes; //exportamos la función para poder usarla en el archivo principal
