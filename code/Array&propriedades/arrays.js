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

 let pokemon = ["bulbassauro", "charmander", "pikachu"] // length em arrays diz o numero de itens
 console.log(pokemon.length) //3


 const seriesfodas = ["the office", "breaking bad", "modern family"]
 console.log(seriesfodas.includes("the office"))



 /* metodo push
 let numeros = [1, 2, 3]
  numeros.push(4)
  console.log.log(numeros) //[1,2,3,4] */






  //metodo splice
  const Letras = ["A", "B", "C", "D", "E", "F", "G", "H"]
  //indices (i)    0    1    2    3    4    5    6    7
  Letras.splice(2, 1)
  // indice (i)  ["A", "B", "D", "E", "F", "G", "H"]  
  //               0     1    2    3    4    5    6     
  Letras.splice(3, 2 )
  console.log(Letras)


  