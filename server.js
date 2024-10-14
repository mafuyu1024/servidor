const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para parsear el cuerpo de las solicitudes
app.use(express.json());

// Ruta para recibir datos del ESP8266
app.post('/gps', (req, res) => {
    const { latitude, longitude } = req.body;

    if (latitude && longitude) {
        console.log(`Datos recibidos: Latitud ${latitude}, Longitud ${longitude}`);
        res.status(200).send('Datos recibidos correctamente');
    } else {
        res.status(400).send('Faltan datos');
    }
});

// Ruta raíz
app.get('/', (req, res) => {
    res.send('¡Servidor funcionando!');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

