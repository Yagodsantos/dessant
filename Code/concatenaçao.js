const nome = "yago"
const idade = 18
const cidade = "sapucaia"

console.log("meu nome é", nome,  "tenho", idade, "anos", "e sou de", "sapucaia")

console.log(`meu nome é ${nome}, tenho ${idade} anos e sou de ${cidade}`) //templat
console.log("meu nome é" + nome  +  "tenho" + idade + "anos" + "e sou de" + "sapucaia")// concatenação


console.log(nome.length) // quantos caracteres tem incluindos os espaços
console.log(nome.trim()) // remove os espaços de antes e depois da sua string
console.log(nome.includes('Yago') )// false
  console.log(nome.includes('yago')) // true( diz se a palavra digitada esta na variavel ou não)


  let frase = "comi cenoura hoje"
 let novafrase = frase.replaceAll("cenoura", "batata")
 console.log(frase.replaceAll())
 console.log(novafrase.replaceAll())

 // arrays
 // pode ter qualquer valo na lista, string, number e boolean
 // o primeiro numero sempre é 0
 const listaDeCompras = ["batata","alface", "queijo"]
 const segundoitem = listaDeCompras [2]
 console.log(listaDeCompras)
 console.log(segundoitem)


 const raças = ["Poodle", "Vira-Lata", "Bulldog", "Pastor Alemão", "Yorkshire"]
 const escolhido = 2
 console.log("raça escolhida:", raças[escolhido])

 