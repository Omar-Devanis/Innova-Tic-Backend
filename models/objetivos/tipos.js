import { gql } from "apollo-server-express";

const tiposObjetivos = gql`
type Objetivo{ 
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
    proyecto: Proyecto!
}

type Query {

    Objetivos: [Objetivo]
    objetivosProyecto(proyecto:String!):[Objetivo]
}

type Mutation{
    crearObjetivo(
    descripcion: String!
    tipo: Enum_TipoObjetivo!
    proyecto: String!
    ):Objetivo
}

`;

export { tiposObjetivos };