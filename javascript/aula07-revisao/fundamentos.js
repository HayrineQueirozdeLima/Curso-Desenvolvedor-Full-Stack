/* ===================================
 * Fundamentos de JavaScript - Aula 07
   ===================================
JavaScript é uma linguagem de programação criada em 1995 
por Brendan Eich enquanto trabalhava na Netscape.
A história conta que ele a criou em apenas 10 dias. O objetivo 
inicial era simples: permitir que os desenvolvedores adicionassem 
interatividade aos sites.    

ECMAScript é o nome oficial da especificação que define a linguagem JS.
ECMAScript = a receita, JavaScript = o bolo pronto.

==========================================
BLOCO 1 - exibindo mensagens (console.log)
===========================================
console.log() é como um "falar em voz alta" para computador.
Tudo o que você colocar dentro dos parenteses aparece no terminal.

Tecnicamente, console é um objeto global disponível tanto no
navegador quanto no Node.js, e log() é um de seus métodos.
Outros métodos úteis:
- console.error(): para mensagens de erro.
- console.warn(): para mensagens de aviso.
- console.table(): para exibir dados em formato de tabela.

log significa "registro" ou "diário de bordo". 
O console é como um diário onde o computador registra 
informações importantes. Quando usamos console.log(), 
estamos escrevendo uma mensagem nesse diário para que 
possamos ler depois.

=====================================================
BLOCO 2 - tipos de dados (o que o JavaScript entende)
======================================================
JavaScript possui dois grupos de tipos de dados:
1. Tipos primitivos: string, number, boolean, null, undefined, symbol e bigint.
2. Tipos de referência: objetos, arrays e funções.

PRIMITIVOS:

- string: sequência de caracteres, como "Olá, mundo!".
-- console.log("Olá, " + "mundo!"); // concatenação de strings

- number: números, como 42 ou 3.14.
-- console.log(10 + 5); // operações matemáticas

- boolean: valores lógicos, true ou false.
-- console.log(5 > 3); // comparação retorna true

- null: valor que indica a ausência de um valor.
-- console.log(null); // representa "nada" ou "vazio"

- undefined: valor que indica que uma variável não foi definida.
-- let x; console.log(x); // x é undefined

- symbol: tipo de dado cujo valor é único e imutável.
-- const sym1 = Symbol("id"); const sym2 = Symbol("id"); console.log(sym1 === sym2); // false

- bigint: tipo de dado para números inteiros grandes.
-- console.log(9007199254740991n + 1n); // 9007199254740992n

- symbol e bigint são tipos mais avançados, usados em casos específicos.
Symbol é útil para criar identificadores únicos, funciona como um rótulo 
exclusivo para propriedades de objetos, garantindo que não haja conflitos. 
Ele é usado para criar chaves de objetos que não podem ser sobrescritas ou acessadas acidentalmente,
o que é especialmente útil em bibliotecas e frameworks para evitar colisões de nomes.
-- exemplo de uso de symbol:
const id1 = Symbol("id");
const id2 = Symbol("id");
console.log(id1 === id2); // false, cada symbol é único


REFERÊNCIA:
- objetos: coleções de dados e funções.
- arrays: listas ordenadas de valores.
- funções: blocos de código reutilizáveis.

COMO DESCOBRIR O TIPO DE QUALQUER VALOR? use o operador typeof:
console.log(typeof "Olá"); // string
console.log(typeof 42); // number
console.log(typeof true);  // boolean
console.log(typeof null); // object (isso é um bug histórico, null deveria ser null)
console.log(typeof undefined); // undefined
console.log(typeof Symbol("id")); // symbol
console.log(typeof 9007199254740991n); // bigint

===========================================================
BLOCO 3 - variáveis (caixas para guardar coisas)
===========================================================
Variáveis são como caixas onde podemos guardar valores para usar depois.
Em JavaScript, podemos criar variáveis usando var, let ou const.
- var: forma antiga de declarar variáveis, tem escopo de função e pode ser redeclarada.
-- var tem comportamentos confusos como hoisting, onde a declaração é "levantada" para o topo do escopo, o que pode levar a bugs difíceis de detectar.
- let: forma moderna de declarar variáveis, tem escopo de bloco e não pode ser redeclarada.
- const: para declarar constantes, que não podem ser reatribuídas.

REGRAS PARA NOMES DE VARIÁVEIS:
- Devem começar com letra, $ ou _.
- Podem conter letras, números, $ e _.
- Não podem ser palavras reservadas (como if, for, etc.).
- Devem ser descritivas para facilitar a leitura do código.
- nomeVariavel: camelCase (recomendada para variáveis e funções).
- NOME_CONSTANTE: UPPER_SNAKE_CASE (recomendada para constantes).

=============================================================
BLOCO 4 - operadores (ferramentas para manipular valores)
=============================================================
Operadores são símbolos que realizam operações em valores.
- Aritméticos: +, -, *, /, % (módulo), ** (exponenciação).
- Atribuição: =, +=, -=, *=, /=.
- Comparação: ==, ===, !=, !==, >, <, >=, <=.
- Lógicos: && (e), || (ou), ! (não).
- Ternário: condição ? valor1 : valor2 (uma forma compacta de if-else).
- typeof: operador unário que retorna o tipo de um valor.

==============================================================
BLOCO 5 - incremento e decremento (atalhos para somar ou subtrair 1)
==============================================================
- Incremento: ++ (soma 1 ao valor da variável).
- Decremento: -- (subtrai 1 do valor da variável).
- Pode ser usado como prefixo (++x) ou sufixo (x++), mas o comportamento é diferente:
-- Prefixo (++x): incrementa a variável antes de usá-la.
-- Sufixo (x++): usa o valor atual da variável e depois incrementa.

===============================================================
BLOCO 6 - conversão de tipos (transformando um tipo em outro)
===============================================================
JavaScript é uma linguagem de tipagem dinâmica, o que significa que os tipos de dados podem ser convertidos automaticamente ou manualmente.

- Conversão automática (coerção): ocorre quando o JavaScript tenta converter um valor para um tipo esperado.
-- Exemplo: console.log("5" + 10); // "510" (string + number = string)
-- Exemplo: console.log("5" - 10); // -5 (string - number = number)

- Conversão manual (casting): podemos usar funções para converter tipos explicitamente, manualmente.
-- Exemplo: console.log(Number("5")); // 5 (string para number)
-- Exemplo: console.log(String(10)); // "10" (number para string)
-- Exemplo: console.log(Boolean(0)); // false (number para boolean)
-- Exemplo: console.log(Boolean("")); // false (string vazia para boolean)
-- Exemplo: console.log(Boolean("Hello")); // true (string não vazia para boolean)

- texto + numero (casting explicito):
// let texto_numero = "10";
// console.log(Number(texto_numero) + 5); // 15
// console.log(texto_numero + 5); // "105" (concatenação, não soma)
// console.log(parseInt("42.9abc")); // 42 (parseInt lê até o primeiro caractere não numérico)"
// console.log(parseFloat("3.14xyz")); // 3.14 (parseFloat lê números decimais)
-- parseInt e parseFloat são funções específicas para converter strings em números, ignorando caracteres não numéricos no final da string.

- numero + texto (casting explicito):
// let numero_texto = 10;
// console.log(String(numero_texto) + "5"); // "105" (concatenação, não soma)
// console.log(numero_texto + "5"); // "105" (concatenação, não soma)
// console.log(numero_texto.toString() + "Kg") // "10Kg" (usando método toString para converter número em string)
// console.log(numero_texto.toFixed(2)); // "10.00" (converte número para string com 2 casas decimais)

- Conversão implicita - o JS fazendo por conta própria (cuidado!):
// console.log("5" + 10); // "510" (string + number = string)
// console.log("5" - 10); // -5 (string - number = number)
// console.log("5" * 2); // 10 (string * number = number)
// console.log("5" / 2); // 2.5 (string / number = number)

- Verificando se uma conversão falhou:
// console.log(Number("abc")); // NaN (Not a Number, resultado de conversão inválida)
// console.log(isNaN(Number("abc"))); // true (isNaN verifica se o valor é NaN)
// console.log(isNaN(Number("123"))); // false (conversão bem-sucedida, resultado é um número)
// console.log(isNaN("abc")); // false (isNaN tenta converter "abc" para número, resulta em NaN, mas isNaN retorna false porque "abc" não é NaN, isso pode ser confuso!)

==================================================================
BLOCO 7 - MATH (funções matemáticas prontas)
==================================================================
Math é um objeto global que fornece propriedades e métodos para realizar operações matemáticas.

- Número aleatório entre 0 (inclusive) e 1 (exclusivo):
-- console.log(Math.random()); // exemplo: 0.123456789

- Número aleatório entre min (inclusive) e max (exclusivo):
-- function getRandomInt(min, max) {
     return Math.floor(Math.random() * (max - min)) + min;
   }
-- console.log(getRandomInt(1, 10)); // exemplo: número inteiro entre 1 e 9

- Número inteiro aleatório entre min (inclusive) e max (inclusive):
-- console.log(Math.floor(Math.random() * (max - min + 1)) + min); // exemplo: número inteiro entre 1 e 10

- Math.random() gera um número decimal aleatório entre 0 (inclusive) e 1 (exclusivo).
- Math.floor() arredonda um número para baixo, para o inteiro mais próximo.
- Math.ceil() arredonda um número para cima, para o inteiro mais próximo.
- Math.round() arredonda um número para o inteiro mais próximo.
- Math.trunc() remove a parte decimal de um número, retornando apenas a parte inteira (sem arredondar).
-- console.log(Math.trunc(-3.7)); // -3 (trunc remove a parte decimal, mas mantém o sinal negativo)

- NÚMERO ABSOLUTO:
- Math.abs() retorna o valor absoluto de um número, ou seja, a distância do número até zero, sem considerar o sinal.
-- console.log(Math.abs(-5)); // 5 (valor absoluto de -5 é 5)

- MÁXIMO E MÍNIMO:
- Math.max() retorna o maior valor entre os argumentos fornecidos.
-- console.log(Math.max(10, 20, 5)); // 20 (maior valor entre 10, 20 e 5)
- Math.min() retorna o menor valor entre os argumentos fornecidos.
-- console.log(Math.min(10, 20, 5)); // 5 (menor valor entre 10, 20 e 5)

- POTÊNCIA E RAÍZES:
- Math.pow() retorna o resultado de um número elevado a uma potência.
-- console.log(Math.pow(2, 3)); // 8 (2 elevado a 3 é 8)
- Math.sqrt() retorna a raiz quadrada de um número.
-- console.log(Math.sqrt(16)); // 4 (raiz quadrada de 16 é 4)
- Math.cbrt() retorna a raiz cúbica de um número.
-- console.log(Math.cbrt(27)); // 3 (raiz cúbica de 27 é 3)
- Math.log() retorna o logaritmo natural (base e) de um número.
-- console.log(Math.log(Math.E)); // 1 (logaritmo natural de e é 1)
- Math.log10() retorna o logaritmo base 10 de um número.
-- console.log(Math.log10(100)); // 2 (logaritmo base 10 de 100 é 2)
- Math.log2() retorna o logaritmo base 2 de um número.
-- console.log(Math.log2(8)); // 3 (logaritmo base 2 de 8 é 3)

- CONSTANTES MATEMÁTICAS:
- Math.PI: a constante π (pi), aproximadamente 3.14159.
-- console.log(Math.PI); // 3.141592653589793
- Math.E: a constante e, aproximadamente 2.71828.
-- console.log(Math.E); // 2.718281828459045
- Math.SQRT2: a raiz quadrada de 2, aproximadamente 1.41421.
-- console.log(Math.SQRT2); // 1.4142135623730951
- Math.SQRT1_2: a raiz quadrada de 1/2, aproximadamente 0.70711.
-- console.log(Math.SQRT1_2); // 0.7071067811865476

- Calculando numero fatorial usando Math:
-- function fatorial(n) {
     if (n < 0) return undefined; // fatorial não é definido para números negativos
      if (n === 0 || n === 1) return 1; // fatorial de 0 e 1 é 1
      let resultado = 1;
      for (let i = 2; i <= n; i++) {
        resultado *= i; // resultado = resultado * i
      }
      return resultado;
    }
-- console.log(fatorial(5)); // 120 (5! = 5 * 4 * 3 * 2 * 1 = 120)

================================================================
BLOCO 8 - DATE (trabalhando com datas e horas)
================================================================
Date é um objeto global que representa datas e horas. Ele fornece 
métodos para criar, manipular e formatar datas. Armazena o tempo 
como um número inteiro representando os milissegundos desde 1º de janeiro de 1970 (UTC).

- Data e hora atual:
-- const now = new Date();
-- console.log(now); // exemplo: 2024-06-01T12:34:56.789Z
-- console.log(now.toString()); // exemplo: Sat Jun 01 2024 12:34:56 GMT+0000 (Coordinated Universal Time)

- Timestamp atual em milssegundos (forma rápida de obter o tempo atual):
-- console.log(Date.now()); // exemplo: 1712134496789 (milissegundos desde 1970)

- Extraindo partes da data:
-- console.log("Ano:", now.getFullYear()); // Ano: 2024
-- console.log("Mês:", now.getMonth() + 1); // Mês: 6 (getMonth retorna 0-11, pois janeiro = 0 nesse caso, então somamos 1)
-- console.log("Dia do mês:", now.getDate()); // Dia do mês: 1
-- console.log("Dia da semana:", now.getDay()); // Dia da semana: 6 (0 = domingo, 1 = segunda, ..., 6 = sábado)
-- console.log("Horas:", now.getHours()); // Horas: 12
-- console.log("Minutos:", now.getMinutes()); // Minutos: 34
-- console.log("Segundos:", now.getSeconds()); // Segundos: 56
-- console.log("Milissegundos:", now.getMilliseconds()); // Milissegundos: 789

- Exibindo de forma localizada (respeita idioma e fuso horário do usuário):
-- console.log("Data formatada:", now.toLocaleString(pt-BR)); // Data formatada: 01/06/2024 12:34:56
-- console.log("Data formatada:", now.toLocaleDateString(pt-BR)); // Data formatada: 01/06/2024
-- console.log("Hora formatada:", now.toLocaleTimeString(pt-BR)); // Hora formatada: 12:34:56
-- console.log("Data formatada:", now.toLocaleString(en-US)); // Data formatada: 6/1/2024, 12:34:56 PM

- Criando uma data específica:
new Date(ano, mês, dia, hora, minuto, segundo) - mês começa em 0
-- const natal = new Date(2026, 11, 25); // 25 de dezembro de 2026
-- console.log("Natal:", natal.toLocaleString(pt-BR)); // Natal: 25/12/2026 00:00:00

- Criando data a partir dde string no formato ISO 8601 (YYYY-MM-DDTHH:mm:ss.sssZ):
-- const dataEspecifica = new Date("2025-05-15T10:30:00Z"); // 15 de maio de 2025 às 10:30 UTC
-- console.log("Data específica:", dataEspecifica.toLocaleString(pt-BR)); // Data específica: 15/05/2025 07:30:00 (ajustado para fuso horário local)

- Comparando datas:
-- subtrair dois objetos Date retorna a diferença em milissegundos
-- const data1 = new Date("2024-01-01");
-- const data2 = new Date("2024-12-31");
-- const diferenca = data2 - data1;
-- const diferencaDias = Math.ceil(diferenca / (1000 * 60 * 60 * 24)); // convertendo milissegundos para dias
-- //console.log("Diferença em milissegundos:", diferenca);
-- //console.log("Diferença em dias:", diferenca / (1000 * 60 * 60 * 24)); // ms seg min h dia

- Modificando partes de uma data:
--let aniversario = new Date(1990, 5, 20); // 20 de junho de 1990
--aniversario.setFullYear(1991); // altera o ano para 1991
--aniversario.setMonth(0); // altera o mês para janeiro (0)
--aniversario.setDate(15);
--console.log("Aniversário modificado:", aniversario.toLocaleString(pt-BR)); // Aniversário modificado: 15/01/1991 00:00:00

================================================================
BLOCO 9 - STRINGS (trabalhando com texto)
================================================================
String é um tipo de dado que representa uma sequência de caracteres.
- Criando strings:
-- const texto1 = "Olá, mundo!";

- COMPRIMENTO - numero de caracteres (espaços e simbolos contam):
-- console.log("Comprimento:", texto1.length); // Comprimento: 13

- ACESSANDO CARACTERES - usando colchetes [] e índice (começa em 0):
-- console.log("Primeiro caractere:", texto1[0]); // Primeiro caractere: O
-- console.log("Último caractere:", texto1[texto1.length - 1]); // Último caractere: ! 
-- console.log("Último caractere:", texto1.at(-1)); // Último caractere: ! (usando método at para acessar o último caractere)

- MAIUSCULAS E MINÚSCULAS:
-- console.log("Maiúsculas:", texto1.toUpperCase()); // Maiúsculas: OLÁ, MUNDO!
-- console.log("Minúsculas:", texto1.toLowerCase()); // Minúsculas: olá, mundo!

- VERIFICAR conteúdo:
-- console.log("Contém 'mundo'?", texto1.includes("mundo")); // Contém 'mundo'? true
-- console.log("Contém 'Mundo'?", texto1.includes("Mundo")); // Contém 'Mundo'? false (case-sensitive)
-- console.log("Inicia com 'Olá'?", texto1.startsWith("Olá")); // Inicia com 'Olá'? true
-- console.log("Termina com '!'?", texto1.endsWith("!")); // Termina com '!'? true

- ENCONTRAR POSIÇÃO DE SUBSTRING:
-- console.log("Índice de 'mundo':", texto1.indexOf("mundo")); // Índice de 'mundo': 5
-- console.log("Índice de 'Mundo':", texto1.indexOf("Mundo")); // Índice de 'Mundo': -1 (não encontrado)
-- console.log("Índice de 'o':", texto1.indexOf("o")); // Índice de 'o': 4 (primeira ocorrência)
-- console.log("Último índice de 'o':", texto1.lastIndexOf("o")); // Último índice de 'o': 8

- RECORTAR PARTES DA STRING - usando slice(início, fim) - o índice de fim não é incluído (aceita índices negativos):
-- console.log("Slice (0, 5):", texto1.slice(0, 5)); // Slice (0, 5): Olá,
-- console.log("Slice (7):", texto1.slice(7)); // Slice (7): mundo! pois slice sem segundo argumento vai até o final da string
-- console.log("Slice (-6):", texto1.slice(-6)); // Slice (-6): mundo! (usando índice negativo para contar a partir do final - para entender melhor, pense que -1 é o último caractere, -2 é o penúltimo, e assim por diante)

- SUBSTITUIR PARTES DA STRING - usando replace(substring, novaSubstring) - substitui apenas a primeira ocorrência:
-- console.log("Replace 'mundo' por 'universo':", texto1.replace("mundo", "universo")); // Replace 'mundo' por 'universo': Olá, universo!
-- console.log("Replace 'o' por '0':", texto1.replace("o", "0")); // Replace 'o' por '0': Olá, mund0! (substitui apenas a primeira ocorrência de 'o')
-- console.log("Replace todas as ocorrências de 'o'por '0':", texto1.replaceAll("o", "0")); // Replace todas as ocorrências de 'o' por '0': Olá, mund0! (substitui todas as ocorrências de 'o')
-- console.log("Replace usando regex para substituir todas as ocorrências de 'o' por '0':", texto1.replace(/o/g, "0")); // Replace usando regex para substituir todas as ocorrências de 'o' por '0': Olá, mund0! (usando expressão regular com flag 'g' para substituir globalmente)

- DIVIDIR EM PARTES E RETORNAR ARRAY - usando split(separador):
-- console.log("Split por vírgula:", texto1.split(",")); // Split por vírgula: [ 'Olá', ' mundo!' ]
-- console.log("Split por espaço:", texto1.split(" ")); // Split por espaço: [ 'Olá,', 'mundo!' ]
-- console.log("Número de palavras:", texto1.split(" ").length); // Número de palavras: 2 (contando o número de palavras dividindo por espaço)

- REPETIR E PREENCHER - usando repeat(vezes) e padStart(tamanho, caractere) / padEnd(tamanho, caractere):
-- console.log("Repetir 3 vezes:", texto1.repeat(3)); // Repetir 3 vezes: Olá, mundo!Olá, mundo!Olá, mundo!
-- console.log("PadStart para 20 caracteres:", texto1.padStart(20)); // PadStart para 20 caracteres:       Olá, mundo! (adiciona espaços no início para totalizar 20 caracteres)
-- console.log("PadEnd para 20 caracteres:", texto1.padEnd(20, ".")); // PadEnd para 20 caracteres: Olá, mundo!....... (adiciona pontos no final para totalizar 20 caracteres)

- REMOVER espaços das pontas (essencial ao tratar input do usuário) - usando trim():
-- const texto2 = "   Olá, mundo!   ";
-- console.log("Antes do trim:", texto2); // Antes do trim:    Olá, mundo!   
-- console.log("Depois do trim:", texto2.trim()); // Depois do trim: Olá, mundo! (remove os espaços no início e no final da string)
-- console.log("TrimStart:", texto2.trimStart()); // TrimStart: Olá, mundo!    (remove os espaços apenas no início)
-- console.log("TrimEnd:", texto2.trimEnd()); // TrimEnd:    Olá, mundo! (remove os espaços apenas no final)

- TEMPLATE LITERALS - usando crases `` e ${expressão} para interpolação de variáveis:
-- const nome = "Alice";
-- const idade = 30;
-- console.log(`Meu nome é ${nome} e tenho ${idade} anos.`); // Meu nome é Alice e tenho 30 anos. (usando template literals para criar uma string com variáveis de forma mais legível)

================================================================
RESUMO FINAL - O que aprndemos hoje:
================================================================

- console.log() para exibir mensagens no terminal.
- Tipos de dados: primitivos (string, number, boolean, null, undefined, symbol, bigint) e referência (objetos, arrays, funções).
- Variáveis: var, let e const para armazenar valores.
- Operadores: aritméticos, comparação, lógicos e ternário.
- Incremento e decremento: ++ e -- para somar ou subtrair 1.
- Conversão de tipos: automática (coerção) e manual (casting).
- Math: funções matemáticas como random(), floor(), ceil(), round(), abs(), max(), min(), pow(), sqrt() e constantes como PI e E.
- Date: trabalhando com datas e horas, extraindo partes da data, formatando e comparando datas.
- Strings: manipulando texto, acessando caracteres, verificando conteúdo, recortando, substituindo, dividindo, repetindo e usando template literals para interpolação.

*/