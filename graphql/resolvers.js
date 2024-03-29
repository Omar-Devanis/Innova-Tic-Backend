import { resolversUsuario } from "../models/usuario/resolvers.js";
import { resolversProyecto } from "../models/proyecto/resolvers.js";
import { resolversAvance } from "../models/avance/resolvers.js";
import { resolversInscripciones } from "../models/inscripcion/resolvers.js";
import { resolversObjetivo } from "../models/objetivos/resolvers.js";
import { resolversAutenticacion } from "./auth/resolvers.js";

export const resolvers = [
    resolversProyecto, 
    resolversUsuario, 
    resolversAvance, 
    resolversInscripciones,
    resolversAutenticacion,
    resolversObjetivo
];