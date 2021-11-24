import conectarBD from "./db/db";
import UserModel from "./models/user";

const main = async () => {
    await conectarBD()

    await UserModel.create({
        correo:"omar@gmail.com",
        identificacion:"12345",
        nombre:"Omar",
        apellido:"Rodriguez",
    })
    .then((u) =>{
        console.log("Usuario creado", u);
    })
    .catch((e) => {
        console.log("Error creando el usuario", e);
    });
};

main();