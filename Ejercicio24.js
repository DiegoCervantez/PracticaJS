function empiezanConA(palabras){
    let resultado = [];
  const filtro = palabras.filter((palabra) => {
    if (palabra[0] == "a" || palabra[0] == "A") {
      resultado.push(palabra);
    }
  });
  return resultado
}
console.log(empiezanConA(["beta", "alfa", "Arbol", "gama"]))
console.log(empiezanConA(["beta", "delta", "gama"]))
console.log(empiezanConA([]))