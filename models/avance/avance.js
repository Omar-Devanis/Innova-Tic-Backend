import mongoose from "mongoose";
import { ProyectosModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";

const {Schema, model} = mongoose;


const avanceSchema = new Schema({
    fecha: {
        type: Date,
        required: true,
    },

    descripcion: {
        type: String,
        required: true,
    },

    observaciones: [
        {
            type: String,
        },
    ],

    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProyectosModel,
        required: true,
    },

    creadoPor: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    },
    
});

const AvancesModel = model("Avance", avanceSchema);

export { AvancesModel };