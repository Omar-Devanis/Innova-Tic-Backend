import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/tipos.js";
import { tipoProyecto } from "../models/proyecto/tipos.js";
import { tiposUsuarios } from "../models/usuario/tipos.js";
import { tiposAvance } from "../models/avance/tipos.js";

const tiposGlobales = gql`
  scalar Date
  
`;

export const tipos =  [tiposGlobales, tiposUsuarios, tipoProyecto, tiposEnums, tiposAvance];