import {Schema, model} from "mongoose";
import {Enum_Rol} from "./enums";

interface User{
    correo: String;
    identificacion: String;
    nombre:String;
    apellido:String;
    rol: Enum_Rol;
}

const userSchema = new Schema<User>({
    correo:{
        type:String,
        required: true,
    },

    identificacion:{
        type:String,
        required: true,
        unique: true
    },

    nombre:{
        type:String,
        required: true,
    },

    apellido:{
        type:String,
        required: true,
    },
    rol:{
        type:String,
        required: true,
        enum: Enum_Rol,
    },
});

const UserModel = model("user", userSchema);

export default UserModel;