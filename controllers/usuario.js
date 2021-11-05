const Usuario = require('../models/Usuario');

//Mostrando Datos
module.exports.mostrar = (req, res) =>{
    Usuario.find({}, (error, usuarios) =>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando los usuarios'
            });
        };
        return res.render('usuario', {usuarios: usuarios});
    });
};

//Creando Información
module.exports.crear = (req, res) =>{
    const usuario = new Usuario({
        nombre: req.body.nombre, 
        password: req.body.password,
        rol: req.body.rol
    });
    usuario.save(function(error, usuario){
        if(error){
           
        return res.status(500).json({
             message: 'Error al crear el usuario'
           });
        };
        res.redirect('/usuario');
    });
};

//Editar Información
module.exports.editar = (req, res) =>{
    const id = req.body.id_editar;
    const nombre = req.body.nombre_editar;
    const password = req.body.password_editar;
    const rol = req.body.rol_editar;
    Usuario.findByIdAndUpdate(id, {nombre, password, rol}, (error, usuario)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar el usuario'
            });
        };
        res.redirect('/usuario');
    });
};

//Eliminar Información
module.exports.borrar = (req, res) =>{
    const id = req.params.id;
    Usuario.findByIdAndRemove(id, (error, usuario) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar el usuario'
            });
        };
        res.redirect('/usuario');
    });
};