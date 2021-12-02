import mongoose from "mongoose";
import { proyectModel } from "./proyect.js";
import { userModel } from "./user.js";

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
        required:true
    },
    estado:{
        type:String,
        enum:["Aceptado","Rechazado","Pendiente"],
        default:"Pendiente",
        required:true
    },
    fechaIngreso:{
        type:Date,
        required:true
    },
    fechaEgreso:{
        type:Date,
        required:true
    }
})

const inscripcionModel = model('inscripcion',inscripcionSchema);

export{inscripcionModel}