// Crie um array chamado frutas com 10 elementos: "maçã", "banana", "laranja", "uva", "melancia", "abacaxi", "manga", "morango", "kiwi", "pera". Crie um algoritmo que receba uma fruta e informe se ela pertence ao array frutas. 


const prompt = require(`prompt-sync`)();

const frutas = ['maçã', 'banana', 'laranja', 'uva', 'melancia', 'abacaxi', 'manga', 'morango', 'kiwi', 'pera'];
let lista = 0;
let fruta = prompt(`Informe a fruta: `).toLowerCase();

for (let i = 0; i<frutas.length; i++){
    if (frutas[i] === fruta) {
        lista++;
    } 
} if (lista === 1) {
    console.log(`A fruta ${fruta} está na lista!`);
} else{
    console.log(`A fruta ${fruta} não está na lista!`);
}