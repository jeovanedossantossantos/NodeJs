const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.render("views/admin/index")
})

router.get("/posts", (req, res) => {
    // return res.json("Será mesmo?")
    res.send("Pgina ok")
})

router.get("/categorias", (req, res) => {
    // return res.json("Pagina principal da categorias")
    // res.render("admin/categorias")
    res.render("views/admin/categorias")
        // res.send("Pgina ok")
})

router.get("/categorias/add", (req, res) => {
    // return res.json("Pagina principal da categorias")
    res.render("views/admin/addcategorias")
})





module.exports = router