/*1. Faça um programa que pergunte ao usuário seu nome e seu e-mail. Em seguida, Imprima no console a seguinte mensagem:
    
    O e-mail `emailDoUsuario` foi cadastrado com sucesso. Seja bem-vinda(o), `nomeDoUsuario`!*/

    const readlineSync = require('readline-sync')

    const nome = readlineSync.question("Qual o seu nome? ")
    const email = readlineSync.question("Digite seu e-mail:")

    console.log("Nome:", nome)
    console.log("Email", email )
    console.log("O e-mail", email, "foi cadastrado com sucesso!")

    /*2. Faça um programa que contenha um array com 5 das suas comidas preferidas, armazenado em uma variável. Em seguida, siga os passos:
    
    a) Imprima no console o array completo
    
    b) Imprima no console a mensagem "Essas são as minhas comidas preferidas: ", seguida por cada uma das comidas, **uma embaixo da outra**.
    
    c) Aqui vai um desafio: pergunte ao usuário uma comida preferida. Troque a segunda comida da sua lista pela inserida pelo usuário. Imprima no console a nova lista*/

    const foods = ["pizza", "churrasco", "parmegiana com batata frita", "hamburguer", "frango frito"]
    console.log(`Those are my favorite foods: \n${foods.join("\n")}`)

const favoriteFood = readlineSync.question ("Whats are you favorite food?")
/*splice(): Adiciona ou remove elementos do array em uma posição especificada.
const numbers10 = [1, 2, 3, 4, 5];
numbers10.splice(2, 1, 6); // Remove um elemento a partir do índice 2 e adiciona o número 6
console.log(numbers10); // Saída: [1, 2, 6, 4, 5]*/


foods.splice(1,1, favoriteFood)
console.log(foods)

/*3. Faça um programa, seguindo os passos:
    
    a) Crie um array vazio e guarde-o em uma variável, chamada `listaDeTarefas`
    
    b) Pergunte ao usuário 3 tarefas que ele precise realizar no dia e armazene-as, uma por uma, no array
    
    c) Imprima o array no console
    
    d) Peça ao usuário que digite o **índice** de uma tarefa que ele já realizou: 0, 1 ou 2 
    
    e) Remova da lista o item de índice que o usuário escolheu.
    
    f) Imprima o array no console */
    let taskslist = []
let task1 = readlineSync.question("What is the first thing you need to do today?")
let task2 = readlineSync.question("And the second?")
let task3 = readlineSync.question("More one")
console.log(taskslist)