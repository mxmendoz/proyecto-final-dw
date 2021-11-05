const Producto = require('../models/Producto');

//Mostrando Datos
module.exports.mostrar2 = (req, res) =>{
    Producto.find({}, (error, productos) =>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando la lista de productos'
            });
        };
        return res.render('producto', {productos: productos});
    });
};

//Creando Información
module.exports.crear2 = (req, res) =>{
    const producto = new Producto({
        codigo: req.body.codigo,
        producto: req.body.producto, 
        marca: req.body.marca,
        precio_compra: req.body.precio_compra,
        precio_venta: req.body.precio_venta,
        tamanio: req.body.tamanio,
        tipo_venta: req.body.tipo_venta,
        existencia: req.body.existencia
    });
    producto.save(function(error, producto){
        if(error){
           
        return res.status(500).json({
             message: 'Error al crear el pruducto'
           });
        };
        res.redirect('/producto');
    });
};

//Editar Información
module.exports.editar2 = (req, res) =>{
    const id = req.body.id_editar;
    const codigo = req.body.codigo_editar;
    const producto = req.body.producto_editar;
    const marca = req.body.marca_editar;
    const precio_compra = req.body.precio_compra_editar;
    const precio_venta = req.body.precio_venta_editar;
    const tamanio = req.body.tamanio_editar;
    const tipo_venta = req.body.tipo_venta_editar;
    const existencia = req.body.existencia_editar;
    Producto.findByIdAndUpdate(id, {codigo, producto, marca, precio_compra, precio_venta, tamanio, tipo_venta, existencia}, (error, producto)=>{
        if(error){
            return res.status(500).json({
                message: 'Error al actualizar el producto'
            });
        };
        res.redirect('/producto');
    });
};

//Eliminar Información
module.exports.borrar2 = (req, res) =>{
    const id = req.params.id;
    Producto.findByIdAndRemove(id, (error, producto) =>{
        if(error){
            return res.status(500).json({
                message: 'Error al eliminar el producto'
            });
        };
        res.redirect('/producto');
    });
};