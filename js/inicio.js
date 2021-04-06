"use strict";
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
function limpiarDatos() {
    formulario.reset();
}
formulario.addEventListener("submit", function (evento) {
    formulario.style.display = "none";
    mensaje.style.display = "block";
    evento.preventDefault();
});
