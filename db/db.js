import mongoose from 'mongoose'

/* Conexion a la base de datos con mongoose */
const conectarDB = async ()=>{
    return await mongoose.connect(process.env.DATABASE_URL)
    .then(()=>{
        console.log('Conexion Exitosa 🏍')
    }).catch(e => {
        console.error('Error conexion a la DB', e)
    })
}

export default conectarDB;