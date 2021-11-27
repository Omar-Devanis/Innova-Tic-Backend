import mongoose from "mongoose";
import { UserModel } from "../usuario/usuario.js";

const {Schema, model} = mongoose;


const projectSchema = new  Schema({
    nombre: {
        type: String,
        required: true,
        uniqued: true,
    },

    presupuesto: {
        type: Number,
        required: true,
    },

    fechaInicio: {
        type: Date,
        required: true,
    },

    fechaFin: {
        type: Date,
        required: true,
    },

    estado: {
        type: String,
        enum: ["ACTIVO", "INACTIVO"],
        default: "INACTIVO",
    },

    fase: {
        type: String,
        enum: ["INICIADO", "EN_DESARROLLO", "TERMINADO", "NULA"],
        default: "NULA",
    },

    lider: {
        type: Schema.Types.ObjectId,
        require: true,
        ref: UserModel,
    },

    objetivos: [
        {
            descripcion:{
                type: String,
                require: true,
            },
            tipo:{
                type: String,
                enum: ["GENERAL", "ESPECIFICO"],
                require: true,
            }
        }
    ],
    
});

const ProyectosModel = model("proyecto", projectSchema, "Proyectos");

export {ProyectosModel};