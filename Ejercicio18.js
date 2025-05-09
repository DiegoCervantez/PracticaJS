function max(numeros){
    let numMax = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] > numMax) {
            numMax = numeros[i];
        }
    }
    return numMax
}
console.log(max([3, 9, 6]))
console.log(max([67, 35, 54, 26]))
console.log(max([5, 9, 2, 4, 5, 7]))