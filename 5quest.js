// Crie um array numeros com os números de 1 a 10. Faça um algoritmo que percorra o array e exiba apenas os números pares. 

const numeros = [1,2,3,4,5,7,9,6,8,10];

for (let i = 0; i<numeros.length; i++){
    if (numeros[i]%2 === 0) {
        console.log(` ${numeros[i]}`)
    }
}