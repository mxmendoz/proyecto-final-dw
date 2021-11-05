const menu = document.querySelector('.menu');
const submenu = document.querySelector('.menu__navegacion');

menu.addEventListener('click', ()=>{
    submenu.classList.toggle("spread")
})

window.addEventListener('click', e=>{
    if(submenu.classList.contains('spread') && e.target != submenu && e.target !=menu){
        submenu.classList.toggle("spread");
    }
})