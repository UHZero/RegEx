// desafio CPF:
const textoCPF = `Os CPFs aprovados são:
- 041.910.249-30
- 629.364.509-00
- 000.000.000-00`;
console.log(textoCPF);

const regexCPF = /[0-9]{3}.[0-9]{3}.[0-9]{3}.[0-9]{2}/g;
matchCPF = textoCPF.match(regexCPF);
console.log(matchCPF)