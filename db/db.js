import mongoose from 'mongoose'

/* Conexion a la base de datos con mongoose */
const conectarDB = async ()=>{
    return await mongoose.connect('mongodb+srv://InnovaTic:feldos13@gestionproyectosinova.np4ma.mongodb.net/GestionProyectosInova?retryWrites=true&w=majority')
    .then(()=>{
        console.log('Conexion Exitosa 🏍')
    }).catch(e => {
        console.error('Error conexion a la DB', e)
    })
}

export default conectarDB;