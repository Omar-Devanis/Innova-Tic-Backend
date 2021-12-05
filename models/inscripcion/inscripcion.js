import mongoose from "mongoose";
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
        required: false,
    },

    fechaEgreso: {
        type: Date,
        required: false,
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




const InscripcionModel = model("inscripcion", InscripcionSchema);

export { InscripcionModel};