const mongoose=require("mongoose")
const atlasUrl=""

try {
    mongoose.connect(
        atlasUrl, {useNewUrlParser: true, useUnifiedTopology: true}, 
        ()=> console.log("Se conecto a mongoDB en Atlas con mongoose")
    );
} catch(e){
    console.log("Error en la conexion");
}
