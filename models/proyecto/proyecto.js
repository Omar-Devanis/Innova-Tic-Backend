import mongoose from "mongoose";
import { UserModel } from "../usuario/usuario.js";

const {Schema, model} = mongoose;


const projectSchema = new  Schema({
    nombre: {
        type: String,
        required: true,
        uniqued: false,
    },

    presupuesto: {
        type: String,
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

    
},
{
  toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
  toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals
}
);

projectSchema.virtual('avances', {
    ref: 'avance',
    localField: '_id',
    foreignField: 'proyecto'
  });

projectSchema.virtual('inscripciones', {
    ref: 'inscripcion',
    localField: '_id',
    foreignField: 'proyecto'
});  

const ProyectosModel = model("proyect", projectSchema);

export {ProyectosModel};