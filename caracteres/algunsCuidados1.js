const textoUmaLinha = ' ... ' //aspas simples ou duplas

const textoMultiplasLinhas = `
    Linha1
    Linha2
    Linha3
    Linha4
    Linha5
` //delimitado com crase `` (template string)

console.log(textoMultiplasLinhas)

//cuidado com o tab!!!
console.log('	'.match(/\s/g)) //ver configuração da ideS se esta ultilizando espaço ou tab, se retornar '\t' significa que esta ultilizando tab, caso contrario retorna o numero de espaços encontrados, e null se não tiver nenhum espaço!

