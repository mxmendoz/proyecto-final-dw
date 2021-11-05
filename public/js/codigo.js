$(document).ready(function(){
    $(window).scroll(function(){
        // barra de navegación sticky en el script de desplazamiento
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // botón de desplazamiento hacia arriba mostrar - ocultar script
        if(this.scrollY > 500){
            $('.boton__scroll').addClass("show");
        }else{
            $('.boton__scroll').removeClass("show");
        }
    });

    // el guión deslizable
    $('.boton__scroll').click(function(){
        $('html').animate({scrollTop: 0});
        // eliminar el desplazamiento suave en el clic del botón deslizante
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // aplicando nuevamente el desplazamiento suave en los elementos del menú, haga clic en
        $('html').css("scrollBehavior", "smooth");
    });

    // alternar el menú - barra de navegación
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // escribiendo un script de animación de texto
    var typed = new Typed(".typing", {
        strings: ["Freelancer", "Desarrollador Web", "Administrador de Redes", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Freelancer", "Desarrollador Web", "Administrador de Redes", "Blogger"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // guión de carrusel estilo búho
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});