import { ObjetivosModel } from "./objetivos.js";

const resolversObjetivo = {
    Query: {
        Objetivos: async (parent, args) => {
            const objetivos = await ObjetivosModel.find();
            return objetivos;
        },
        objetivosProyecto: async (parent, args) =>{
            const objetivosproyecto = await ObjetivosModel.find({proyecto:args.proyecto})

            return objetivosproyecto;
        },
    },

    Mutation: {
        crearObjetivo: async (parent, args) => {
            const objetivoCreado = await ObjetivosModel.create({
                descripcion: args.descripcion,
                tipo: args.tipo,
                proyecto: args.proyecto,
            });
            return objetivoCreado;
        },
    }
}

export {resolversObjetivo};