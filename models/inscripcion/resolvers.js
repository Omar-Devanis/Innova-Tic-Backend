import { InscripcionModel } from "./inscripcion.js";

const resolversInscripciones = {

    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find()
            .populate("estudiante").populate("proyecto");
            return inscripciones;
        },

        inscripcionProyecto: async(parent, args) =>{
            const inscripcionProyecto = await InscripcionModel.find({proyecto:args.proyecto}).populate("proyecto").populate("estudiante")

            return inscripcionProyecto;
        },

        inscripcionEstudiante: async(parent,args) =>{
            const proyectosInscritos = await InscripcionModel.find({estudiante:args.estudiante}).populate({path:"proyecto",populate:({path:"lider"})})

            return proyectosInscritos
        }
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            const inscripcionCreada = await InscripcionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },
        aprobarInscripcion: async (parent, args) => {
            const inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(args.id, {
                estado: "ACEPTADO",
                fechaIngreso: Date.now(),
            }, { new: true });
            return inscripcionAprobada;
        },
    },
};

export {resolversInscripciones};