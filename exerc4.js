// Criar um array com 1.000 números aleatórios não repetidos e ordenálos.
// Os números devem estar entre 0 e 5.000 (inclusives, ou seja, incluindo o 0 e o 5.000).

let tamanho = 1000
let lista = []

function questao4() {
    let valido = true;
    if (!Number.isInteger(tamanho) || tamanho <= 0){
        console.log('Tamanho inválido, digite somente números inteiros positivos diferentes de zero')

        valido = false
    }

    if (valido && isNaN(tamanho)) {
        console.log('Erro: o valor difitado é uma string, digite somente números')

        valido = false
    }

    if (!valido){
        return false
    }

    while (lista.length < tamanho) {
        let numero = Math.floor(Math.random() * 5001)
        if(!lista.includes(numero)){
            lista.push(numero)
        }
    }

    let listaOrdenada = lista.sort(function(a,b) {
        return a-b
    })

    console.log(listaOrdenada)
}