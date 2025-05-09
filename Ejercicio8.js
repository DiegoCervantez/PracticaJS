function sumarRango(num1, num2) {
    let acumulador = num1;
    if (num1 != num2) {
      for (let i = 0; num1 < num2; i++) {
        num1++;
        acumulador += num1;
      }
      return acumulador
    }else{
      return 0
    }
}
console.log(sumarRango(0, 10))
console.log(sumarRango(12, 14))
console.log(sumarRango(5, 5))