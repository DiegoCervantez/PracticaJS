const contrasena = "2Fj(jjbFsuj";
const contrasena2 = "eoZiugBf&g9";
function contrasenaValida(texto) {
    if(texto == contrasena || texto == contrasena2) {
        return true;
    }else{
        return false;
    }
}
console.log(contrasenaValida("2Fj(jjbFsuj")) 
console.log(contrasenaValida("eoZiugBf&g9")) 
console.log(contrasenaValida("hola")) 
console.log(contrasenaValida(""))