let numeros = [2, 5, 1, 6, 1]; // Declaração de um array de números
// valores - 2 5 1 6 1
// índices - 0 1 2 3 4

let frutos = ["maçã", "banana", "laranja"]; // Declaração de um array de frutas
// valores - "maçã" "banana" "laranja"
// índices - 0       1        2

console.log(numeros[0]); // Acessando o primeiro elemento do array 'numeros' (2
console.log(frutos[1]); // Acessando o segundo elemento do array 'frutos' ("banana")

let vazio = []; // Declaração de um array vazio
vazio[1] = "novo valor"; // Atribuindo um valor ao índice 1 do array 'vazio'
console.log(vazio[1]);
vazio[0] = "primeiro valor"; // Atribuindo um valor ao índice 0 do array 'vazio'
console.log(vazio[0]);
console.log(vazio); // Exibindo o conteúdo do array 'vazio' no console

vazio.push("mais um valor"); // Adicionando um novo valor ao final do array 'vazio'
console.log(vazio); // Exibindo o conteúdo atualizado do array 'vazio' no
vazio.pop(); // Removendo o último valor do array 'vazio'

console.log(numeros.length); // Exibindo o tamanho do array 'numeros' (5)
console.log(frutos.length); // Exibindo o tamanho do array 'frutos' (3)

//arrays podem conter diferentes tipos de dados
let misturado = [
  1,
  "texto",
  true,
  null,
  undefined,
  { nome: "objeto" },
  [1, 2, 3],
];
console.log(misturado); // Exibindo o conteúdo do array 'misturado' no console

// lacos de repeticao com arrays
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]); // Exibindo cada elemento do array 'numeros' usando um laço for
}

for (let pos = 0; pos < numeros.length; pos++) {
  console.log("O número na posição " + pos + " é " + numeros[pos]); // Exibindo cada elemento do array 'numeros' com sua posição usando um laço for
  // console.log(`O número na posição ${pos} é ${numeros[pos]}`); // Exibindo cada elemento do array 'numeros' com sua posição usando template literals
}

//foreach: uma forma mais simples de percorrer um array
numeros.forEach(function (numero) {
  console.log(numero); // Exibindo cada elemento do array 'numeros' usando o método forEach
});

//for in: usado para percorrer as chaves de um objeto ou os índices de um array
for (let indice in numeros) {
  console.log("O número na posição " + indice + " é " + numeros[indice]); // Exibindo cada elemento do array 'numeros' com sua posição usando um laço for...in
}

//for of: usado para percorrer os valores de um array
for (let numero of numeros) {
  console.log(numero); // Exibindo cada elemento do array 'numeros' usando um laço for...of
}

/* a diferença entre os laços for, for in e for of 
é que o for é mais flexível e pode ser usado para 
percorrer qualquer tipo de estrutura de dados, 
enquanto o for in é específico para objetos e arrays, 
e o for of é específico para arrays e outros objetos 
iteráveis. O for in percorre os índices ou chaves, 
enquanto o for of percorre os valores diretamente.
*/

/* =====================================================================
   RESUMO DA AULA:
   - Conceito de Array (Vetores): Estrutura de dados que armazena uma coleção ordenada de elementos. O acesso a cada item é feito através de índices numéricos que começam obrigatoriamente no 0.
   - Dinamismo e Heterogeneidade: No JavaScript, os arrays possuem tamanho dinâmico (crescem e diminuem conforme a necessidade) e aceitam múltiplos tipos de dados misturados em uma mesma estrutura (números, strings, booleanos, objetos e até outros arrays).
   - Métodos e Propriedades Essenciais:
     - `.length`: Retorna a quantidade total de elementos presentes no momento.
     - `.push()`: Adiciona de forma prática um novo elemento ao final da lista.
     - `.pop()`: Remove o último elemento da lista.
   - Métodos de Iteração (Loops para Arrays):
     - `for` tradicional: Dá flexibilidade máxima para definir o início, fim e o passo da contagem.
     - `.forEach()`: Uma abordagem mais moderna e funcional para executar uma função diretamente para cada elemento do array.
     - `for...in`: Focado em percorrer as chaves ou os *índices* do array.
     - `for...of`: Focado em extrair diretamente os *valores* de cada posição, sendo a opção mais limpa quando os índices não são necessários para a lógica do código.
   ===================================================================== */