function posiciones(numeros){
    let posicionPares = []
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            posicionPares.push(i);
        }
    }
    return posicionPares
}
console.log(posiciones([1, 2, 3, 4, 5, 6]))
console.log(posiciones([]))