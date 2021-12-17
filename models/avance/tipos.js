import { gql } from "apollo-server-express";

const tiposAvance = gql`
    type Avance{
        _id: ID!
        fecha: Date!
        descripcion: String!
        observaciones: [String]
        proyecto: Proyecto!
        creadoPor: Usuario!
    }

    type Query{
        Avances: [Avance]
        filtrarAvance(idProyecto: String!): [Avance]
    }

    type Mutation{
        crearAvance(
            fecha: Date
            descripcion: String!
            proyecto: String!
            creadoPor: String!
        ):Avance

        editarAvance(
            _id:ID!
            observaciones: [String]
            descripcion:String
        ): Avance

        agregarObservaciones(
            _id:ID!
            observaciones: [String]
        ): Avance
    }
  
`;

export {tiposAvance};