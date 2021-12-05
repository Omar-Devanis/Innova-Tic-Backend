import {resolverUsuario} from '../models/usuario/resolvers.js'
import {resolverProyecto} from '../models/proyecto/resolvers.js'
import {resolverAvance} from '../models/avance/resolvers.js'
import {resolverInscripcion} from '../models/inscripcion/resolvers.js'

export const resolvers = [resolverUsuario,resolverProyecto,resolverAvance,resolverInscripcion];