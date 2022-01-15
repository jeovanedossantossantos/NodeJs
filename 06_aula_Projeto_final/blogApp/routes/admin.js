const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const Categorias = mongoose.model('categorias')

router.get("/", (req, res) => {
    res.render("admin/index")
})

router.get("/posts", (req, res) => {
        res.send("Pgina ok")
    })
    // Rota de cadastro
router.get("/categorias", (req, res) => {

        Categorias.find().sort({ date: "desc" }).then(categorias => {
            res.render('admin/categorias', {
                categorias: categorias.map(categorias => categorias.toJSON())
            })
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

module.exports = router