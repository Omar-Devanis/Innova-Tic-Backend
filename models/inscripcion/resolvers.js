import { InscripcionModel } from "./inscripcion.js";

const resolversInscripciones = {

    Query: {
        Inscripciones: async (parent, args) => {
            const inscripciones = await InscripcionModel.find();
            return inscripciones;
        },
    },
    Mutation: {
        crearInscripcion: async (parent, args) => {
            inscripcionCreada = await InscripcionModel.create({
                estado: args.estado,
                proyecto: args.proyecto,
                estudiante: args.estudiante,
            });
            return inscripcionCreada;
        },
        aprobarInscripcion: async (parent, args) => {
            inscripcionAprobada = await InscripcionModel.findByIdAndUpdate(args.id, {
                estado: "ACEPTADO",
                fechaIngreso: Date.now(),
            }, { new: true });
            return inscripcionAprobada;
        },
    },
};

export {resolversInscripciones};