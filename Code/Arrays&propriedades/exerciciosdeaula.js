//Indique todas as mensagens impressas no console, SEM EXECUTAR o programa.



let array
console.log('a. ', array)
// undefined
array = null
console.log('b. ', array)
// null
array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
console.log('c. ', array.length)
//11
let i = 0
console.log('d. ', array[i])
// 3
array[i+1] = 19
console.log('e. ', array)

 
const valor = array[i+6]
console.log('f. ', valor)




//Leia o código abaixo com atenção 
const readlineSync = require('readline-sync');

const frase = readlineSync.question("Digite uma frase: ");

console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length);
// Qual será o valor impresso no console se a entrada do usuário for: "Subi num ônibus em Marrocos"?
// SUBI NUM ONIBUS EM MIRROCOS 