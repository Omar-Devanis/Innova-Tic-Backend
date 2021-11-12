const mongoose=require("mongoose")
const dotenv=require("dotenv")

dotenv.config({ path: "./.env"})
const atlasUrl = process.env.DB_URL;

try {
    mongoose.connect(
        atlasUrl, {useNewUrlParser: true, useUnifiedTopology: true}, 
        ()=> console.log("Se conecto a mongoDB en Atlas con mongoose")
    );
} catch(e){
    console.log("Error en la conexion");
}
