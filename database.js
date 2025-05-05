const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('prueba','root','' , {
    host: 'localhost',
    dialect : 'mysql',
    logging: false
});

module.exports = sequelize;