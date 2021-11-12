const Express=require('express')

const router = Express.Router()

router.get("/usuarios/singup", (req, res) => {
    res.send("Aqui te registras")
})

router.get("/usuarios/singin", (req, res) => {
    res.send("Aqui inicias sesion")
})

module.exports=router;