const express = require('express');
const cors = require('cors'); // Importa CORS
const routes = require('./src'); // O la ruta que usas para configurar tus rutas
const app = express();
const puerto = 3004;

app.use(cors()); // Habilita CORS para todas las rutas

routes(app); // Configura las rutas de tu API

app.listen(puerto, () => {
    console.log(`Servidor ejecutándose en el puerto ${puerto}`);
});
