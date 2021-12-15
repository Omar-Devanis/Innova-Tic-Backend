import {gql} from 'apollo-server-express';

const tipoObjetivos = gql`

enum Enum_tipoAvance{
    GENERAL
    ESPECIFICO
}

    type Objetivo{
        _id: ID!
        descripcion: String!
        tipo: Enum_tipoAvance!
        proyecto: Proyecto!
        creadoPor: Usuario!        
    }

    type Query{
        Objetivos:[Objetivo]
        filtrarObjetivos(proyecto:String):[Objetivo]
    }

    type Mutation{
        crearObjetivo(
            descripcion: String!
            proyecto: String!
            creadoPor: String! 
        ):Avance

        editarObjetivos(
            _id:String!
            descripcion:String
            tipo: Enum_tipoAvance!
        )

       
    }

`;

export {tipoObjetivos};