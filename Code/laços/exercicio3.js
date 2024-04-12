let num = [10, 20, 30, 40, 15, 60]

let resultado = 0
 function maiornumero (array) {
    for(let i = 0; i < array.length; i++){
        if( array[i] > resultado[i]){
            resultado = array[i]
        }
    
    }
    return resultado
}

console.log(maiornumero(num))  
