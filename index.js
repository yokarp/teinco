const express = require('express');
const bodyParser = require('body-parser');
const Usuario = require('./models/usuario');
const Producto = require('./models/producto');
const sequelize = require('./database');

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

app.get('/usuarios/:id/productos', async (req, res) => {
    const { id } = req.params;
    try {
      const usuario = await Usuario.findByPk(id, {
        include: Producto 
      });
  
      if (!usuario) {
        return res.status(404).json({ error: 'Usuario no encontrado' });
      }
  
      res.status(200).json(usuario.Productos);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  });

app.get('/usuarios', async (req,res) => {
    try {
        const usuarios = await Usuario.findAll();

        res.status(200).json(usuarios);
    } catch (error){
        res.status(400).json({error: error.message });
    }
});

app.listen(3000, () => {
    console.log('Servidor corriendo por el puerto 3000');
});