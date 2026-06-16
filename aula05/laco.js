// for(inicialização; condição; incremento) {
//     // bloco de código a ser executado
// }

// while(condição) {
//     // bloco de código a ser executado
// }

// do {
//     // bloco de código a ser executado
// } while (condição);

// diferença entre while e do while:
// o do while executa o bloco de código
// pelo menos uma vez, mesmo que a condição
// seja falsa,
// enquanto o while verifica a condição
// antes de executar o bloco de código.

// EXEMPLOS

for (let i = 0; i < 5; i++) {
  console.log(i);
}

let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);
