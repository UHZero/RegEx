const texto = '1,2,3,4,5,6,a.b c!d?e[f'

console.log(texto.match(/\D/g))
console.log(texto.match(/[^0-9]/g))
console.log(texto.match(/[^\d!\?\[\s,\.]/g))
console.log(texto.match(/[^\d]/g))

const texto2 = '1: !"#$%&\'()*+,-./ 2: :;<==>?@'

console.log(texto2.match(/[^!-/:-@\s]/g))
//console.log(texto2.match(//g))