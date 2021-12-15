import{objetivoModel} from './resolver.js';

const resolverObjetivo={
    Query:{
        Objetivos:async(parent,args)=>{
            const objet = await objetivoModel.find();
            return objet
        },
        filtrarObjetivos:async(parent,args)=>{
            const objet = await objetivoModel.find({proyecto:args.proyecto});
            return objet
        }

    },
    Mutation:{
        crearUsuario: async(parent,args) =>{
            const objCreado = await objetivoModel.create({
                descripcion:args.descripcion,
                tipo:args.tipo
            })
            return objCreado;
        },

        editarObjetivo: async(parent,args) =>{
            const editarU = await objetivoModel.findOneAndUpdate(
                args._id,{
                    descripcion:args.descripcion,
                    tipo:args.tipo
                }
            )
            return editarU; 
        }

    }
}

export {resolverObjetivo};