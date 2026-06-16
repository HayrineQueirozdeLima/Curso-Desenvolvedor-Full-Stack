function nomeDaFuncao() {
    // código da função
    console.log("Função chamada!");
}
// para chamar a função, basta usar o nome da função seguido de parênteses
nomeDaFuncao(); // isso vai imprimir "Função chamada!" no console

// funções podem receber parâmetros, que são valores que a função pode usar para realizar suas operações
function saudacao(nome) {
    console.log(`Olá, ${nome}!`);
}
saudacao("Alice"); // isso vai imprimir "Olá, Alice!" no console
saudacao("Bob"); // isso vai imprimir "Olá, Bob!" no console

// funções também podem retornar valores, ou seja, elas podem produzir um resultado que pode ser usado em outras partes do código
function soma(a, b) {
    return a + b;
}
let resultado = soma(3, 5); // isso vai armazenar o valor 8 na variável resultado
console.log(resultado); // isso vai imprimir 8 no console

// funções podem ser usadas para organizar o código e torná-lo mais legível e reutilizável
// por exemplo, podemos criar uma função para calcular a área de um círculo
function areaDoCirculo(raio) {
    return Math.PI * raio * raio;
}
let area = areaDoCirculo(5); // isso vai armazenar o valor da área do círculo com raio 5 na variável area
console.log(area); // isso vai imprimir o valor da área no console

function soma_aula(a, b) {
    /*
    return: entrega o resultado da função para quem a chamou, ou seja, o valor que a função produz.
    O código que vem depois do return não é executado, pois a função já entregou o resultado.
    Esse resultado pode ser guardado em uma variável ou usado diretamente em outras partes do código.
    Eu posso mostrar ele no console ou enviar ele para outra função, por exemplo.
    */

    if ((a + b) > 6) {
        return "Aprovaddo"; 
    } else {
        return "Reprovado";
    }
    return a + b;
}



/*
1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
passadas como parâmetros.
Instruções:
 Criar uma função que receba três parâmetros (nota1, nota2,nota3);
A função deve calcular a média das três notas e retornar o valor;
Chamar a função e exibir a média no console. 
*/ 
// function media3Notas(nota1, nota2, nota3){
// let media = (nota1 + nota2 + nota3)/3;

// return media;
// }

// console.log(media3Notas(20,80,60));
// está correta a função, mas o resultado da média é 53.333333333333336, o que pode ser arredondado para 53.33 usando a função toFixed(2) para limitar a duas casas decimais.
function media3Notas(nota1, nota2, nota3){
let media = (nota1 + nota2 + nota3)/3;
media = media.toFixed(2);
return media;
}

console.log(media3Notas(20,80,60));


/*
3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
operador e retorne o resultado da operação.
Instruções:
Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
A função deve retornar o resultado da operação;
Chamar a função com diferentes operadores e exibir os resultados no console.
*/ 

//switch case, funciona assim: o switch avalia a expressão (no caso, o operador) e compara com os casos definidos. Quando encontra um caso que corresponde à expressão, ele executa o bloco de código associado a esse caso. Se nenhum caso corresponder, ele pode executar um bloco de código padrão (default).
//exemplo de switch case
// switch (operador) {
//     case '+':
//         return num1 + num2;
//     case '-':
//         return num1 - num2;
//     case '*':
//         return num1 * num2;
//     case '/':
//         return num1 / num2;
//     default:
//         return "Operador inválido";
// }

function fazerConta(n1, n2, operador){
 switch (operador){
case "+":
return n1+n2;
case "-":
return n1-n2;
case "/":
return n1/n2;
case "*":
return n1*n2;
default:
return "Operador inválido! Por favor, defina '+', '-', '/', ou '*'.";
}
}

console.log(fazerConta(2,2,"+"));
console.log(fazerConta(2,2,"-"));
console.log(fazerConta(2,2,"/"));
console.log(fazerConta(2,2,"*"));
console.log(fazerConta(2,2,"%"));
