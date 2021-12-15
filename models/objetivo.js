import  mongoose from "mongoose";
import { proyectModel } from "../proyecto/proyecto.js";
import { userModel } from "../usuario/usuario.js";


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
    },
    creadoPor:{
        type:Schema.Types.ObjectId,
        ref:userModel,
        required:true
    }
})

const objetivoModel = model('objetivo',objetivoSchema);

export {objetivoModel};