const modalProducto = new bootstrap.Modal(document.getElementById('modalProducto'));

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e => {
        if(e.target.closest(selector)){
            handler(e)
        };
    });
};

on(document, 'click', '.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode;
    id_editar.value = fila.children[0].innerHTML;
    codigo_editar.value = fila.children[1].innerHTML;
    producto_editar.value = fila.children[2].innerHTML;
    marca_editar.value = fila.children[3].innerHTML;
    precio_compra_editar.value = fila.children[4].innerHTML;
    precio_venta_editar.value = fila.children[5].innerHTML;
    tamanio_editar.value = fila.children[6].innerHTML;
    tipo_venta_editar.value = fila.children[7].innerHTML;
    existencia_editar.value = fila.children[8].innerHTML;
    modalProducto.show();
});