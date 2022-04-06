// g - global
// i - ignore case (ignora letras maiúsculas e minúsculas)

const text = 'Carlos assinou o abaixo-assinado.'
console.log(text.match(/C|ab/))
console.log(text.match(/ab/i))
console.log(text.match(/ab|c/gi))