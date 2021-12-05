import {gql} from 'apollo-server-express';
import {tipoProyecto} from '../models/proyecto/tipo.js'
import {tipoUsuario} from '../models/usuario/tipo.js'
import {tipoAvance} from '../models/avance/tipo.js'
import {tipoInscripcion} from '../models/inscripcion/tipo.js';


const tipoGlobal = gql`
    scalar Date    
`;

export const tipos = [tipoGlobal,tipoUsuario,tipoProyecto,tipoAvance,tipoInscripcion];