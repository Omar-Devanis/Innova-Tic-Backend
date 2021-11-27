import { ProyectosModel } from "./proyecto.js";

const resolversProyecto = {

    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProyectosModel.find().populate("lider");
            return proyectos;
        },
    },
    Mutation: {
        crearProyecto: async (parent, args) => {
            const usuarioCreado = await ProyectosModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos,
            });
            return usuarioCreado;
        },
    }
};

export {resolversProyecto};