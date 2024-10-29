// Crie um array numeros com os valores [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]. Faça um algoritmo que some todos os elementos e exiba o resultado no console. 


const valores = [1,2,3,4,5,6,7,8,9,10];
let sum = 0;
for (let i = 0; i<10; i++){

    sum+=valores[i];
} console.log(`O somatório é: ${sum}`);