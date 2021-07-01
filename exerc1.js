// Contar e imprimir quantos números existem entre 0 e 1.000.000
// (exclusives*) que sejam múltiplos de 2 e 3 simultaneamente
//
// * exclusives - Ou seja, quantos números existem entre 0 e 1.000.000,
// excluindo o 1 e o 1.000.000

let result = 0
let num = 1000000
let i = 1

for (i ; i < num;  i ++) {
    if (i % 6 == 0) {
        result += 1;
    }
}

console.log("Existem " + result + " números múltiplos de 2 e 3, simultaneamente, entre 0 e 1.000.000.") // result = 166666

// for (i ; i < num;  i ++) {
//     if (i % 2 == 0) {
//         if (i % 3 == 0) {
//             result += 1;
//         }
//     }
// }
