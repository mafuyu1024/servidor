const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware para poder leer datos de la petición
app.use(express.json());

app.get('/gps', (req, res) => {
    const latitude = req.query.latitude;
    const longitude = req.query.longitude;

    if (latitude && longitude) {
        console.log(`Recibidos: Latitud ${latitude}, Longitud ${longitude}`);
        res.status(200).send(`Datos recibidos: Latitud ${latitude}, Longitud ${longitude}`);
    } else {
        res.status(400).send('Datos de GPS no proporcionados');
    }
});


app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});

