// Crie um array idades com os valores [15, 20, 18, 22, 25, 20, 18, 22]. Faça um algoritmo que conte quantas vezes o número 18 aparece no array.


const numeros = [15,20,18,22,25,20,18,22];
let cont = 0;
for (let i = 0; i<numeros.length; i++){
    if (numeros[i]===18) {
        cont++;
    }
} console.log(`O número 18 aparece: ${cont} vezes`);