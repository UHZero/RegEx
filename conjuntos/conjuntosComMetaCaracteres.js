const texto = '.$+*?-'

console.log(texto.match(/[+.?*$]/g)) //dentro de um conjunto o ponto se comporta como um literal e não como um metacaractere
console.log(texto.match(/[+.?*$]./g)) // ponto fora do conjunto traz pares nesse caso.
console.log(texto.match(/[$-?]/g))  //isso é um intervalo (range) ATENÇÃO: o menos - se comporta como metacaractere no conjunto

//NÃO é um intervalo(range)...
console.log(texto.match(/[$\-?]/g)) //escape seguido de menos - se comporta como um literal
console.log(texto.match(/[-?]/g)) // se colocar o menos - na ordem em 1° não precisa de escape para ser um literal

// pode precisar de escape dentro do conjunto: - [] ^