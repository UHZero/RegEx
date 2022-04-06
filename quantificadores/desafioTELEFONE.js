const listaTelefonica = `Lista Telefonica:
- (48) 99858-0694
- (22)8888-9999
- 99999-5555
- 3322-7799
- 8399994455`

console.log(listaTelefonica)

const regexLista = /\(?\d{0,2}\)?\s?\d{4,5}-?\d{4}/g;
const matchLista = listaTelefonica.match(regexLista);
console.log(matchLista);