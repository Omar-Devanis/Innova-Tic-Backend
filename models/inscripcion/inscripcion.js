import mongoose from "mongoose";
import { proyectModel } from "../proyecto/proyecto.js";
import { userModel } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const inscripcionSchema = new Schema({
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:proyectModel,
        required:true
    },
    estudiante:{
        type:Schema.Types.ObjectId,
        ref:userModel,
        required:true,
        unique:true
    },
    estado:{
        type:String,
        enum:["ACEPTADO","RECHAZADO","PENDIENTE"],
        default:"PENDIENTE",
        required:true
    },
    fechaIngreso:{
        type:Date,
        required:false
    },
    fechaEgreso:{
        type:Date,
        required:false
    }
})

const inscripcionModel = model('inscripcion',inscripcionSchema);

export{inscripcionModel}