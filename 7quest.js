// Crie um array dias com os elementos ["segunda", "terça", "quarta", "quinta", "sexta"]. Inverta a ordem do array e exiba o resultado no console. 

const semana = ['segunda','terça','quarta','quinta','sexta'];
const length = semana.length - 1;
for (let i = 0; i<semana.length; i++){
   console.log(`${semana[ (length - i)]}`);
}