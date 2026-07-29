// Condicionais
/*
As estruturas condicionais permitem que o programa tome decisões com base em condições específicas. Em JavaScript, as principais estruturas condicionais são:
- if: Executa um bloco de código se uma condição for verdadeira.
- else: Executa um bloco de código se a condição do if for falsa.
- else if: Permite verificar múltiplas condições.
- switch: Permite comparar uma expressão com múltiplos casos e executar o bloco de código correspondente ao caso que corresponde à expressão.
Além disso, o operador ternário é uma forma concisa de escrever expressões condicionais. Ele avalia uma condição e retorna um valor se a condição for verdadeira, ou outro valor se a condição for falsa.
*/

let media = 6;
if (media >= 6) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// Exemplo com else if
let nota = 85;
if (nota >= 90) {
  console.log("Excelente");
} else if (nota >= 80) {
  console.log("Bom");
} else {
  console.log("Insuficiente");
}

/* =====================================================================
   RESUMO DA AULA:
   - Tomada de Decisão: Introdução ao controle de fluxo, permitindo que o software execute caminhos diferentes baseando-se em testes lógicos.
   - Estrutura if/else básico: Executa uma ação principal se a condição for verdadeira (`if`), e define um caminho alternativo obrigatório caso seja falsa (`else`).
   - Encadeamento com else if: Solução ideal para avaliar múltiplas condições exclusivas em sequência. O JavaScript testa de cima para baixo e para na primeira condição que for verdadeira.
   - Panorama de Condicionais: O código também recapitula conceitualmente que o `switch` (visto anteriormente) e o operador ternário completam o leque de ferramentas para tratar desvios de fluxo no JavaScript.
   ===================================================================== */