import { InscripcionModel } from "./inscripcion.js";

const resolversInscripciones = {

    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find()
            .populate("estudiante").populate("proyecto");
            return inscripciones;
        },

        inscripcionProyecto: async(parent, args) =>{
            const inscripcionProyecto = await InscripcionModel.find({_id:args._id}).populate("proyecto").populate("estudiante")

            return inscripcionProyecto;
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
                estado: args.estado,
                fechaIngreso: Date.now(),
            }, { new: true });
            return inscripcionAprobada;
        },
    },
};

export {resolversInscripciones};