function numerosAPalabras(numeros){
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) {
            numeros[i] = "cero";
        }
        if (numeros[i] === 1) {
            numeros[i] = "uno";
        }
        if (numeros[i] === 2) {
            numeros[i] = "dos";
        }
        if (numeros[i] === 3) {
            numeros[i] = "tres";
        }
        if (numeros[i] === 4) {
            numeros[i] = "cuatro";
        }
        if (numeros[i] === 5) {
            numeros[i] = "cinco";
        }
        if (numeros[i] === 6) {
            numeros[i] = "seis";
        }
        if (numeros[i] === 7) {
            numeros[i] = "siete";
        }
        if (numeros[i] === 8) {
            numeros[i] = "ocho";
        }
        if (numeros[i] === 9) {
            numeros[i] = "nueve";
        }
      }
    return numeros
}
console.log(numerosAPalabras([0, 1, 2, 3, 4]))
console.log(numerosAPalabras([5, 6, 7, 8, 9]))