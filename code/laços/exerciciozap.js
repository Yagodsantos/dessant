/*1. Mostrar os números de 1 a 10: Utilize um loop for para imprimir os números de 1
a 10 no console.
*/ 
for (let i = 0; i<10; i++){
    console.log(i+1)
}


//2. Mostrar os números pares de 1 a 10: Utilize um loop for para imprimir apenas os
//números pares de 1 a 10 no console.

for (let i = 0; i<10; i++){
    if (i % 2 !== 0)
    console.log(i+1)
}

//Mostrar a tabuada do 5: Utilize um loop for para imprimir a tabuada do 5 (de 5 x 1
//até 5 x 10) no console.

for (let i = 0; i<50; i+= 5 ){
    console.log( i+5)
}

/*4. Somar os números de 1 a 10: Utilize um loop for para calcular e mostrar a soma
de todos os números de 1 a 10 no console*/
let somaNum = 0
for (let i = 0; i<10; i++){
    somaNum += i
}
console.log("A soma dos numeros é: ", somaNum + 10)

/*5. Calcular a média de 5 números: Utilize um loop for para ler 5 números do usuário
e calcular a média dos números digitados. Mostre a média no console.*/
const readlineSync = require('readline-sync')


let soma2 = 0
for(let i = 0; i <numeros5.length; i++){
    let numeros5 = Number( readlineSync.question("Digite um numero:"))
soma2 += numeros5[i]
console.log(numeros5)

}
let media = soma2 / numeros5.length

console.log(media)

/*Mostrar os números pares de 1 a 20, mas pular os múltiplos de 3: Utilize um
loop for para imprimir os números pares de 1 a 20 no console, mas pule os
números que são múltiplos de 3.
*/ 
for (let i = 0; i<=20; i++){

    if(i % 2 == 0)
    if (i % 3 !== 0)
    console.log(i)
}

/*7. Mostrar os números de 1 a 100, mas substitua os múltiplos de 3 por "Fizz", os
múltiplos de 5 por "Buzz" e os múltiplos de 3 e 5 por "FizzBuzz": Utilize um loop
for para implementar a lógica do FizzBuzz.
*/ 
for (let i = 0; i<100; i++)
    if (i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz")
    }
   else if(i % 3 == 0 ){
    console.log("Fizz")
    }
else if (i % 5 == 0){
    console.log("Buzz")
}
 let