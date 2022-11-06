const Oyente = require("../models/oyente.model")

let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let oyente = new Oyente({
        username: req.body.username,
        contrasena: req.body.contrasena,
        nombre_oyente: req.body.nombre_oyente,
        apellido_oyente: req.body.apellido_oyente,
        email_oyente: req.body.email_oyente,
        pais_oyente: req.body.pais_oyente
    })

    oyente.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar al oyente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El oyente se guardó correctamente"
        res.json(response)
    })
}

exports.find = function(req,res){
    Oyente.find(function(err, oyentes){
        res.json(oyentes)
    })
}

exports.findOne = function(req,res){
    Oyente.findOne({_id: req.params.id},function(err, oyente){
        res.json(oyente)
    })
}

exports.update = function(req,res){
    let oyente = {
        username: req.body.username,
        contrasena: req.body.contrasena,
        nombre_oyente: req.body.nombre_oyente,
        apellido_oyente: req.body.apellido_oyente,
        email_oyente: req.body.email_oyente,
        pais_oyente: req.body.pais_oyente
    }

    Oyente.findByIdAndUpdate(req.params.id, {$set: oyente}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al modificar el oyente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El oyente se modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Oyente.findByIdAndRemove({_id: req.params.id}, function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al eliminar el oyente"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El oyente fue eliminado correctamente"
        res.json(response)
    })
}