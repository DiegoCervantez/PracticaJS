function transcribir(cadena){
    const cadena2 = cadena.split("");
    for (let i = 0; i < cadena2.length; i++) {
        if (cadena2[i] === "G") {
            cadena2[i] = "C";
        } else if (cadena2[i] === "C") {
            cadena2[i] = "G";
        } else if (cadena2[i] === "T") {
            cadena2[i] = "A";
        } else if (cadena2[i] === "A") {
            cadena2[i] = "U";
        }
  }
  let resultado = String(cadena2);
  return resultado
}
console.log(transcribir("ACGT"))
console.log(transcribir("ACGTGGTCTTAA"))