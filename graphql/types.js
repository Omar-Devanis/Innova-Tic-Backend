import {gql} from 'apollo-server-express';

const typeDefs = gql`
../models/usuario/types.js
    scalar Date

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

    enum Enum_estadoProyecto{
        ACTIVO
        INACTIVO 
    }

    enum Enum_faseProyecto{
        INICIADO
        EN_DESARROLLO
        TERMINADO
        NULO
    }

    enum Enum_tipoObjetivos{
        GENERAL 
        ESPECIFICO
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

    type Objetivo{
        _id:ID!
        descripcion:String!
        tipo:Enum_tipoObjetivos!
    }

    input crearObjetivo{
        descripcion:String!
        tipo:Enum_tipoObjetivos!
    }

    type Proyecto{
        _id:ID!
        nombre:String!
        presupuesto:Float!
        fechaInicio: Date!
        fechaFin:Date
        estado: Enum_estadoProyecto!
        fase:Enum_faseProyecto!
        lider: Usuario!
        objetivo:[Objetivo]
    }

    type Query{
        Usuarios:[Usuario],
        Usuario(_id:String!):Usuario
        Proyectos:[Proyecto]
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
        
        crearProyecto(
            nombre:String!
            presupuesto:Float!
            fechaInicio: Date!
            fechaFin:Date
            estado: Enum_estadoProyecto!
            fase:Enum_faseProyecto!
            lider: String!
            objetivo:[crearObjetivo]
        ):Proyecto
    }

`;

export {typeDefs}