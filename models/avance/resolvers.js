import {avanceModel} from './avance.js'

const resolverAvance = {
    Query:{
        Avances: async(parent,args)=>{
            const avances = await avanceModel.find().populate("creadoPor").populate("proyecto");
            return avances;
        },
        filtrarAvance: async( parent, args) =>{
            const avancesFiltrados = await avanceModel.find({proyecto:args.proyecto}).populate("creadoPor").populate("proyecto");
            return avancesFiltrados;
        }
    },
    Mutation:{
        crearAvance: async (parent,args) =>{
            const avanceCreado = await avanceModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor
            });

            return avanceCreado;
        }

    }
}

export {resolverAvance}