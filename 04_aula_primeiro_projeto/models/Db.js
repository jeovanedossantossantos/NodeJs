const Sequelize = require("sequelize")
const dotenv = require('dotenv').config()

//Conexão com o banco de dados
const sequelize = new Sequelize(process.env.BANCO, process.env.USER, process.env.PASWORD, {
    dialect: "mysql",
    host: process.env.PORTA,

})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize,
}