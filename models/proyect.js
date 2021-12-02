import mongoose from "mongoose";
import { userModel } from "./user.js";

const { Schema, model } = mongoose;

const proyectSchema = new Schema ({
    nombre : {
        type:String,
        required:true
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
        required:false
    },
    estado:{
        type:String,
        enum:["ACTIVO","INACTIVO"],
        default:"INACTIVO"
    },
    
    fase:{
        type:String,
        enum:["INICIADO","EN_DESARROLLO","TERMINADO"],
        default:"NULO"
    },
    lider:{
        type: Schema.Types.ObjectId,
        ref: userModel, //referencia al modelo de usuarios
        required:true
    },
    objetivo:[{
        descripcion:{
            type:String,
            /* required:true */
        },
        tipo:{
            type:String,
            enum:["GENERAL","ESPECIFICO"],
            /* required:true */
        }
    }]

})

const proyectModel = model('proyect',proyectSchema);

export {proyectModel};