var idade = 20; // Variável do tipo number, armazena valores numéricos. O var é usado para declarar variáveis que podem ser reatribuídas posteriormente. No entanto, o var tem escopo de função, o que significa que a variável estará disponível em todo o escopo da função onde foi declarada, mesmo fora de blocos.
let nome = "Hayrine"; // Variável do tipo string, armazena texto. o let é usado para declarar variáveis que podem ser reatribuídas posteriormente. além disso, o let tem escopo de bloco, o que significa que a variável só estará disponível dentro do bloco onde foi declarada.
let numero = 25; // Variável do tipo number, armazena valores numéricos
let booleano = true; // Variável do tipo boolean, armazena valores lógicos (true ou false)
const curso = "Full Stack"; // Variável constante, não pode ser reatribuída

numero = 30; // Reatribuindo o valor da variável numero

if (true) {
  let mensagem = "Olá, mundo!"; // Variável do tipo string, armazena texto. Declarada com let, tem escopo de bloco.
  console.log(mensagem); // Isso funcionará, pois a variável mensagem está acessível dentro do bloco onde foi declarada.
}

console.log(mensagem); // Isso causará um erro, pois a variável mensagem não está acessível fora do bloco onde foi declarada.


/* =====================================================================
   RESUMO DA AULA:
   - Tipos Primitivos: Armazenamento de dados básicos como números (`number`), textos (`string`) e valores lógicos (`boolean`).
   - Declaração e Reatribuição: Diferença entre variáveis que podem ter seus valores alterados (`var` e `let`) e constantes que são imutáveis (`const`).
   - Escopo de Variáveis: O conceito fundamental de que `var` possui escopo de função (abrangente e menos seguro) e `let`/`const` possuem escopo de bloco (restritos às chaves `{}` onde foram criados). O erro gerado no final do código ilustra na prática como o escopo de bloco protege os dados de acessos indevidos externos.
   ===================================================================== */