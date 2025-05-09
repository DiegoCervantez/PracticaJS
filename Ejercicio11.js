function sumarArreglo(numeros){
    let suma = 0;
    numeros.forEach((num) => {
        suma += num;
    });
    return suma
}
console.log(sumarArreglo([3, 1, 2]))
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
console.log(sumarArreglo([]))