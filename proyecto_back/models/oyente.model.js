const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OyenteSchema = new Schema({
    username: {type: String, required: true, max: 100},
    contrasena: {type: String, required: true, max: 100},
    nombre_oyente: {type: String, required: true, max: 100},
    apellido_oyente: {type: String, required: true, max: 100},
    email_oyente: {type: String, required: true, max: 100},
    pais_oyente: {type: String, required: true, max: 100},
});

module.exports = mongoose.model("oyentes", OyenteSchema);