const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;  // Utiliza el puerto proporcionado por Render

app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Parsear JSON

// Variable para almacenar la última ubicación y mensaje
let lastLocation = {
    latitude: null,
    longitude: null,
    timestamp: null,
    mensaje: null
};

// Ruta GET para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor GPS');  // Mensaje para la ruta raíz
});

// Ruta para recibir datos GPS y el mensaje (POST)
app.post('/gps', (req, res) => {
    const { latitude, longitude, mensaje } = req.body; // Obtener datos del cuerpo
    const timestamp = new Date().toISOString();  // Capturar la hora actual en formato ISO

    // Actualizar la última ubicación y mensaje
    lastLocation = { latitude, longitude, timestamp, mensaje };

    // Imprimir los datos recibidos en la consola
    console.log(`Latitud: ${latitude}, Longitud: ${longitude}, Hora: ${timestamp}, Mensaje: ${mensaje}`);

    res.status(200).send('Datos recibidos correctamente');
});

// Ruta para enviar la última ubicación y mensaje (GET)
app.get('/latest', (req, res) => {
    res.status(200).json(lastLocation); // Enviar la última ubicación como JSON
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
