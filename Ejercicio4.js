function imprimirArreglo(...elemento) {
    const array = [...elemento];
    array.forEach((e) => {
      console.log(`${e}`);
    });
  }
  console.log(imprimirArreglo(1, "Hola", 2, "Mundo")) 