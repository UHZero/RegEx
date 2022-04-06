// . é um coringa, válido para uma posição apenas dentro da sua regex

const texto = '1,2,3,4,5,5,7,8,9,0'

console.log(texto.match(/1.2/g))
console.log(texto.match(/1..2/g)) //o ponto representa apenas um caractere, aqui como se tem apenas o ',' entre 1 e 2 o resultado é null
console.log(texto.match(/1..,/g))

const notas = '8.3, 7.1, 8.8, 10.0'
console.log(notas.match(/8../g))
console.log(notas.match(/.\../g)) //como 10.0 tem dois caracteres ele apresenta apenas o 0.0