
function palabrasANumeros(palabras){
    const mapa = {
        "cero" : 0,
        "uno" : 1,
        "dos" : 2,
        "tres" : 3,
        "cuatro" : 4,
        "cinco" : 5,
        "seis" : 6,
        "siete" : 7,
        "ocho" : 8,
        "nueve" : 9, 
    }
    return palabras.map(palabra => mapa.hasOwnProperty(palabra) ? mapa[palabra] : -1)
}
console.log(palabrasANumeros(["cero", "uno", "dos", "tres", "what?", "cuatro"]))
console.log(palabrasANumeros(["cinco", "seis", "siete", "ocho", "nueve"]))