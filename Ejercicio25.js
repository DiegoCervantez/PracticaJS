function terminanConS(palabras){
    let resultado = [];
  const filtro = palabras.filter((palabra) => {
    if (palabra.endsWith("s") || palabra.endsWith("S")) {
      resultado.push(palabra);
    }
  });
  return resultado
}
console.log(terminanConS(["pruebas", "arroz", "árbol", "tokens"]))
console.log(terminanConS(["beta", "delta", "gama"]))
console.log(terminanConS([]))