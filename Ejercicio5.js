function likes(numero){
    let cifras = numero.toString();
    if (cifras.length < 4){
        return cifras
    } else if (cifras.length == 4) {
        return cifras.substring(0, 1) + "k"
    } else if (cifras.length <= 5) {
        return cifras.substring(0, 2) + "k"
    } else if (cifras.length <= 6) {
        return cifras.substring(0, 3) + "k"
    } else if (cifras.length == 7) {
        return cifras.substring(0, 1) + "M"
    } else if (cifras.length >= 8) {
        return cifras.substring(0, 2) + "M"
    }
}
console.log(likes(983))
console.log(likes(1900))
console.log(likes(54000))
console.log(likes(120800))
console.log(likes(25222444))