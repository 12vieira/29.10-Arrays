// Crie um array cores com 5 elementos: "vermelho", "azul", "verde", "amarelo", "preto". Crie um algoritmo que retorne o índice da cor "verde". 

const cores = ['vermelho','azul','verde','amarelo','preto'];

for (let i = 0; i<cores.length; i++){
    if (cores[i] === 'verde') {
        console.log(`O índice da cor verde é: ${i}`)
    } 
}