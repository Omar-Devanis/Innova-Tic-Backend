import { proyectModel } from './proyecto.js';


const resolverProyecto ={
    Query:{

        Proyectos:async(parent,args) =>{
            const proyecto = await proyectModel.find().populate("lider").populate("avances").populate("inscripcion"); // el populate se usa con en una relacion one to many en la parte del many.
            return proyecto;
        }
    },
    Mutation:{

        crearProyecto: async(parent,args) =>{
        const proyectoCreado = await proyectModel.create({
            nombre:args.nombre,
            presupuesto:args.presupuesto,
            fechaInicio:args.fechaInicio,
            fechaFin:args.fechaFin,
            estado:args.estado,
            fase:args.fase,
            lider:args.lider,
            objetivo:args.objetivo
        });
        return proyectoCreado; }
        

        }
    }


export {resolverProyecto};