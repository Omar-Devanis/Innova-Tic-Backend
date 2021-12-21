import { gql } from "apollo-server-express";

const tiposProyecto = gql`

  scalar Date

  type Proyecto {
      _id: ID!
      nombre: String!
      presupuesto: String!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto
      fase: Enum_FaseProyecto
      lider: Usuario!
      objetivos: [Objetivo]
      avances: [Avance]
      inscripciones: [Inscripcion]
  }

  type Query {

        Proyectos: [Proyecto]

        proyectosLiderados(lider:String!):[Proyecto]
    
        proyectoEspecifico(_id:String!):Proyecto  
        
  }

  type Mutation{
      crearProyecto(
      nombre: String!
      presupuesto: String!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
      ):Proyecto

      editarProyecto(
        _id:String!
        nombre: String
        presupuesto: String
        estado: Enum_EstadoProyecto
        fase: Enum_FaseProyecto
      ):Proyecto

      actualizarProyecto(
        _id:String!
        nombre: String
        presupuesto: String
      ):Proyecto
        
      editEstadoProyecto(
          _id:String!
          estado: Enum_EstadoProyecto
      ):Proyecto

      editFaseProyecto(
          _id:String!
          fase: Enum_FaseProyecto):Proyecto
  }
`;

export { tiposProyecto };