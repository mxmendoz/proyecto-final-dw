const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expReg = { 
	usuario: /^[a-zA-Z0-9\_\-\.]{6,10}$/, // Letras, numeros, guiones normales, guiones bajos, de 6 a 10 carácteres.
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras mayúsculas o minúsculas, acepta tílde, diéresis, hasta 40 carácteres.
	password: /^.{8,16}$/, // Letras mayúsculas o minúsculas, cualquier carácter, numeros, de 8 a 16 carácteres.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/, //Letras, puntos, guiones normales, guiones bajos, arroba, dominio, punto, com u otro.
	telefono: /^\d{8}$/ // Solo números, sin espacio de 8 dígitos.
}

const campos = {
    usuario: false,
    nombre: false,
    password: false,
    correo: false,
    telefono: false
}

const validarFormulario = (e) => {
    switch(e.target.name) {
        case "usuario":
            validarDatos(expReg.usuario, e.target, 'usuario');
        break;
        case "nombre":
            validarDatos(expReg.nombre, e.target, 'nombre');
        break;
        case "password":
            validarDatos(expReg.password, e.target, 'password');
            validarPassword();
        break;
        case "password2":
            validarPassword();
        break;
        case "correo":
            validarDatos(expReg.correo, e.target, 'correo');
        break;
        case "telefono":
            validarDatos(expReg.telefono, e.target, 'telefono');
        break;
    }
};

const validarDatos = (dato, input, campo) =>{
    if(dato.test(input.value)){
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo--incorrecto'); 
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo--correcto'); 
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input--error`).classList.remove('formulario__input--error--activo'); campos[campo]=true;
    }else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo--incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo--correcto'); 
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');    
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');  
        document.querySelector(`#grupo__${campo} .formulario__input--error`).classList.add('formulario__input--error--activo');
        campos[campo]=false;
    }
}

const validarPassword = () =>{
    const entradaPassword = document.getElementById('password');
    const entradaPassword2 = document.getElementById('password2');
    if (entradaPassword.value !== entradaPassword2.value) {
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo--incorrecto');
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo--correcto'); 
        document.querySelector(`#grupo__password2 i`).classList.add('fa-times-circle');    
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-check-circle');  
        document.querySelector(`#grupo__password2 .formulario__input--error`).classList.add('formulario__input--error--activo');
        campos['password']=false;
    }else{
        document.getElementById(`grupo__password2`).classList.remove('formulario__grupo--incorrecto');
        document.getElementById(`grupo__password2`).classList.add('formulario__grupo--correcto'); 
        document.querySelector(`#grupo__password2 i`).classList.remove('fa-times-circle');    
        document.querySelector(`#grupo__password2 i`).classList.add('fa-check-circle');  
        document.querySelector(`#grupo__password2 .formulario__input--error`).classList.remove('formulario__input--error--activo'); campos['password']=true;
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const terminos=document.getElementById('terminos');
    if(campos.usuario && campos.nombre && campos.password && campos.correo && campos.telefono && terminos.checked){
        formulario.reset();

        document.getElementById('formulario__mensaje--exito').classList.add('formulario__mensaje--exito--activo');
        setTimeout(() => {
            document.getElementById('formulario__mensaje--exito').classList.remove('formulario__mensaje--exito--activo');
        }, 3000);

        document.querySelectorAll('.formulario__grupo--correcto').forEach((icono) => {
            icono.classList.remove('formulario__grupo--correcto');
        });
    }else{
        document.getElementById('formulario__mensaje').classList.add('formulario__mensaje--activo');
    }
});