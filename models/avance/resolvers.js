import { AvancesModel } from "./avance.js"


const resolversAvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await AvancesModel.find().populate("proyecto").populate("creadoPor");
            return avances;
        },

        filtrarAvance: async (parent, args) => {
            const avanceFiltrado = await AvancesModel.find({proyecto: args.idProyecto})
            .populate("proyecto")
            .populate("creadoPor");

            return avanceFiltrado;
        },
    },
    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado = AvancesModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },
    },
};

export {resolversAvance};