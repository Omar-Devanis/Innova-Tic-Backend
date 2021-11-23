import  mongoose from "mongoose";
import { proyectModel } from "./proyect.js";

const { Schema, model } = mongoose

const objetivoSchema = new Schema({
    descripcion:{
        type:String,
        required:true
    },
    tipo: {
        type:String,
        enum:["General","Especifico"],
        required:true
    },
    proyecto:{
        type:Schema.Types.ObjectId,
        ref:proyectModel,
        required:true
    }
})

const objetivoModel = model('objetivo',objetivoSchema);

export {objetivoModel};