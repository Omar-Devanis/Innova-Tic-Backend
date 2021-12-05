import {gql} from 'apollo-server-express';

const tipoInscripcion = gql`

    enum Enum_estadoInscripcion{
        ACEPTADO 
        RECHAZADO 
        PENDIENTE 
    }

    type Inscripcion{
        _id:ID!
        proyecto:Proyecto!
        estudiante:Usuario!
        fechaIngreso: Date
        fechaEgreso: Date
        estado:Enum_estadoInscripcion
    }

    type Query{
        Inscripciones:[Inscripcion]
    }

    type Mutation{
        crearInscripcion(
            proyecto: String!
            estudiante: String!
        ):Inscripcion

        respuestaInscripcion(_id:String!):Inscripcion
    }

`;

export {tipoInscripcion};