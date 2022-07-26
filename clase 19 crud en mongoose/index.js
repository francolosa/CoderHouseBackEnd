import mongoose from 'mongoose';
import { Usuario } from './models/usuario.js';

CRUD()

async function CRUD() {
    try {
        const URL = 'mongodb://localhost:27017/ecommerce'
         mongoose.connect(URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('Base de datos conectada');

    /*      CREATE      */
    /*
    const usuarioData = {
        nombre: "b",
        apellido: "b",
        email: "b",
        password: "b"
    }
    
    const usuarioNuevo = new Usuario(usuarioData);
    let response = await usuarioNuevo.save()
    console.log(response);
    */
    //--------------------------

    /*      READ        */
    /*
    const response = await Usuario.find()
    console.log(response);
    */
    //---------------------------
    /*      UPDATE      */
    /*
    let userUpdate = await Usuario.updateOne({nombre: 'a',}, {
        $set: { nombre: "x" } 
    })
    console.log(userUpdate);
    */
    //----------------------------

    /*      DELETE      */
    /*
    let response = await Usuario.deleteOne({ nombre: 'x'})
    console.log(response);
    */
   
    mongoose.disconnect();
    } catch (error) {
        console.log(error);
    }
}