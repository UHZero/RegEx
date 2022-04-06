const emailConvidado = `Emails convidados: 
- exAmPle@example.com
- outro3x4mpl3@gmail.com
- exemplo_underline@system.com.br
- exemplo.ponto@forum.com
- exemplo-tracinho@traco.com.br`;
console.log(emailConvidado);

const searchEmail = /[a-z0-9]+?@[a-z]+\.[a-z]+/gi;
const matchEmail =emailConvidado.match(searchEmail);
console.log(matchEmail)
console.log(emailConvidado.match(/\w+\.?\-?\w+@\w+\.\w{3}?.{0,3}/g))