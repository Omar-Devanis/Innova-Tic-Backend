const Express=require("express") 
const Path=require("path")
const Exphdbs=require("express-handlebars")
const MethodOverride=require("method-override")

const app = Express()
require("./database")

app.set("port", 5500)
app.set("views", Path.join(__dirname, "views"))
app.engine(".hbs", Exphdbs({
    defaultLayout: "main",
    layoutsDir:Path.join(app.get("views"), "layouts"),
    partialsDir: Path.join(app.get("views"), "partials"),
    extname:".hbs"
})
);
app.set("view engine", ".hbs");

app.use(Express.urlencoded({extended: false}))
app.use(MethodOverride("_method"))

app.use(require("./routes/index"))
app.use(require("./routes/proyectos"))
app.use(require("./routes/usuarios"))

app.use(Express.static(Path.join(__dirname, "public")))



app.listen(app.get("port"),()=>{
    console.log("escuchando puerto 5500");
});