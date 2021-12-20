import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/tipos.js";
import { tiposProyecto } from "../models/proyecto/tipos.js";
import { tiposUsuarios } from "../models/usuario/tipos.js";
import { tiposAvance } from "../models/avance/tipos.js";
import { tiposInscripcion } from "../models/inscripcion/tipos.js";
import { tiposObjetivos } from "../models/objetivos/tipos.js";
import { tiposAutenticacion } from "./auth/tipos.js";

const tiposGlobales = gql`
  scalar Date
  
`;

export const tipos =  [
  tiposGlobales, 
  tiposUsuarios, 
  tiposProyecto, 
  tiposEnums, 
  tiposAvance, 
  tiposInscripcion,
  tiposAutenticacion,
  tiposObjetivos
];