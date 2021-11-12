const Express=require('express')

const router = Express.Router()

router.get("/proyectos", (req, res) => {
    res.send("Aqui estan los proyectos")
})


module.exports=router;