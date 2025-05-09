function numeroDeCaracteres(string, caracter){
    let numVeces = 0;
  string2 = string.split("");
  string2.forEach((letra) => {
    if (letra === caracter) {
      numVeces++;
    }
  });
  return numVeces
}
console.log(numeroDeCaracteres("Hola Mundo", "o"))
console.log(numeroDeCaracteres("MMMMM", "m"))
console.log(numeroDeCaracteres("eeee", "e"))