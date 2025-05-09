function capitalizar(texto){
    if (texto.length != 0) {
        let texto2 = [];
        for (letra of texto.split(" ")) {
            letra != ""
            ? texto2.push(letra[0].toUpperCase() + letra.substring(1))
            : "e";
        }
        let resultado = texto2.join(" ");
        return resultado
    } else {
        let resultado = '""';
        return resultado
    }
}
console.log(capitalizar("hola mundo"))
console.log(capitalizar("make it real"))
console.log(capitalizar(""))