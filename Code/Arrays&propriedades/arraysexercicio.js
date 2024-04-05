// Para esse exercicio comece criando um array com os valores: 1, 2, 3, 4, 5 e 6
//determine o tamanho do array
// adicione o numero 7
//remova os numeros 4 e 5
// determine o novo tamanho do array

let array = [1, 2, 3, 4, 5, 6]
//indice (i) 0, 1, 2, 3, 4, 5
/* o primeiro numero é indica qem qual numero ele vai parar, e o segundo, quantos ele vai remover a 
partir dai*/
console.log(array.length)
array.push(7)
console.log(array)
array.splice(3, 2)
console.log(array)
console.log(array.length)




const array2 = ["gon", "michael scott", "luffy", "pica-pau", "kaito", ""]
// funçao q quando chamada dira qual peronagem eu sou


function personagens(array1 ){
    const aleatorio = Math.floor(Math.random()* array1.length)
return array1 [ aleatorio]
}
const personagemescolhido = personagens(array2)
console.log("Você é", personagemescolhido)