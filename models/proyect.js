import mongoose from "mongoose";
import { userModel } from "./user.js";

const { Schema, model } = mongoose;

const proyectSchema = new Schema ({
    nombre : {
        type:String,
        required:true,
        unique:true
    },
    presupuesto:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type: Date,
        required:true
    },
    fechaFin:{
        type:Date,
        required:true
    },
    estado:{
        type:String,
        enum:["Activo","Inactivo"],
        default:"Inactivo"
    },
    
    fase:{
        type:String,
        enum:["Iniciado","En Desarrollo","Terminado"],
        default:"Nulo"
    },
    lider:{
        type: Schema.Types.ObjectId,
        ref:userModel, //referencia al modelo de usuarios
        required:true
    },
    objetivos:[{
        descripcion:{
            type:String,
            required:true
        },
        tipo:{
            type:String,
            enum:["General","Especifico"],
            required:true
        }
    }]

})

const proyectModel = model('proyect',proyectSchema);

export {proyectModel};