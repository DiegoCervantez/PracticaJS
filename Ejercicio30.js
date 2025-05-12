function numAsteriscos(caracteres){
    let arreglo = caracteres.join(",").split(",");
    let asteriscos = 0;
    for (let i = 0; i < arreglo.length; i++) {
        if (arreglo[i] === '*') {
            asteriscos = parseInt(asteriscos + 1)
        }
    }
    return asteriscos
}
console.log(numAsteriscos([
    ['*', '', '*'],
    ['', '*', ''],
    ['*', '', '*']
  ]))