import { gql } from "apollo-server-express";
import { tiposEnums } from "../models/enums/tipos";
import { tipoProyecto } from "../models/proyecto/tipos";
import { tiposUsuarios } from "../models/usuario/tipos";
import { tiposAvance } from "../models/avance/tipos";

const tiposGlobales = gql`
  scalar Date
  
`;

export const tipos =  [tiposGlobales, tiposUsuarios, tipoProyecto, tiposEnums, tiposAvance];