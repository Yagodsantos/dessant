//for of são uma variaçao do for usada para percorrer arrays

const numeros = [14, 69, 65, 78, 35]
for (let numero of numeros){
    console.log(numero)
}




let palavras1 = ["tem", "mulher", "que", "não", "depende", "de", "homem", "problema delas"]
let mensagem = ""

function imprimir(palavras){

for (let palavra of palavras){
mensagem += palavra + " "

}
console.log(mensagem)
}

imprimir(palavras1)
let dsokoer
