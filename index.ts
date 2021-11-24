import conectarBD from "./db/db";
import UserModel from "./models/user";
import {Enum_Rol} from "./models/enums";

const main = async () => {
    await conectarBD()
   
    //CREACION DE USUARIOS
    await UserModel.create({
        correo: "mozart1756@gmail.com",
        identificacion: "591"
        nombre:"WOLFGANG",
        apellido:"MOZART",
        rol: Enum_Rol.lider,
    })
    .then((u) =>{
        console.log("Usuario creado", u);
    })
    .catch((e) => {
        console.log("Error creando el usuario", e);
    });
    
//CODIGO PARA TRAER USUARIOS
    //await UserModel.find()
    //.then((u) => {
    //    console.log("usuarios", u);
    //})
    //.catch((e) => {
    //    console.error("Error obteniendo los usuarios", e);
    //});
};

main();