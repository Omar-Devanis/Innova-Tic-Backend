import mongoose from "mongoose";

const conectarBD = async () => {
    return await mongoose.connect(process.env.DB_URL)
    .then(() => {
        console.log("Conexion exitosa");
    })
    .catch((e) => {
        console.error("Error conectando a la BD", e);
    })
};

export {conectarBD};
