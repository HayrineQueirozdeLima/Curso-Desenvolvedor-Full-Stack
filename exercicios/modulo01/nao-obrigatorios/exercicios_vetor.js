/*
1. Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma
loja, dado um array com os valores das transações.
Instruções:
● Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
● Usar o laço for para somar todos os valores;
● No final, exibir o valor total acumulado de vendas no console.
*/

let vendas = [300, 450, 200, 700];

for (let i = 0; i < vendas.length; i++) {
  let totalVendas = 0;
  totalVendas += vendas[i];
  console.log(
    `Total acumulado das vendas dos dias registrados: R$${totalVendas}`,
  );
}

/*
2. Calculando a média de notas: Usar um laço for para calcular a média das notas de
um/a estudante.
Instruções:
● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
● Utilizar o laço for para somar as notas;
● Calcular a média das notas e exibir o resultado no console.
*/


let notas = [60, 70, 20, 80, 90];
let nota_total = 0;
let media = 0;

for (let i = 0; i < notas.length; i++ ){
nota_total += notas[i]
}
media =  nota_total / notas.length

console.log(`A sua média é: ${media}`)

/*
3. Procurando um valor no array: Usar um laço for para procurar um número específico em
um array e verificar se ele existe.
Instruções:
● Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
● Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
● Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
"Número encontrado" ou "Número não encontrado".
*/

let array = [0,1,2,3,4,5,70,7,8, 7]

let numeroProcurado = 7

for (i = 0; i < array.length; i++){
if (array[i] == numeroProcurado){
console.log(`O número ${numeroProcurado} foi encontrado na posição ${i}!`)
}
}

/*
4. Contagem de números pares: Usar o laço for para contar quantos números pares
existem em um array de números.
Instruções:
● Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
● Utilizar o laço for para contar quantos números pares existem nesse array;
● Ao final, exiba a quantidade de números pares no console.
*/


let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;

for (let i = 0; i < numeros.length; i++) {
  if (numeros[i] % 2 === 0) {
    count++;
  }
}

console.log(`A quantidade de números pares é: ${count}`);