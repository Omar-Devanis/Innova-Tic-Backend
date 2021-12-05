import mongoose from "mongoose";
import { userModel } from "../usuario/usuario.js";

const { Schema, model } = mongoose;

const proyectSchema = new Schema ({
    nombre : {
        type:String,
        required:true
    },
    presupuesto:{
        type:Number,
        required:true
    },
    fechaInicio:{
        type: Date,
        required:true
    },
    fechaFin:{
        type:Date,
        required:false
    },
    estado:{
        type:String,
        enum:["ACTIVO","INACTIVO"],
        default:"INACTIVO"
    },
    
    fase:{
        type:String,
        enum:["INICIADO","EN_DESARROLLO","TERMINADO"],
        default:"NULO"
    },
    lider:{
        type: Schema.Types.ObjectId,
        ref: userModel, //referencia al modelo de usuarios
        required:true
    },
    objetivo:[{
        descripcion:{
            type:String,
            /* required:true */
        },
        tipo:{
            type:String,
            enum:["GENERAL","ESPECIFICO"],
            /* required:true */
        }
    }]

},
{   toJSON: { virtuals: true }, // So `res.json()` and other `JSON.stringify()` functions include virtuals
    toObject: { virtuals: true } // So `console.log()` and other functions that use `toObject()` include virtuals}
});

proyectSchema.virtual('avances',{
    ref: 'avance',
    localField: '_id',
    foreignField:'proyecto'
})

proyectSchema.virtual('inscripcion',{
    ref: 'inscripcion',
    localField: '_id',
    foreignField:'proyecto'
})

const proyectModel = model('proyect',proyectSchema);

export {proyectModel};