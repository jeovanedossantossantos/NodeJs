const express = require("express")
const router = express.Router()
const mongoose = require("mongoose")
require("../models/Categoria")
const Categorias = mongoose.model('categorias')

router.get("/", (req, res) => {
    res.render("admin/index")
})

router.get("/posts", (req, res) => {
    // return res.json("Será mesmo?")
    res.send("Pgina ok")
})

router.get("/categorias", (req, res) => {
    // return res.json("Pagina principal da categorias")
    // res.render("admin/categorias")
    res.render("admin/categorias")
        // res.send("Pgina ok")
})

router.get("/categorias/add", (req, res) => {
    // return res.json("Pagina principal da categorias")
    res.render("admin/addcategorias")
})

router.post("/categorias/nova", (req, res) => {
    const novaCategora = {
        nome: req.body.nome,
        slug: req.body.slug
    }
    new Categorias(novaCategora).save().then(() => {
        console.log("Salvo")
    }).catch((err) => {
        console.log("Erro" + err)
    })
})





module.exports = router