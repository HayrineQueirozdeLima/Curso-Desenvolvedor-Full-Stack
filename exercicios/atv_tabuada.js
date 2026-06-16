/*
Nesta atividade, você deverá criar um programa em JavaScript que mostre a tabuada de um número utilizando um laço de repetição (for ou while).

O programa deve:
- criar uma variável com um número
- mostrar a tabuada desse número de 1 até 10
- exibir os resultados no console
*/

let numero = prompt("Digite um número para calcular sua tabuada:");
console.log("Tabuada do ${numero} (utilizando for):");
for (let i = 0; i <= 10; i++) {
  console.log("${i} x ${numero} = ${i * numero}");
} //usar crase para interpolação de string e nao aspas simples ou duplas pois elas nao permitem a interpolação de variáveis dentro da string, enquanto as crases permitem.

// usando while

let i = 0;
console.log(`Tabuada do ${numero} (utilizando while):`);
while (i <= 10) {
  console.log(`${i} x ${numero} = ${i * numero}`);
  i++;
}
