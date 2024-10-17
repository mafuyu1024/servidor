const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Variables para almacenar latitud y longitud
let latestData = {
    latitude: 0,
    longitude: 0
};

const app = express();
const port = process.env.PORT || 4000;  // Utiliza el puerto proporcionado por Render

app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Parsear JSON

// Ruta GET para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor GPS');
});

// Ruta POST para recibir datos GPS desde el ESP8266
app.post('/gps', (req, res) => {
    const { latitude, longitude } = req.body; // Obtener datos del cuerpo
    if (latitude && longitude) {
        latestData = { latitude, longitude }; // Almacenar los datos recibidos
        console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
        res.status(200).send('Datos recibidos correctamente');
    } else {
        res.status(400).send('Faltan datos de latitud o longitud');
    }
});

// Ruta GET para proporcionar los últimos datos GPS a la aplicación Kivy
app.get('/latest', (req, res) => {
    res.status(200).json(latestData); // Enviar los datos almacenados
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});

