let formulario:any=document.getElementById("formulario");
let check:any=document.getElementById("check")
let rut:any=document.getElementById("rut")
let mensaje:any=document.getElementById("mensaje");
let i:any;

function verificarCheck(checko:any){
    console.log(check);
    if(check){
        console.log("fruta");
        return true
    }
    console.log("hola");
    return false
    
}


formulario.addEventListener("submit",function(evento:any){
    formulario.style.display="none";
    mensaje.style.display="block";
    mensaje.innerHTML="Hemos recibido sus datos, pronto nos estaremos comunicando con usted";
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

