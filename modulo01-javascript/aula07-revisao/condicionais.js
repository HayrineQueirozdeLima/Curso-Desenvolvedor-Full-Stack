/* 
=======================================================
CONDICIONAIS E OPERADORES LÓGICOS
=======================================================

Como o computador toma DECISÕES? 

tecnicamente, estruturas condicionais são chamadas de "control flow" (fluxo de controle)
Eles determinam o caminho que o programa deve seguir, dependendo de certas condições.
Sem ela, todo programa seria linear, ou seja, ele executaria as instruções na ordem em 
que foram escritas, sem nenhuma variação.

=======================================================
BLOCO 1 - OPERADORES DE COMPARAÇÃO 
=======================================================
comparações sempre retornam true ou false
o resultado de uma comparação é um valor booleano (true ou false)

> maior que
< menor que
>= maior ou igual a
<= menor ou igual a
== igual a (comparação de valor)
=== estritamente igual a (comparação de valor e tipo)
!= diferente de (comparação de valor)
!== estritamente diferente de (comparação de valor e tipo)

REGRA DE OURO: SEMPRE USE === E !== PARA EVITAR PROBLEMAS DE TIPO
o == pode gerar surpresas desagradáveis porque ele faz coerção de tipo, 
ou seja, ele tenta converter os valores para um tipo comum antes de compará-los.

=======================================================
BLOCO 2 - OPERADORES LÓGICOS
=======================================================
operadores lógicos são usados para combinar expressões booleanas
existem 3 operadores lógicos principais:

&& (AND) - retorna true se ambas as expressões forem verdadeiras
|| (OR) - retorna true se pelo menos uma das expressões for verdadeira
! (NOT) - inverte o valor booleano da expressão

tabela verdade do AND (&&):
A     B     A && B
true  true  true
true  false false
false true  false
false false false

tabela verdade do OR (||):
A     B     A || B
true  true  true
true  false true
false true  true
false false false

tabela verdade do NOT (!):
A     !A
true  false
false true

Avaliação de curto-circuito:
- No operador AND (&&), se a primeira expressão for false, a segunda expressão 
não é avaliada, pois o resultado já será false.
- No operador OR (||), se a primeira expressão for true, a segunda expressão 
não é avaliada, pois o resultado já será true.


========================================================
BLOCO 3 - EXEMPLOS PRÁTICOS: AUTENTICAÇÃO 
========================================================
um dos usos mais comuns de estruturas condicionais é na autenticação de usuários, 
onde verificamos se as credenciais fornecidas são válidas.
como senha e nome de usuário.
estr exemplo é simplificado, mas em sistemas reais, a autenticação envolve muitos 
outros fatores, como hashing de senhas, tokens de autenticação, etc.7
já que senhas nunca ficam no código, e são verificadas no servidor com criptografia.

EXEMPLO SIMPLES DE AUTENTICAÇÃO:

const username = "admin";
const password = "1234";

const inputUsername = prompt("Digite seu nome de usuário:");
const inputPassword = prompt("Digite sua senha:");
if (inputUsername === username && inputPassword === password) {
  console.log("Autenticação bem-sucedida!");
} else {
  console.log("Nome de usuário ou senha incorretos.");
}

=========================================================
BLOCO 4 - IF / ELSE
=========================================================
o if é a estrutura condicional mais básica, que permite executar um bloco de código 
se uma condição for verdadeira.
a sintaxe é a seguinte:
if (condição) {
  // código a ser executado se a condição for verdadeira
}
o else é usado para executar um bloco de código se a condição do if for falsa.
a sintaxe é a seguinte:
if (condição) {
    // código a ser executado se a condição for verdadeira
} else {
    // código a ser executado se a condição for falsa
}
o else if é usado para verificar múltiplas condições, permitindo que o programa 
escolha entre várias opções.
a sintaxe é a seguinte:
if (condição1) {
    // código a ser executado se a condição1 for verdadeira
} else if (condição2) {
    // código a ser executado se a condição2 for verdadeira
} else {
    // código a ser executado se nenhuma das condições for verdadeira
}

blocos de uma linha:
if (condição) console.log("Condição verdadeira");
else console.log("Condição falsa");
(as chaves são opcionais para blocos de uma linha, mas é recomendado usá-las 
para evitar erros futuros)

==========================================================
BLOCO 5 - OPERADOR TERNÁRIO
==========================================================
o operador ternário é uma forma concisa de escrever uma expressão condicional, 
ele é chamado de "ternário" porque envolve três partes: a condição, a expressão 
a ser avaliada se a condição for verdadeira e a expressão a ser avaliada se a condição for falsa.
a sintaxe é a seguinte:
condição ? expressão1 : expressão2;
se a condição for verdadeira, a expressão1 é avaliada e retornada; caso contrário, 
a expressão2 é avaliada e retornada.
indicado para expressões simples, mas pode se tornar difícil de ler se for usado 
em excesso ou com expressões complexas.

============================================================
BLOCO 6 - SWITCH CASE
============================================================
o switch case é uma estrutura condicional que permite comparar uma expressão 
com múltiplos casos possíveis, 
executando o bloco de código correspondente ao caso que for verdadeiro.
a sintaxe é a seguinte:
switch (expressão) {
    case valor1:
        // código a ser executado se a expressão for igual a valor1
        break;
    case valor2:
        // código a ser executado se a expressão for igual a valor2
        break;
    default:
        // código a ser executado se a expressão não for igual a nenhum dos valores acima
}

é mais legível quando os valores são exatos e fixos, como em menus ou opções 
de configuração.
internamente, o switch usa comparação estrita (===) para comparar a expressão 
com os casos, o que significa que o tipo e o valor devem ser iguais para que 
um caso seja considerado verdadeiro.

IMPORTANTE: O USO DO BREAK É ESSENCIAL PARA EVITAR O FAMOSO "FALL-THROUGH", 
ONDE O CÓDIGO CONTINUA A SER EXECUTADO ATÉ ENCONTRAR UM BREAK OU CHEGAR AO FINAL DO SWITCH.
FALL-THROUGH INTENCIONAL: agrupa cases que resultam no mesmo código, como no exemplo abaixo:
switch (day) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thursday":
    case "Friday":
        console.log("É um dia da semana.");
        break;
    case "Saturday":
    case "Sunday":
        console.log("É um fim de semana.");
        break;
    default:
        console.log("Dia inválido.");
}
        
==========================================================
BLOCO 7 - NuLLISH COALESCING ?? (valor padrão seguro)
==========================================================
o operador de coalescência nula (??) é usado para fornecer um valor padrão quando 
uma expressão é null ou undefined.
foi introdzido no ES2020 (ES11)

a sintaxe é a seguinte:
expressão1 ?? expressão2;
se expressão1 for null ou undefined, o resultado será expressão2; caso contrário, 
o resultado será expressão1.

exemplo:
const userInput = null;
const defaultValue = "Valor padrão";
const result = userInput ?? defaultValue;
console.log(result); // Output: "Valor padrão"

Diferença entre ?? e ||:
- O operador || retorna o segundo operando se o primeiro for falsy (false, 0, "", 
null, undefined, NaN), enquanto o operador ?? retorna o segundo operando apenas se o primeiro for null ou undefined.
- Portanto, se userInput fosse uma string vazia ("") ou o número 0, o operador || 
retornaria defaultValue, enquanto o operador ?? retornaria userInput.

Encadeamento opcional com ?. (optional chaining):
o operador de encadeamento opcional (?.) é usado para acessar propriedades de 
objetos de forma segura, evitando erros quando uma propriedade intermediária é null ou undefined.
a sintaxe é a seguinte:
objeto?.propriedade;
se objeto for null ou undefined, o resultado será undefined; caso contrário, o resultado será o valor da propriedade.
ou seja objeto?.propriedade é equivalente a (objeto == null) ? undefined : objeto.propriedade
pense no operador ?? como um "fallback" para valores nulos ou indefinidos, e no operador ?. 
como uma forma de acessar propriedades de objetos sem se preocupar com erros de referência.
exemplo:
const user = {
    name: "Alice",
    address: {
    city: "Wonderland"
    }
};
console.log(user?.address?.city); // Output: "Wonderland"
console.log(user?.contact?.email); // Output: undefined (sem erro)
"como assim?" - o operador ?. verifica se user é null ou undefined antes de tentar acessar 
a propriedade address, e depois verifica se address é null ou undefined antes de acessar a propriedade city.
isso evita que o programa lance um erro de tipo (TypeError) quando tentamos acessar uma 
propriedade de um objeto que não existe ou é null/undefined.
outro exemplo:
const user = null;
console.log(user?.name); // Output: undefined (sem erro)
console.log(user.name); // TypeError: Cannot read property 'name' of null

==========================================================
BLOCO 8 - TRUTHY E FALSY (valores que se comportam como true ou false em contextos booleanos)
==========================================================
em JavaScript, existem valores que são considerados "truthy" (verdadeiros) e "falsy" (falsos) 
quando usados em contextos booleanos, 
como em condições de if ou operadores lógicos.
valores falsy:
- false
- 0
- -0
- 0n (BigInt zero)
- ""
- null
- undefined
- NaN
todos os outros valores são considerados truthy, incluindo:
- true
- números diferentes de zero (ex: 1, -1, 3.14)
- strings não vazias (ex: "hello", "0", "false")
- objetos (ex: {}, [])
- arrays (ex: [])
- funções (ex: function() {})
- símbolos (ex: Symbol())
- BigInt (ex: 1n, -1n)
essa característica é importante para entender como as condições são avaliadas em JavaScript,e pode levar a 
comportamentos inesperados se não for levada em consideração.
exemplo:
if ("") {
    console.log("Isso não será impresso, pois a string vazia é falsy.");
} else {
    console.log("Isso será impresso, pois a string vazia é falsy.");
}

if (0) {
    console.log("Isso não será impresso, pois o número zero é falsy.");
} else {
    console.log("Isso será impresso, pois o número zero é falsy.");
}

* IMPORTANTE: O FATO DE UM VALOR SER TRUTHY OU FALSY NÃO SIGNIFICA QUE ELE SEJA REALMENTE TRUE OU FALSE, 
MAS SIM QUE ELE SE COMPORTA COMO TRUE OU FALSE EM CONTEXTOS BOOLEANOS.

*/