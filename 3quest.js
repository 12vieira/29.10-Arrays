// Crie um array valores com os números [2, 4, 6, 8, 10]. Multiplique cada elemento por 2 e exiba o novo array no console. 



const numeros = [2,4,6,8,10];
let mul = 1;
for (let i = 0; i<numeros.length; i++){

    mul*=numeros[i];
} console.log(`A multiplicação é: ${mul}`);