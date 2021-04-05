"use strict";
var formulario = document.getElementById("formulario");
var check = document.getElementById("check");
var rut = document.getElementById("rut");
var mensaje = document.getElementById("mensaje");
var i;
function verificarCheck(checko) {
    console.log(check);
    if (check) {
        console.log("fruta");
        return true;
    }
    console.log("hola");
    return false;
}
formulario.addEventListener("submit", function (evento) {
    formulario.style.display = "none";
    mensaje.style.display = "block";
    mensaje.innerHTML = "Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
    verificarCheck(check);
    evento.preventDefault();
});
/*formulario.addEventListener("submit",function(evento:any){
    if(verificarCheck(check)){
        formulario.style.display="none";
        mensaje.style.display="block";
        mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
        evento.preventDefault();
    }
    verificarRut(rut);
 });*/
