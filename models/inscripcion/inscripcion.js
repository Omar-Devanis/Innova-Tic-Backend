import mongoose from "mongoose";
import { Enum_EstadoInscripcion } from "../enums/enums.js";
import { ProyectosModel } from "../proyecto/proyecto.js";
import { UserModel } from "../usuario/usuario.js";

const {Schema, model} = mongoose;


const InscripcionSchema = new Schema({
    estado: {
        type: String,
        enum: ["ACEPTADO", "RECHAZADO", "PENDIENTE"],
        default: "PENDIENTE",
        required: true,
    },

    fechaIngreso: {
        type: Date,
        required: true,
    },

    fechaEgreso: {
        type: Date,
        required: true,
    },

    proyecto: {
        type: Schema.Types.ObjectId,
        ref: ProyectosModel,
        required: true,
    },

    estudiante: {
        type: Schema.Types.ObjectId,
        ref: UserModel,
        required: true,
    }
});

const InscripcionModel = model("incripcion", InscripcionSchema, "inscripciones");

export { InscripcionModel};