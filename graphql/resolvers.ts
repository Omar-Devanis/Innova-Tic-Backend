import { UserModel } from "../models/user";
import { ProyectosModel } from "../models/project";

const resolvers = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
             
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuarioe = await UserModel.findOne({_d: args._id});
            return usuarioe;
        },
        Proyectos: async (parent, args) => {
            const proyectos = await ProyectosModel.find().populate("lider");
            return proyectos;
        },
    },
    Mutation: {
        crearUsuario: async (parent, args) => {
            const usuarioCreado = await UserModel.create({
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                rol: args.rol,
            });

            if (Object.keys(args).includes("estado")) {
                usuarioCreado.estado = args.estado;
            }
            return usuarioCreado;
        },
        editarUsuario: async (parent, args) => {
            const usuarioEditado = await UserModel.findByIdAndUpdate(args._id, {
                nombre: args.nombre,
                apellido: args.apellido,
                identificacion: args.identificacion,
                correo: args.correo,
                estado: args.estado,
                rol: args.rol,
            });
            return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
            return usuarioEliminado;
        },

        crearProyecto: async (parent, args) => {
            const usuarioCreado = await ProyectosModel.create({
                nombre: args.nombre,
                presupuesto: args.presupuesto,
                fechaInicio: args.fechaInicio,
                fechaFin: args.fechaFin,
                estado: args.estado,
                fase: args.fase,
                lider: args.lider,
            });
            return usuarioCreado;
        },
    }
};

export {resolvers};