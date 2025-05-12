function distancia(texto1, texto2){
    let arreglo1 = texto1.split("");
    let arreglo2 = texto2.split("");
    let contador = arreglo2.length - arreglo1.length;
    for (let i = 0; i < arreglo1.length; i++) {
      if (arreglo1[i] !== arreglo2[i]) {
        contador++;
      }
    }
    return contador
}
console.log(distancia("hola", "hola"))
console.log(distancia("sol", "tol"))
console.log(distancia("carro", "correr"))