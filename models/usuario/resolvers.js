import { UserModel } from "./usuario.js";

const resolversUsuario = {

    Query: {
        Usuarios: async (parent, args) => {
            const usuarios = await UserModel.find();
             
            return usuarios;
        },
        Usuario: async (parent, args) => {
            const usuarioe = await UserModel.findOne({_id: args._id});
            return usuarioe;
        },
        listaEstudiante:async(parent,args) =>{
            const estudiantes = await UserModel.find({rol:"ESTUDIANTE"})
            return estudiantes
        }
       
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
            }, { new: true });
            return usuarioEditado;
        },
        eliminarUsuario: async (parent, args) => {
            const usuarioEliminado = await UserModel.findOneAndDelete({ _id: args._id });
            return usuarioEliminado;
        },

        aceptarUsuario: async (parent,args) =>{
            const usuarioAceptado = await UserModel.findByIdAndUpdate(args._id,{
                estado:args.estado
            },{new:true})
            return usuarioAceptado;
        },

        aceptarEstudiantes: async(parent,args) =>{
            const estudianteAceptado = await UserModel.findByIdAndUpdate(
                args._id,{
                    estado:args.estado
                },{new:true}
            )
            return estudianteAceptado;
        }

        
    
    }
};

export {resolversUsuario};