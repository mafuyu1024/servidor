const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000; // Usa el puerto proporcionado por Render

app.use(cors()); // Habilitar CORS si es necesario
app.use(bodyParser.json()); // Parsear JSON

// Ruta para recibir datos
app.post('/gps', (req, res) => {
    const { latitude, longitude } = req.body; // Obtener datos del cuerpo
    console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
    res.status(200).send('Datos recibidos correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en https://servidor-vp58.onrender.com:${port}`);
});
