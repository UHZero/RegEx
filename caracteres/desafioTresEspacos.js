const texto = 'a   b'
console.log(texto.match(/a\s\s\sb/))
console.log(texto.match(/a...b/))
console.log(texto.match(/a   b/))
console.log(texto.match(/.   ./)) //uma alternativa case precise achar apenas os espaços e não os caracteres
console.log(texto.match(/.\s\s\s./)) // alternativa um pouco mais organizada por saber que cada \s significa um espaço

//no futuro...
console.log(texto.match(/a\s+b/)) // o mais significa que se pode ter um ou mais espaçoes em branco entre a e b
console.log(texto.match(/a {3}b/)) // o quantificador {} delimita o numero de espaços que tem entre a e b
console.log(texto.match(/a\s{3}b/))