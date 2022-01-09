const db = require('./Db')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING

    },
    conteudo: {

        type: db.Sequelize.TEXT
    }
});
module.exports = Post

// Post.sync({ force: true })