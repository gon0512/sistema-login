const Sequelize = require('sequelize')

const connection = new Sequelize('site', 'root', 'layon12345', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection