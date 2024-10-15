// server.js
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para recibir datos GPS
app.post('/gps', (req, res) => {
    const { latitude, longitude } = req.query; // Obtener latitud y longitud de la consulta
    console.log(`Latitud: ${latitude}, Longitud: ${longitude}`); // Imprimir en la consola
    
    // Aquí puedes agregar lógica para almacenar o procesar los datos
    res.status(200).send(`Datos recibidos: Latitud ${latitude}, Longitud ${longitude}`);
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
