import mongoose from "mongoose";
import { proyectModel } from "./proyect.js";
import { userModel } from "./user.js";


const { Schema, model } = mongoose;

const avancesSchema = new Schema({
    fecha:{
        type: Date,
        required:true
    },
    descripcion:{
        type:String,
        required:true
    },
    observaciones:[
        {type:String}
    ],
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:proyectModel,
        required:true
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:userModel,
        required:true
    }
})

const avanceModel = model('avance',avancesSchema);

export{avanceModel}