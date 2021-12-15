import {gql} from 'apollo-server-express';

const tipoProyecto = gql`

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
        avances:[Avance]
        inscripcion:[Inscripcion]
    }

    type Query{
        Proyectos:[Proyecto]
    }

    type Mutation{
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

        editarProyecto
    }

`;

export {tipoProyecto}