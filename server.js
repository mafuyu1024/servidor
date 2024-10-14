const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware para manejar el cuerpo de la solicitud
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/gps', (req, res) => {
    const latitude = req.body.latitude;
    const longitude = req.body.longitude;

    // Aquí puedes almacenar los datos en una base de datos o procesarlos
    console.log(`Latitud: ${latitude}, Longitud: ${longitude}`);

    // Responder al cliente
    res.send('Datos recibidos');
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
