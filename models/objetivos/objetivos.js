import  mongoose from "mongoose";
import { ProyectosModel } from "../proyecto/proyecto.js";

const { Schema, model } = mongoose

const objetivoSchema = new Schema({
    descripcion:{
        type: String,
        required: true,
    },
    tipo: {
        type: String,
        enum: ["GENERAL","ESPECIFICO"],
        required: true,
    },
    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProyectosModel,
        required: true,
    },
});

const ObjetivosModel = model("objetivo", objetivoSchema);

export {ObjetivosModel};