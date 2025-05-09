function sumarArreglo(numeros, num1, num2){
    let suma = 0;
    let rango = num1 >= num2 ? 0 : numeros.slice(num1, num2 + 1);
  for (let i = 0; i < rango.length; i++) {
    suma += rango[i];
    };
    return suma
}
console.log(sumarArreglo([1, 2, 3], 1, 2))
console.log(sumarArreglo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3, 6))
console.log(sumarArreglo([7, 8, 9], 0, 0))