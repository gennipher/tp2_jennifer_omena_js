// Calcular o fatorial de 53, imprimido o resultado e o tempo necessário para a execução.
// (Dica: usar o objeto javascript Date)

// * O resultado deve ser mostrado no formato 53! = XXXXXX (yyy milisegundos)


function Tempo() {

    //Tempo inicial
    let tempo_inicial = new Date();

    //Calculando o fatorial de 53
    let n = 53
    let i = 1
    let fat = 1

    for (i = 1; i <= n; i++)
        fat *= i

    //Tempo final
    let tempo_final = new Date() - tempo_inicial;

    return (n + "! = " + fat + "(" + tempo_final + " milissegundos).");
}

console.log(Tempo())