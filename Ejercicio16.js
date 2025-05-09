function capitalizar(texto){
    if (texto.length != 0) {
        let resultado = texto[0].toUpperCase() + texto.substring(1);
        return resultado
    } else {
        let resultado = '""';
        return resultado
    }
}
console.log(capitalizar("pedro"))
console.log(capitalizar("hola mundo"))
console.log(capitalizar(""))