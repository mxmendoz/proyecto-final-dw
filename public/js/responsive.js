const imagenes = document.querySelectorAll('.img__galeria');
const imagenLight = document.querySelector('.agregar__imagen');
const contenedorLight = document.querySelector('.imagen__light');
const submenu1 = document.querySelector('.cerrar');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'));
    })
})

contenedorLight.addEventListener('click', (e)=>{
    if(e.target !==imagenLight){
        contenedorLight.classList.toggle('mostrar');
        imagenLight.classList.toggle('mostrar__imagen');
        submenu.style.opacity = '1';
    }
})

const aparecerImagen = (imagen) =>{
    imagenLight.src = imagen;
    contenedorLight.classList.toggle('mostrar');
    imagenLight.classList.toggle('mostrar__imagen');
    submenu.style.opacity = '0';
}
