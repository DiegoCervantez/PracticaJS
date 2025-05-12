function duplicar (num){
    let resultado = [];
    for (let i = 0; i < num.length; i++) {
        resultado.push(num[i]*2);
    }
    return resultado
}
console.log(duplicar([1, 2, 3]))
console.log(duplicar([]))