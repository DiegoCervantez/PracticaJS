function fizzBuzz(numero){
    let multiplo3 = numero % 3 === 0;
    let multiplo5 = numero % 5 === 0;
    if (multiplo3 && multiplo5) {
      return "fizzBuzz"
    } else if(multiplo3){
        return "fizz"
    } else if (multiplo5){
        return "buzz"
    } else{
        return numero
    }
}
console.log(fizzBuzz(6));
console.log(fizzBuzz(20));
console.log(fizzBuzz(30));
console.log(fizzBuzz(8));