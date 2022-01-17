const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const Categorias = mongoose.model('categorias')
require("../models/Postagens")
const Postagens = mongoose.model('postagens')
router.get("/", (req, res) => {
    res.render("admin/index")
})

router.get("/posts", (req, res) => {
        console.log("ok1111 ")
        return res.status(200).json({
            id: 1,
            message: "Pgina ok"
        })

    })
    // Rota de cadastro
router.get("/categorias", (req, res) => {

        Categorias.find().sort({ date: "desc" }).then(categorias => {
            // res.render('admin/categorias', {
            //     categorias: categorias.map(categorias => categorias.toJSON())
            // })
            return res.status(200).json(categorias.map(categorias => categorias.toJSON()))


        }).catch((err) => {
            res.flash("erros_msg", "Houve um essor na listgem ")
            res.redirect("/admin")


        })

        router.get("/categorias/add", (req, res) => {
            res.render("admin/addcategorias")
        })

        router.post("/categorias/nova", (req, res) => {

            var erros = []

            if (!req.body.nome || typeof req.body.nome == undefined || req.body.nome == null) {
                erros.push({
                    texto: "Nome inválido"
                })
            }
            if (!req.body.slug || typeof req.body.slug == undefined || req.body.slug == null) {
                erros.push({
                    texto: "Slug inválido"
                })
            }
            if (req.body.nome.length < 2) {
                erros.push({
                    texto: "Nome muito pequeno"
                })
            }

            if (erros.length > 0) {
                res.render("admin/addcategorias", {
                    erros: erros
                })
            } else {
                const novaCategora = {
                    nome: req.body.nome,
                    slug: req.body.slug
                }
                new Categorias(novaCategora).save().then(() => {
                    req.flash("success_msg", "Salvo com sucesso")
                    res.redirect("/admin/categorias")
                }).catch((err) => {
                    req.flash("error_msg", "Erro ao salvar")
                    res.redirect("/admin")
                })
            }

        })

    })
    // Rota de verificação de categoria
router.get("/categorias/edit/:id", (req, res) => {

        Categorias.findOne({ _id: req.params.id }).then((categoria) => {

            res.render('admin/editar', {
                categoria: categoria.toJSON()

            })
            console.log(categoria)
        }).catch((err) => {
            req.flash("erro_msg", "Esta categoria não existe")
            res.redirect("/admin")
        })


    })
    // Rota de edição
router.post("/categorias/edit/:id", async(req, res) => {

    try {
        const id = req.params.id;
        const c = req.body;
        console.log(c)
        const respo = await Categorias.findByIdAndUpdate(id, c)
        console.log("ok")
        res.redirect("/admin/categorias")
    } catch (err) {
        console.log("Erro " + err)
        res.redirect("/admin/categorias")
    }

})
router.post("/categorias/deletar", (req, res) => {
    Categorias.remove({ _id: req.body.id }).then(() => {

        console.log("Deletado com sucesso")
        res.redirect("/admin/categorias")
    }).catch((err) => {
        console.log("Deletado falho")
        res.redirect("/admin/categorias")
    })
})

router.get("/postagens", (req, res) => {

    Postagens.find().populate("categoria").sort({ date: "desc" }).then(postagens => {
            res.render('admin/postagens', {
                    postagens: postagens.map(postagens => postagens.toJSON())

                })
                // console.log(" pos " + postagens)
        }).catch((err) => {
            res.flash("erros_msg", "Houve um essor na listgem ")
            res.redirect("/admin")


        })
        // Postagens.find().populate("categorias").sort({ data: "desc" }).then((postagens) => {
        //     // res.send("Ok")
        //     res.render("admin/postagens", {
        //         postagens: postagens.map(postagens => postagens.toJSON())
        //             // postagens: "Isso"
        //     })
        // }).catch((err) => {
        //     // res.flash("erros_msg", "Houve um essor na listgem ")
        //     // res.redirect("admin/postagens")
        //     console.log("ERRO " + err)
        // })

})

router.get("/postagens/add", (req, res) => {
    Categorias.find().then((categoria) => {
        // console.log("ok")
        // console.log(categoria)
        res.render("admin/addpostagens", { categoria: categoria.map(categoria => categoria.toJSON()) })
    }).catch((err) => {
        console.log("erro " + err)
        res.redirect("/admin")
    })

})

router.post("/postagens/nova", (req, res) => {
    let valor
    Categorias.findOne({ _id: req.body.id }).then((categoria) => {
        res.render('admin/editar', {
                categoria: categoria.toJSON(),

            })
            // valor = categoria


    }).catch((err) => {
        console.log("erro")
    })

    var erro = []
    if (req.body.categoria == "0") {
        erro.push({ texto: "Categoria invalida, registre uma categoria" })
    }
    if (erro.length > 0) {
        res.render("admin/addpostagens", { erro: erro })
    } else {
        const novaPostagem = {
                titulo: req.body.titulo,
                slug: req.body.slug,
                descricao: req.body.descricao,
                conteudo: req.body.conteudo,
                categoria: req.body.categoria
            }
            // console.log(req.body)
        new Postagens(novaPostagem).save().then(() => {
            console.log("Postagem salva")
            res.redirect("/admin/postagens")
        }).catch((err) => {
            console.log("Erro " + err)
        })
    }

})

router.get("/postagens/edit/:id", (req, res) => {

    Postagens.findOne({ _id: req.params.id }).then((postagem) => {
        Categorias.find().then((categoria) => {
            res.render("admin/editpostagens", {
                categoria: categoria.map(categoria => categoria.toJSON()),
                postagem: postagem.toJSON()
            })

        }).catch((err) => {
            console.log("Erro " + err)
            res.redirect("/admin/postagens")


        })
    }).catch((err) => {
        console.log("Erro " + err)
        res.redirect("/admin/postagens")

    })



})

router.post("/postagem/edit", async(req, res) => {

    try {
        const id = req.body.id;
        const c = req.body;
        console.log(c)
        const respo = await Postagens.findByIdAndUpdate(id, c)
        console.log("ok")
        res.redirect("/admin/postagens")
    } catch (err) {
        console.log("Erro " + err)
        res.redirect("/admin/postagens")
    }

    // Postagens.findOne({ _id: req.body.id }).then((postagem) => {
    //     postagem = req.body



    //     postagem.save().then(() => {
    //         console.log("Altero a postagem")
    //         res.redirect("/admin/postagens")
    //     }).catch((err) => {
    //         console.log("erro " + err)
    //         res.redirect("/admin/postagens")
    //     })

    // }).catch((err) => {
    //     console.log("erro " + err)
    //     res.redirect("/admin/postagens")
    // })

})

// router.get("/postagens/deletar/:id", (req, res) => {

// // Postagens.remove({ _id: req.params.id }).then(() => {
//     res.redirect("/admin/postagem")
// })

router.post("/postagem/deletar", (req, res) => {
        Postagens.remove({ _id: req.body.id }).then(() => {

            console.log("Deletado com sucesso")
            res.redirect("/admin/postagens")
        }).catch((err) => {
            console.log("Deletado falho")
            res.redirect("/admin/postagens")
        })
    })
    // })


module.exports = router