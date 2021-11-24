import conectarBD from "./db/db";
import UserModel from "./models/user";
import {Enum_Rol} from "./models/enums";

const main = async () => {
    await conectarBD()
   
    //CREACION DE USUARIOS
    //await UserModel.create({
    //    correo: "mozart1756@gmail.com",
    //    identificacion: "1591",
    //    nombre: "wolfgang",
    //    apellido: "mozart",
    //    rol: Enum_Rol.lider,
    //})
    //.then((u) =>{
    //    console.log("Usuario creado", u);
    //})
    //.catch((e) => {
    //    console.log("Error creando el usuario", e);
    //});
    
//CODIGO PARA TRAER USUARIOS
   //await UserModel.find()
   //.then((u) => {
   //     console.log("usuarios", u);
   //})
   //.catch((e) => {
   //     console.error("Error obteniendo los usuarios", e);
   //});

// ACTUALIZAR USUARIOS    
    //await UserModel.findOneAndUpdate(
    //    { correo: "mozart1756@gmail.com"}, 
    //    {
    //        nombre: "wolfgang A"
    //    } 
    //    )
    //    .then((u) => {
    //        console.log("Usuario actualizado", u);
    //    })
    //    .catch((e) => {
    //        console.log("Error actualizando", e);
    //    })

    await UserModel.findOneAndDelete({ correo: "omar@gmail.com"})
    .then((u) => {
        console.log("Usuario eliminado", u);
    })
    .catch((e) => {
        console.log("Error eliminando usuario", e)
    })

};

main();