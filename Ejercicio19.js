function min(numeros){
    let numMin = numeros[0];
    for (let i = 1; i < numeros.length; i++) {
        if (numeros[i] < numMin) {
            numMin = numeros[i];
        }
    }
    return numMin
}
console.log(min([3, 9, 6]))
console.log(min([67, 35, 54, 26]))
console.log(min([5, 9, 2, 4, 5, 7]))