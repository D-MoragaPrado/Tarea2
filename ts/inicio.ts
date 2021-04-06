let formulario:any=document.getElementById("formulario");
let mensaje:any=document.getElementById("mensaje");
let advertencia:any=document.getElementById("advertencia");
let check1:any=document.getElementById("check1");
let check2:any=document.getElementById("check2");
let check3:any=document.getElementById("check3");
let check4:any=document.getElementById("check4");
let check5:any=document.getElementById("check5");
let check6:any=document.getElementById("check6");


function limpiarDatos(){
    formulario.reset();
}
function revisarCheckBox(){
    if (check1.checked == true || check2.checked == true || check3.checked == true || check4.checked == true || check5.checked == true || check6.checked == true){
        return true
    }
    else{
        advertencia.style.display="block"
        check1.focus();
        return false
    }
}
formulario.addEventListener("submit",function(evento:any){
    if(revisarCheckBox()){
        formulario.style.display="none";
        mensaje.style.display="block";
        evento.preventDefault();
    }
});