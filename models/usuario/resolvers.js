import {userModel} from './usuario.js';

const resolverUsuario ={
    Query:{
        //buscar todos los usuarios de la colleccion users en mongo
        Usuarios:async (parent,args)=>{
            const user = await userModel.find();
            return user;
        },
        //buscar un solo usuario por su _id
        Usuario:async ( parent, args) =>{
            const userOne = await userModel.findOne({_id:args._id})
            return userOne;
        }
    },
    Mutation:{
        //las mutaciones hacen cambios a la DB
        crearUsuario: async(parent,args) =>{
            const userCreado = await userModel.create({
                nombre:args.nombre,
                apellido:args.apellido,
                identificacion:args.identificacion,
                correo:args.correo,
                rol:args.rol
            })
            return userCreado;
        },
        eliminarUsuario:async(parent,args) =>{
            //eliminar un usuario mediante el id o el correo.
            if(Object.keys(args).includes("_id")){
                const usuarioEliminado = await userModel.findOneAndDelete({_id:args._id});
                return usuarioEliminado;    
            }
            else if(Object.keys(args).includes("correo")){    
                const usuarioEliminado = await userModel.findOneAndDelete({correo:args.correo});
                return usuarioEliminado;
            }
        },
        editarUsuario: async(parent,args) =>{
                const editarU = await userModel.findOneAndUpdate(
                    args._id,{
                        nombre:args.nombre,
                        apellido:args.apellido,
                        identificacion:args.identificacion,
                        correo:args.correo,
                        rol:args.rol,
                        estado:args.estado
                    }
                )
                return editarU; 
            }

        }
    }


export {resolverUsuario};