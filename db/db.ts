import {connect} from "mongoose";

const conectarBD = async () => {
    return await connect(
        "mongodb+srv://admin:AdminProyectos@cluster0.vamd2.mongodb.net/InnovaDB?retryWrites=true&w=majority"
    )
    .then(() => {
        console.log("Conexion exitosa")
    })
    .catch((e) => {
        console.error("Error conectando a la BD", e)
    })
};

export default conectarBD;
