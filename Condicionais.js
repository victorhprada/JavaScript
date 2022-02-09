console.log(`Trabalhando com condicionais`);

// const salvador = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;


const listaDeDestinos = new Array(`Salvador`, `São Paulo`, `Rio de Janeiro`);

const idadeComprador = 15;
console.log(`Destinos possíveis: `)
console.log(listaDeDestinos);

if(idadeComprador >= 18) {
    console;log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);
}else{
    console.log("Não é maior de idade");
}
console.log(listaDeDestinos);

console.log(listaDeDestinos[1], listaDeDestinos[2]);