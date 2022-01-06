const express = require("express")
const app = express();

app.get('/', function(req, res) {
    res.send("Seja bem vindo")
})

app.get("/sobre", function(req, res) {
    res.send("Minha roda")
})

app.get("/blog", function(req, res) {
    res.send("Minha roda 2")
})

app.get("/ola/:nome/:cargo", function(req, res) {

    res.send("Ola " + req.params.nome)
})
app.listen(8081, function() {
    console.log("Rodando na porta 8081")
});