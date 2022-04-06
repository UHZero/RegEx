const texto = '0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f'

const regexNove = RegExp('9')
console.log('Métodos da RegExp...')
console.log(regexNove.test(texto)) //retorna true ou false
console.log(regexNove.exec(texto)) //retorna index e entrada/grupo

const regexLetras = /[a-f]/g
console.log('Métodos da string...')
console.log(texto.match(regexLetras)) //retorna os matchs
console.log(texto.search(regexLetras)) //retorna o index (virgula tbm conta)
console.log(texto.replace(regexLetras, 'Aqui')) //substitui os elementos encontrados pela palavra definida
console.log(texto.split(regexLetras)) //tira os elementos do input