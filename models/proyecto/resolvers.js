import { ProyectosModel } from "./proyecto.js";

const resolversProyecto = {

    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProyectosModel.find().populate("avances").populate("inscripciones").populate("lider");
            return proyectos;
        },
    },
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProyectosModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
                objetivos: args.objetivos,
            });
            return proyectoCreado;
        },

        editEstadoProyecto: async(aprent,args) =>{
            const estadoProyecto = await ProyectosModel.findByIdAndUpdate(args._id,{
                estado:args.estado
            },{new:true});
            return estadoProyecto;
        },

        editFaseProyecto: async(aprent,args) =>{
            const faseProyecto = await ProyectosModel.findByIdAndUpdate(args._id,{
                fase:args.fase
            },{new:true});
            return faseProyecto;
        }
    }
};

export {resolversProyecto};