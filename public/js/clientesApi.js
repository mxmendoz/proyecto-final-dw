const modalCliente = new bootstrap.Modal(document.getElementById('modalCliente'));

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
    nit_editar.value = fila.children[1].innerHTML;
    nombre_editar.value = fila.children[2].innerHTML;
    apellido_editar.value = fila.children[3].innerHTML;
    telefono_editar.value = fila.children[4].innerHTML;
    correo_editar.value = fila.children[5].innerHTML;
    direccion_editar.value = fila.children[6].innerHTML;
    modalCliente.show();
});