const express = require('express');
const bodyParser = require('body-parser')
const sequelize = require('./database')

const app = express();

app.use(bodyParser.json());

sequelize.sync()
    .then(() => console.log('Base de datos sincronizada'))
    .catch(err => console.error('Error de sincronización', err));

app.post('/usuario', async(req,res) =>{
    const {nombre, email} = req.body;

    try{
        const nuevoUsuario = await Usuario.create({nombre, email});
        res.status(200).json(nuevoUsuario);
    } catch (error){
        res.status(400).json({error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo por el puerto 3000');
});