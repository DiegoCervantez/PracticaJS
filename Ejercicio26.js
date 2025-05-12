function imprimirMatriz(matriz){
    let unir = matriz.join(",").split(",");
    unir.forEach((num) => console.log(num));
}
console.log(imprimirMatriz([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ]))
  