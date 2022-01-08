const express = require("express")
const app = express();
const handlebars = require("express-handlebars")
const Sequelize = require("sequelize")

var hbs = handlebars.create({ defaultLayout: 'main' });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//Config
//Templete Engine
// app.engine('handlebars', hbs)
// app.set("view engine", "handlebars")

//Conexão com o banco de dados
const sequelize = new Sequelize(process.env.BANCO, process.env.USER, process.env.PASWORD, {
    host: process.env.PORTA,
    dialect: "mysql"
})

//Rotas

app.get('/', function(req, res) {
    res.render("/layout/form")
})

app.listen(8081, function() {
    console.log("Rodando na porta 8081")
})