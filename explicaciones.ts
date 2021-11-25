import conectarBD from "./db/db";
import {UserModel} from "./models/user";
import {Enum_Rol, Enum_TipoObjetivo} from "./models/enums";
import { ProyectosModel } from "./models/project";
import { ObjectId } from "mongoose";

const main = async () => {
    await conectarBD()

// CREACION DE PROYECTOS
    //await ProyectosModel.create({
    //    nombre: "proyecto 1.2",
    //    presupuesto: 234567,
    //    fechaInicio: Date.now(),
    //    fechaFin: new Date("2020/11/24"),
    //    lider: "619e81c65bc835c3e857df07",
    //    objetivos: [
    //        { descripcion: "objeivo general", tipo: Enum_TipoObjetivo.general },
    //        { descripcion: "objeivo especifico No 1", tipo: Enum_TipoObjetivo.especifico },
    //        { descripcion: "objeivo general No 2", tipo: Enum_TipoObjetivo.especifico },
    //    ],
    //})
    //.then((u) =>{
    //    console.log("Proyecto creado", u);
    //})
    //.catch((e) => {
    //    console.log("Error creando el proyecto", e);
    //});

    //const proyecto = await ProyectosModel.find({ nombre: "proyecto 1" }).populate("lider");
    //console.log("El proyecto es:", proyecto);
   
    //CREACION DE USUARIOS
    //await UserModel.create({
    //    correo: "prueba11756@gmail.com",
    //    identificacion: "14024",
    //    nombre: "prueba2",
    //    apellido: "fulano",
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

    //await UserModel.findOneAndDelete({ correo: "omar@gmail.com"})
    //.then((u) => {
    //    console.log("Usuario eliminado", u);
    //})
    //.catch((e) => {
    //    console.log("Error eliminando usuario", e)
    //})

};

main();