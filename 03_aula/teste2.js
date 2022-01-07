const Sequelize = require('sequelize')
const dotenv = require('dotenv/config')
const sequelize = new Sequelize('teste2', 'root', process.env.PASWORD, {
        host: "localhost",
        dialect: 'mysql',
    })
    // sequelize.authenticate().then(
    //     function() {
    //         console.log("Conectado com sucesso")
    //     }
    // ).catch(function(erro) {
    //     console.log("Falha ao se Conectado " + erro)
    // })
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})

Postagem.create({
    titulo: "Um titulo",
    conteudo: "Teste de sequalize"
})

const Usaraio = sequelize.define("usuarios", {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usaraio.create({
    nome: "Jeovane",
    sobrenome: "dos Santos",
    idade: 23,
    email: "jksdjhfkjshk"
})

// Usaraio.sync({ force: true })
// Postagem.sync({ force: true })