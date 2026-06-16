/*
 Contagem de números pares: Usar o laço for para contar quantos números pares
existem em um array de números.
 */

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let contador = 0;

for (let pos = 0; pos < numeros.length; pos++) {
  if (numeros[pos] % 2 == 0) {
    contador++;
  }
}
console.log(`A quantidade de números pares é: ${contador}`);
