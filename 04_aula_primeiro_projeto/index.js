const express = require("express")
const app = express();
const handlebars = require("express-handlebars")
const bodyPareser = require("body-parser")
const Post = require("./models/Post")

var hbs = handlebars.create({ defaultLayout: false });

// Register `hbs.engine` with the Express app.
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
//Body Parser

app.use(bodyPareser.urlencoded({ extended: false }))
app.use(bodyPareser.json())




//Rotas
app.get("/", function(req, res) {
    // ASC
    Post.findAll({
        order: [
            ['id', 'DESC']
        ]
    }).then(posts => {
        res.render('layout/home', {
            posts: posts.map(post => post.toJSON())
        })
    })

})
app.get('/cad', function(req, res) {
    res.render("layout/form")
})
app.post('/add', function(req, res) { //recebe os dados dos formuularios 

    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function() {
        // res.send('Post feito com sucesso!')
        res.redirect('/')
    }).catch(function(erro) {
        res.send("Erro: " + erro)
    })

    // res.send('FORMULARIO RECEBIDO ' + req.body.titulo + " " + req.body.conteudo)

})

app.get('/deletar/:id', function(req, res) {
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(function() {

        res.send("Apagado com sucesso")

    }).catch(function(erro) {
        res.send("Não existe")
    })



})

app.listen(8081, function() {
    console.log("Rodando na porta 8081")
})