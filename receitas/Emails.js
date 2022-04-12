const texto = `
Os e-mails dos convidadeos são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - joao@empresa.info.br
    - maraia_silva@registro.br
    - rafa.sampaia@yahoo.com
    - fulano+de+tal@escola.ninja.br
`

console.log(texto.match(/\S+@\w+\.\w{2,6}(\.\w{2})?/g))