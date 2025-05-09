function contarRango(num1, num2){
    let contador = 0;
    for (let i = 0 ; num1 < num2;i++){
        num1++
        contador = i
        
    }
    return contador
}
console.log(contarRango(1, 9))
console.log(contarRango(1332, 8743))
console.log(contarRango(5, 6))