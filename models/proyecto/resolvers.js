import { ProyectosModel } from "./proyecto.js";

const resolversProyecto = {

    Query: {
        Proyectos: async (parent, args) => {
            const proyectos = await ProyectosModel.find().populate("avances").populate("inscripciones").populate("lider");
            return proyectos;
        },
        proyectosLiderados: async (parent, args) =>{
            const liderProyecto = await ProyectosModel.find({lider:args.lider}).populate("lider")

            return liderProyecto;
        },

        proyectoEspecifico:async (parent, args) =>{
            const liderProyecto = await ProyectosModel.findOne({_id:args._id}).populate("objetivos").populate("avances").populate("lider")

            return liderProyecto;
        },
    },
    Mutation: {
        crearProyecto: async (parent, args) => {
            const proyectoCreado = await ProyectosModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                lider: args.lider,
            });
            return proyectoCreado;
        },

        editarProyecto: async( parent,args) =>{
            const proyectoEditado = await ProyectosModel.findByIdAndUpdate(args._id,{nombre:args.nombre,
            presupuesto:args.presupuesto,
            objetivos:[args.objetivos],
            estado:args.estado,
            fase:args.fase
        },{new:true})

        return proyectoEditado;
        },

        actualizarProyecto: async( parent,args) =>{
            const proyectoActualizado = await ProyectosModel.findByIdAndUpdate(args._id,{
            nombre:args.nombre,
            presupuesto: args.presupuesto,
        },{new:true})

        return proyectoActualizado;
        },

        editEstadoProyecto: async(parent,args) =>{
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