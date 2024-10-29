// Crie um array temperaturas com os temp [23, 19, 25, 21, 20, 18, 22]. Faça um algoritmo que encontre e exiba o menor valor do array. 

const temp = [23,19,25,21,20,8,22, 15, 18,5, 24, 29, 28, 16];

let menor = temp[0];

for (let i = 1; i<temp.length; i++){
    if (temp[i] < menor) {
        menor = temp[i];
    } else {
        menor = menor;
    }
} console.log(`A menor temperatura é: ${menor}`);