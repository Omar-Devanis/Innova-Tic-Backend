import {gql} from 'apollo-server-express';

const tipoUsuario = gql`

    enum Enum_rolUser{
        ESTUDIANTE
        LIDER
        ADMINISTRADOR
    }

    enum Enum_estadoUser{
        PENDIENTE
        AUTORIZADO
        N0_AUTORIZADO
    }


    type Usuario{
        _id:ID!
        nombre:String!
        apellido:String!
        identificacion:String!
        correo:String!
        rol:Enum_rolUser!
        estado:Enum_estadoUser
    }


    type Query{
        Usuarios:[Usuario],
        Usuario(_id:String!):Usuario
    }

    type Mutation{
        crearUsuario(
        nombre:String!
        apellido:String!
        identificacion:String!
        correo:String!
        rol:Enum_rolUser!
        estado:Enum_estadoUser
        ):Usuario,

        eliminarUsuario(_id:ID correo:String):Usuario,

        editarUsuario(
            _id:String!
            nombre:String
            apellido:String
            identificacion:String
            correo:String
            rol:Enum_rolUser
            estado:Enum_estadoUser
        ):Usuario,
        
    }

`;

export {tipoUsuario}