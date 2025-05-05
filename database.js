const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('teinco_estudiantes','root','' , {
    host: 'localhost',
    dialect : 'mysql',
    logging: false
});

module.exports = sequelize;