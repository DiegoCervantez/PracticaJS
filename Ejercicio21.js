function pares(numeros){
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        pares.push(numeros[i]);
      }
    }
    return pares
}
console.log(pares([1, 2, 3, 4, 5, 6]))
console.log(pares([]))