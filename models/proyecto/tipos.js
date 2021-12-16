import { gql } from "apollo-server-express";

const tiposProyecto = gql`

  scalar Date

  type Objetivo{ 
      _id: ID!
      descripcion: String!
      tipo: Enum_TipoObjetivo!
  }

  input crearObjetivo{
      descripcion: String!
      tipo: Enum_TipoObjetivo!
  }

  type Proyecto {
      _id: ID!
      nombre: String!
      presupuesto: Float!
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
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      lider: String!
      ):Proyecto

      editarProyecto(
        _id:String!
        nombre: String
        presupuesto: Float
        objetivos: [crearObjetivo]
        estado: Enum_EstadoProyecto
        fase: Enum_FaseProyecto
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