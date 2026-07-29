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

/* =====================================================================
   RESUMO DA AULA:
   - Estruturas de Repetição (Loops): Ferramentas fundamentais para executar um bloco de código repetidas vezes enquanto uma condição for verdadeira.
   - Laço for: Ideal para situações onde sabemos exatamente a quantidade de vezes que precisamos repetir o bloco. Centraliza inicialização, condição e incremento na mesma linha.
   - Laço while: Uma estrutura baseada em pré-validação. Avalia a condição *antes* de rodar o bloco, o que significa que o código pode nunca ser executado se a condição já começar falsa.
   - Laço do while: Uma estrutura baseada em pós-validação. Executa o bloco de código obrigatoriamente *pelo menos uma vez* antes de testar a condição. É perfeito para menus interativos e validações de dados.
   - Controle de Fluxo: O esquecimento do incremento (ex: `j++` ou `k++`) dentro dos blocos `while` ou `do while` pode gerar um "loop infinito", travando a execução do programa.
   ===================================================================== */