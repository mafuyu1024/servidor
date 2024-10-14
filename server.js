const express = require('express');
const app = express();
const port = 3000;

// Middleware para analizar parámetros de consulta
app.use(express.json());

app.get('/gps', (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;
    
    if (latitude && longitude) {
        // Procesa los datos y envía una respuesta
        res.status(200).send(`Latitud: ${latitude}, Longitud: ${longitude}`);
    } else {
        res.status(400).send('Faltan parámetros');
    }
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});
