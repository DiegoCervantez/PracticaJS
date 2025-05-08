function bmi(peso, altura){
    let altura2 = altura * altura
    let imc = peso / altura2
    if (imc < 18.5){
        return "Bajo de peso"
    } else if (imc >= 18.5 && imc < 24.9) {
        return "Normal"
    } else if (imc >= 24.9 && imc < 29.9) {
        return "Sobrepeso"
    } else if (imc >= 29.9) {
        return "Obeso"
    }
}
console.log(bmi(65, 1.8))
console.log(bmi(72, 1.6))
console.log(bmi(52, 1.75))
console.log(bmi(135, 1.7))