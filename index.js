const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./database')

const app = express();

app.use(bodyParser.json());

sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error de sincronización', err));

app.listen(3000, () => {
    console.log('Servidor corriendo por el puerto 3000');
});