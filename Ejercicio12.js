function multiplicarArreglo(numeros){
    let multi = 1;
    numeros.forEach((num) => {
        multi *= num;
    });
    return multi
}
console.log(multiplicarArreglo([4, 1, 2, 3]))
console.log(multiplicarArreglo([1, 2, 3, 4, 5, 6, 7, 8]))
console.log(multiplicarArreglo([]))