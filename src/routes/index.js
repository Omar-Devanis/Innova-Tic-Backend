const Express=require('express')

const router = Express.Router()

router.get("/", (req, res) => {
    res.send("hola que tal!")
})

router.get("/aboutus", (req, res) => {
    res.send("hola que tal! Esto es acerca de nosotros")
})

module.exports=router;