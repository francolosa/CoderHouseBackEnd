import mongoose from 'mongoose';

const usuariosCollection = 'usuarios';

const UsuarioSchema = new mongoose.Schema({
    nombre: {type: String, require: true, max: 100},
    apellido: {type: String, require: true, max: 100},
    email: {type: String, require: true, max: 100},
    usuario: {type: String, require: true, max: 100},
    password: {type: String, require: true, max: 100},
})

export const Usuario = mongoose.model(usuariosCollection, UsuarioSchema);
