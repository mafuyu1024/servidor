const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;  // Utiliza el puerto proporcionado por Render

app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Parsear JSON

// Variable para almacenar la última ubicación
let lastLocation = {
    latitude: null,
    longitude: null,
    timestamp: null
};

// Ruta GET para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor GPS');  // Mensaje para la ruta raíz
});

// Ruta para recibir datos GPS (POST)
app.post('/gps', (req, res) => {
    const { latitude, longitude } = req.body; // Obtener datos del cuerpo
    const timestamp = new Date().toISOString();  // Capturar la hora actual en formato ISO

    // Actualizar la última ubicación
    lastLocation = { latitude, longitude, timestamp };
    console.log(`Latitud: ${latitude}, Longitud: ${longitude}, Hora: ${timestamp}`);
    res.status(200).send('Datos recibidos correctamente');
});

// Ruta para enviar la última ubicación (GET)
app.get('/latest', (req, res) => {
    res.status(200).json(lastLocation); // Enviar la última ubicación como JSON
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

