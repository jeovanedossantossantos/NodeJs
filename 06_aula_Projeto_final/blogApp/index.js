const express = require('express')
const handlebars = require("express-handlebars")
const bodyParser = require("body-parser")
const app = express()
const admin = require("./routes/admin")
const path = require("path")
    // const mongoose = require("mongoose")
const cors = require('cors')

app.use((req, res, next) => {
    // console.log("Acessando o Middleware")
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE')
    app.use(cors())
    next();
})

// Configurações

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


var hbs = handlebars.create({ defaultLayout: false });

// // Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


// app.use(express.static(path.join(__dirname, "public")))
// Rotas
app.use("admin", admin)
    // outros
const PORT = 8081
app.listen(PORT, () => {
    console.log("Servidor rodando")
})