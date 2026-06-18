// const PROMPT = require('prompt-sync')();

//  <contaddor>; <condicao>; <incremento>
// for (let i = 0; i <= 10; i++) {
//     console.log(i);
// }

// let contador = 0;
// while (contador <= 10) {
//     console.log(contador);
//     contador++;
// }

// tabuada
// let numero = Number(PROMPT('Digite um número para ver a tabuada: '));
let numero = 5;
for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
}

// matrizes
let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j]);
    }
}//a matriz é uma estrutura de dados que pode ser representada como um array de arrays.
// No exemplo acima, temos uma matriz 3x3, onde cada elemento é um número.
// Para acessar os elementos da matriz, usamos dois loops for aninhados.
// O primeiro loop percorre as linhas da matriz, 
// enquanto o segundo loop percorre as colunas de cada linha.
// Dessa forma, podemos acessar cada elemento da matriz usando a sintaxe matriz[i][j], 
// onde i é o índice da linha e j é o índice da coluna.


// no aulao também falamos sobre debugar o código, 
// ou seja, encontrar e corrigir erros. 
// Para isso, podemos usar o console.log 
// para imprimir valores intermediários e 
// entender o que está acontecendo no código. 
// Além disso, muitas IDEs possuem ferramentas 
// de depuração que permitem executar o código 
// passo a passo e inspecionar variáveis em tempo real.