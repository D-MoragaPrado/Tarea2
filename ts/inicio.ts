let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensaje");


function limpiarDatos(){
    formulario.reset();
}

formulario.addEventListener("submit",function(evento:any){
    formulario.style.display="none";
    mensaje.style.display="block";
    evento.preventDefault();

 });



