const mongosse = require('mongoose')
mongosse.Promise = global.Promise

mongosse.connect("mongodb://localhost/bancoteste1")
    .then(() => {
        console.log("Conectado com sucesso")
    })
    .catch((erro) => {
        console.log("Erros ao se conectar " + erro)
    })
    // Model - usuario

const UserSchema = mongosse.Schema({
    nome: {
        type: String,
        require: true
    },
    sobrenome: {
        type: String,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    idade: {
        type: Number,
        require: true
    },
    pais: {
        type: String
    }

})

mongosse.model('usuarios', UserSchema)
const jeovane = mongosse.model('usuarios')
new jeovane({
        nome: "Jeovane",
        sobrenome: "dos Santos",
        email: "jeovanedos2santos@gmail.com",
        idade: 23,
        pais: "Brasil"
    }).save().then(() => {
        console.log("Slvo com sucesso")
    })
    .catch((erro) => {
        console.log("Erro " + erro)
    })