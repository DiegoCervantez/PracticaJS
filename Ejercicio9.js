function numeroDeAes(palabra){
    let numAs = 0;
    palabra1 = palabra.split("");
    palabra1.forEach((letra) => {
      if (letra === "a") {
        numAs++;
      }
    });
    return numAs
  }
console.log(numeroDeAes("abracadabra"))
console.log(numeroDeAes("etinol"))
console.log(numeroDeAes(""))