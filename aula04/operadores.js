// Operadores em JavaScript
// Operadores Aritméticos
/*
    soma: +
    subtração: -
    multiplicação: *
    divisão: /
    resto da divisão: %
    incremento: ++
    decremento: --
    potenciação: **
*/

console.log(10 + 5); // Soma: 15
console.log(10 - 5); // Subtração: 5
console.log(10 * 5); // Multiplicação: 50
console.log(10 / 5); // Divisão: 2
console.log(10 % 3); // Resto da divisão: 1
console.log(10 ** 2); // Potenciação: 100

// Operadores de Atribuição
/*
    atribuição: =
    adição e atribuição: +=
    subtração e atribuição: -=
    multiplicação e atribuição: *=
    divisão e atribuição: /=
    resto da divisão e atribuição: %=
    potenciação e atribuição: **=
*/

let numero = 5;
console.log(numero); // 5
numero = numero + 3; // auto atribuição: numero agora é 8
console.log(numero); // 8
numero += 2; // equivalente a numero = numero + 2
console.log(numero); // 10
numero -= 4; // equivalente a numero = numero - 4
console.log(numero); // 6
numero *= 2; // equivalente a numero = numero * 2
console.log(numero); // 12
numero /= 3; // equivalente a numero = numero / 3
console.log(numero); // 4
numero %= 3; // equivalente a numero = numero % 3
console.log(numero); // 1
numero **= 3; // equivalente a numero = numero ** 3
console.log(numero); // 1

//Operador Incremento
let contador = 0;
contador++; // contador agora é 1
console.log(contador); // 1
contador--; // contador agora é 0
console.log(contador); // 0
//nota: o operador de incremento (++) e decremento (--) pode ser usado tanto antes quanto depois da variável, mas a posição afeta a ordem de avaliação. Por exemplo, se usarmos contador++ em uma expressão, o valor de contador será usado antes de ser incrementado, enquanto se usarmos ++contador, o valor de contador será incrementado antes de ser usado na expressão.
// Exemplo:
let a = 5;
console.log(a++); // Imprime 5, depois a é incrementado para 6
console.log(++a); // a é incrementado para 7, depois imprime 7

//Operadores Relacionais
/*
    igual a: ==
    diferente de: !=
    estritamente igual a: ===
    estritamente diferente de: !==
    maior que: >
    menor que: <
    maior ou igual a: >=
    menor ou igual a: <=

    O operador de igualdade (==) compara os valores, 
    mas não os tipos, enquanto o operador de identidade (===) 
    compara tanto os valores quanto os tipos. Por exemplo, 
    5 == '5' é verdadeiro, mas 5 === '5' é falso, porque os tipos são diferentes (number e string).
*/

numero = 10;
console.log(numero == 10); // true
console.log(numero != 5); // true
console.log(numero === 10); // true
console.log(numero !== "10"); // true
console.log(numero > 5); // true
console.log(numero < 15); // true
console.log(numero >= 10); // true
console.log(numero <= 9); // false

//Operadores Lógicos
/*
    E lógico: &&
    OU lógico: ||
    NÃO lógico: !
    O operador E lógico (&&) retorna true se ambos os operandos forem verdadeiros, 
    enquanto o operador OU lógico (||) retorna true se pelo menos um dos operandos for verdadeiro. 
    O operador de negação lógica (!) inverte o valor lógico do operando, ou seja, se o operando for verdadeiro, ele retorna falso, e vice-versa.
*/
let x = 5;
console.log(x > 0 && x < 10); // true, porque x é maior que 0 e menor que 10
console.log(x < 0 || x > 3); // true, porque x é maior que 3
console.log(!(x > 0)); // false, porque x é maior que 0, então a negação é falsa

//operador de negação lógica (!) pode ser usado para verificar se uma condição é falsa. Por exemplo, se quisermos verificar se um número não é positivo, podemos usar a negação lógica para inverter a condição:
let numero2 = -5;
console.log(!(numero2 > 0)); // true, porque numero2 não é maior que 0, então a negação é verdadeira

//operador ternário
/*
    condição ? expressão1 : expressão2
    O operador ternário é uma forma concisa 
    de escrever uma expressão condicional. 
    Ele avalia a condição e retorna expressão1 
    se a condição for verdadeira, ou expressão2 
    se a condição for falsa.
*/
let idade = 18;
let mensagem =
  idade >= 18 ? "Você é maior de idade." : "Você é menor de idade.";
console.log(mensagem); // "Você é maior de idade."

//operadores de comparação e operadores lógicos podem ser combinados para criar expressões mais complexas. Por exemplo, podemos verificar se um número está dentro de um intervalo usando operadores de comparação e o operador lógico E:
let numero3 = 7;
console.log(numero3 > 0 && numero3 < 10); // true, porque numero3 é maior que 0 e menor que 10

//operadores ternarios também podem ser aninhados para criar expressões mais complexas. Por exemplo, podemos usar um operador ternário dentro de outro para verificar múltiplas condições:
let nota = 85;
let resultado =
  nota >= 90
    ? "Excelente"
    : nota >= 80
      ? "Bom"
      : nota >= 70
        ? "Regular"
        : "Insuficiente";
console.log(resultado); // "Bom", porque a nota é maior ou igual a 80, mas menor que 90
