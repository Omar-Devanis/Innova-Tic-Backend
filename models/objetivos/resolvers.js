import { ObjetivosModel } from "./objetivos.js";

const resolversObjetivo = {
    Query: {

    },

    Mutation: {
        crearObjetivo: async (parent, args) => {
            const objetivoCreado = await ObjetivosModel.create({
                descripcion: args.descripcion,
                tipo: args.tipo,
                proyecto: args.proyecto,
            }, { new: true });
            return objetivoCreado;
        },
    }
}

export {resolversObjetivo};