import {Schema, model} from "mongoose";
import { Enum_EstadoProyecto, Enum_FaseProyecto, Enum_TipoObjetivo} from "./enums"
import { UserModel } from "./user";

interface Proyecto {
    nombre: string;
    presupuesto: number;
    fechaInicio: Date;
    fechaFin: Date;
    estado: Enum_EstadoProyecto;
    fase: Enum_FaseProyecto;
    lider: Schema.Types.ObjectId;
    objetivos: [{ descripcion: string, tipo: Enum_TipoObjetivo}];
}

const projectSchema = new  Schema<Proyecto> ({
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
        enum: Enum_EstadoProyecto,
        default: Enum_EstadoProyecto.INACTIVO,
    },

    fase: {
        type: String,
        enum: Enum_FaseProyecto,
        default: Enum_FaseProyecto.NULA,
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
                enum: Enum_TipoObjetivo,
                require: true,
            }
        }
    ],
    
});

const ProyectosModel = model("proyecto", projectSchema, "Proyectos");

export {ProyectosModel};