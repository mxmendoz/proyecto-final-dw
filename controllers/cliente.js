const Cliente = require('../models/Cliente');

//Mostrando Datos
module.exports.mostrar3 = (req, res) =>{
    Cliente.find({}, (error, clientes) =>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando la lista de clientes'
            });
        };
        return res.render('cliente', {clientes: clientes});
    });
};

//Creando Información
module.exports.crear3 = (req, res) =>{
    const cliente = new Cliente({
        nit: req.body.nit,
        nombre: req.body.nombre, 
        apellido: req.body.apellido,
        telefono: req.body.telefono,
        correo: req.body.correo,
        direccion: req.body.direccion
    });
    cliente.save(function(error, cliente){
        if(error){
           
        return res.status(500).json({
             message: 'Error al crear el cliente'
           });
        };
        res.redirect('/cliente');
    });
};

//Editar Información
module.exports.editar3 = (req, res) =>{
    const id = req.body.id_editar;
    const nit = req.body.nit_editar;
    const nombre = req.body.nombre_editar;
    const apellido = req.body.apellido_editar;
    const telefono = req.body.telefono_editar;
    const correo = req.body.correo_editar;
    const direccion = req.body.direccion_editar;
    Cliente.findByIdAndUpdate(id, {nit, nombre, apellido, telefono, correo, direccion}, (error, cliente)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar el cliente'
            });
        };
        res.redirect('/cliente');
    });
};

//Eliminar Información
module.exports.borrar3 = (req, res) =>{
    const id = req.params.id;
    Cliente.findByIdAndRemove(id, (error, cliente) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar el cliente'
            });
        };
        res.redirect('/cliente');
    });
};