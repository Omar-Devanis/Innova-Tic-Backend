import { UserModel } from "./usuario.js";

const resolversUsuario = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
             
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuarioe = await UserModel.findOne({_d: args._id});
            return usuarioe;
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
    }
};

export {resolversUsuario};