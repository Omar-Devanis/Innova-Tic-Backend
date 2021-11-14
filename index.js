import Express from "express";

const app = Express()

app.get("/", (req, res)=> {
    console.log("alguien hizo get");
    res.send("hola, se hizo get");
});

app.listen(5000,()=>{
    console.log("escuchando puerto 5000");
});