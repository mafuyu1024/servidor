const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Manejador para la ruta raíz
app.get('/', (req, res) => {
    res.send('Servidor corriendo. Usa /gps para enviar datos de GPS.');
});

// Manejador para la ruta /gps
app.post('/gps', (req, res) => {
    const { latitude, longitude } = req.body;
    console.log(`Recibido: Latitud: ${latitude}, Longitud: ${longitude}`);
    res.send('Datos recibidos');
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://186.30.176.189:${port}`);
});
