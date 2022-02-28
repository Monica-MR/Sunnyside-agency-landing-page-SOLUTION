
const button = document.querySelector('#menu');
cargarEventListener();

function cargarEventListener(){
    button.addEventListener('click', menuHamburguesa);
}

function menuHamburguesa(){

    const navegacion = document.querySelector('#nav-header');

    navegacion.classList.toggle('hidden');
}