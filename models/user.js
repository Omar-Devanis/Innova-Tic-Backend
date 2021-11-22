import mongoose from "mongoose";


const { Schema, model } = mongoose;

const userSchema = new Schema({
    correo:{
        type:String,
        required:true,
        unique:true,
        validate:{
            validator: email =>{
               return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
            },
            message:"No es un email correcto",
        }
    },
    identificacion:{
        type:String,
        required:true,
        unique:true
    },
    nombre:{
        type:String,
        required:true
    },
    apellido:{
        type:String,
        required:true
    },
    rol:{
        type:String,
        required:true,
        enum:["Estudiante","Lider","Administrador"]
    },
    estado:{
        type:String,
        default:"Pendiente",
        enum:["Pendiente","Autorizado","No Autorizado"]
    }
})

//definir el modelo
const userModel = model('User', userSchema);

export {userModel}; //obliga a que se exporte con este nombre
