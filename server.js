const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 4000;  // Utiliza el puerto proporcionado por Render

app.use(cors()); // Habilitar CORS
app.use(bodyParser.json()); // Parsear JSON

// Ruta GET para la raíz
app.get('/', (req, res) => {
    res.send('Bienvenido al servidor GPS');  // Mensaje para la ruta raíz
});

// Ruta para recibir datos GPS (POST)
app.post('/gps', (req, res) => {
    const { latitude, longitude } = req.body; // Obtener datos del cuerpo
    console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);
    res.status(200).send('Datos recibidos correctamente');
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});
