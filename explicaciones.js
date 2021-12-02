import conectarDB from "./db/db.js";
import {userModel} from "./models/user.js";
import { proyectModel } from "./models/proyect.js";
import { objetivoModel } from "./models/objetivo.js";
import { inscripcionModel } from "./models/inscripcion.js";

const main = async ()=>{
    await conectarDB();

    await inscripcionModel.find({proyecto:'619d603669efe87e36ab2cf5'})
    .then(u=>{
        console.log('Usuarios inscritos al proyecto',u)
    })
    .catch(e=>{
        console.error('Usuarios inscritos al proyecto',e)
    })
}
main();


//CRUD USER

/* await userModel.create({
        correo:'Coleg.i.oMx@frcom',
        identificacion:'9883996332',
        nombre:'sama',
        apellido:"Robes",
        rol:Enum_rol.lider
    })
    .then(u =>{
        console.log('creacion usuario exitosa ',u)
    })
    .catch(e => {
        console.error('Creacion usuario fallida', e)
    }) */

    //update
    /* await userModel.findOneAndUpdate(
        {nombre:"Eugene"},
        {
        estado:Enum_estado_usuario.pendiente
    })
    .then(u =>{
        console.log("usuario actualizado", u)
    })
    .catch(e => {
        console.error("El usuario no se puedo modificar", e);
    }) */

    //CRUD proyects

    /* await proyectModel.create({
        nombre:'leyes de la termodinamica',
        presupuesto:50,
        fechaInicio:new Date('2021/11/15'),
        fechaFin:new Date('2021/11/21'),
        lider:"6199eb8245f45496a99832a5"
    })


    const proyecto = await proyectModel.find({nombre:"leyes de la termodinamica"}).populate('lider');//con populate nos trae la informacion del lider.

    console.log(proyecto)
     */