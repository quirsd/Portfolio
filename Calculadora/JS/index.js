const pantallaValorAnterior = document.getElementById('valorAnterior');
const pantallaValorActual = document.getElementById('valorActual');
const botonesNumeros = document.querySelectorAll('.numero');
const botonesOperadores = document.querySelectorAll('.operador');

const pantalla = new Pantalla(pantallaValorAnterior, pantallaValorActual);

botonesNumeros.forEach(boton => {
    boton.addEventListener('click', () => pantalla.agregarNumero(boton.innerHTML));
});

botonesOperadores.forEach(boton => {
    boton.addEventListener('click', () => pantalla.computar(boton.value))
});