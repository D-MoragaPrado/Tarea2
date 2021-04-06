"use strict";
var formulario = document.getElementById("formulario");
var mensaje = document.getElementById("mensaje");
var advertencia = document.getElementById("advertencia");
var check1 = document.getElementById("check1");
var check2 = document.getElementById("check2");
var check3 = document.getElementById("check3");
var check4 = document.getElementById("check4");
var check5 = document.getElementById("check5");
var check6 = document.getElementById("check6");
function limpiarDatos() {
    formulario.reset();
}
function revisarCheckBox() {
    if (check1.checked == true || check2.checked == true || check3.checked == true || check4.checked == true || check5.checked == true || check6.checked == true) {
        return true;
    }
    else {
        advertencia.style.display = "block";
        check1.focus();
        return false;
    }
}
formulario.addEventListener("submit", function (evento) {
    if (revisarCheckBox()) {
        formulario.style.display = "none";
        mensaje.style.display = "block";
        evento.preventDefault();
    }
});
