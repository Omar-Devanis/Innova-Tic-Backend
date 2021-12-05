import {gql} from 'apollo-server-express';

const tipoAvance = gql`

    type Avance{
        _id: ID!
        fecha: Date!
        descripcion: String!
        observaciones: [String]
        proyecto: Proyecto!
        creadoPor: Usuario!        
    }

    type Query{
        Avances:[Avance]
        filtrarAvance(proyecto:String):[Avance]
    }

    type Mutation{
        crearAvance(
            fecha: Date!
            descripcion: String!
            proyecto: String!
            creadoPor: String! 
        ):Avance

       
    }

`;

export {tipoAvance};