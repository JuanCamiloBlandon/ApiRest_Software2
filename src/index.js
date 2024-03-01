const express = require('express');
const app = express();

// Middleware para el manejo de datos en formato JSON
app.use(express.json());

// Ruta base de la API
app.use('/api/v1', require('./routes/taskRouter'));

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en el puerto ${PORT}`);
});
