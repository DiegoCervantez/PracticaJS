function numAsteriscos(caracteres){
    let asteriscos = 0;
    for (let i = 0; i < caracteres.length; i++) {
      if (caracteres[i] === '*') {
        asteriscos = parseInt(asteriscos + 1)
      }
    }
    return asteriscos
}
console.log(numAsteriscos(['', '*', '', '*']))
console.log(numAsteriscos(['*', '*', '*']))
console.log(numAsteriscos([]))