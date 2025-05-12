function password(texto){
    let letras = texto.toLowerCase().split("");
    if (texto != ""){
        for (let i = 0; i < letras.length; i++) {
            if (letras[i] === "a") {
                letras[i] = "4";
            } else if (letras[i] === "e") {
                letras[i] = "3";
            } else if (letras[i] === "i") {
                letras[i] = "1";
            } else if (letras[i] === "o") {
                letras[i] = "0";
            }
        }
        let texto2 = letras.join("").replace(/ /g, "");
        return texto2
    } else {
        return '""'
    }
    
}
console.log(password("hola"))
console.log(password("esta es una prueba"))
console.log(password(""))