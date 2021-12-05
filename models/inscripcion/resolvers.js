import { inscripcionModel } from "./inscripcion.js";

const resolverInscripcion={
    Query:{
        Inscripciones:async(parent,args)=>{
            const inscripcion = await inscripcionModel.find().populate("estudiante").populate("proyecto")

            return inscripcion;
        }
    },

    Mutation:{
        crearInscripcion: async(parent,args)=>{
            const inscripcionCreada = await inscripcionModel.create({
                proyecto: args.proyecto,
                estudiante: args.estudiante,
                estado: args.estado,
                fechaIngreso: args.fechaIngreso,
                fechaEgreso: args.fechaEgreso   
            })

            return inscripcionCreada;
        },

        respuestaInscripcion: async(parent,args) =>{
            const inscripcionRespuesta = await inscripcionModel.findByIdAndUpdate(
                args._id,{
                    estado:"ACEPTADO",
                    fechaIngreso:Date.now()
                }, {new:true}
            )

            return inscripcionRespuesta;
        }
    }
}

export {resolverInscripcion};