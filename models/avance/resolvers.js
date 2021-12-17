import { avanceModel} from "./avance.js"


const resolversAvance = {
    Query: {
        Avances: async (parent, args) => {
            const avances = await avanceModel.find().populate("proyecto").populate("creadoPor");
            return avances;
        },

        filtrarAvance: async (parent, args) => {
            const avanceFiltrado = await avanceModel.find({proyecto: args.idProyecto})
            .populate("proyecto")
            .populate("creadoPor");

            return avanceFiltrado;
        },
    },
    Mutation: {
        crearAvance: async (parent, args) => {
            const avanceCreado = await avanceModel.create({
                fecha: Date.now(),
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor,
            });
            return avanceCreado;
        },

        editarAvance: async ( parent, args) =>{
            const avanceEditado = await avanceModel.findByIdAndUpdate(args._id,{
                observaciones:args. observaciones,
                descripcion:args.descripcion
            },{new:true})
            return avanceEditado;
        },

            agregarObservaciones: async ( parent, args) =>{
            const observacionAgregada = await avanceModel.findByIdAndUpdate(args._id,{
                observaciones:args. observaciones,
            },{new:true})
            return observacionAgregada;
        },
    },
};

export {resolversAvance};