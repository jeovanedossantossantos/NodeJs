const Sequelize = require('sequelize')
const dotenv = require('dotenv/config')
const sequelize = new Sequelize('sistemadecadastro', 'root', process.env.PASWORD, {
    host: "localhost",
    dialect: 'mysql',
})

sequelize.authenticate().then(
    function() {
        console.log("Conectado com sucesso")
    }
).catch(function(erro) {
    console.log("Falha ao se Conectado " + erro)
})