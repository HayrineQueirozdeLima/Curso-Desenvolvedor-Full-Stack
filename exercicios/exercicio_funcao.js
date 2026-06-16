/*
1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
passadas como parâmetros.
Instruções:
 Criar uma função que receba três parâmetros (nota1, nota2,nota3);
A função deve calcular a média das três notas e retornar o valor;
Chamar a função e exibir a média no console. 
*/ 
function media3Notas(nota1, nota2, nota3){
let media = (nota1 + nota2 + nota3)/3;

return media;
}

console.log(media3Notas(20,80,60));
console.log(media3Notas(10,50,70));
console.log(media3Notas(90,80,70));

/*
2. Função com parâmetros: Criar uma função que verifique se uma pessoa é maior de
idade ou menor de idade.
Instruções:
 Criar uma função chamada que receba um parâmetro (idade);
Se a idade for 18 ou mais, a função deve retornar a mensagem "Você é maior de idade";
Se a idade for menor que 18, a função deve retornar a mensagem "Você é menor de idade";
Chamar a função passando uma idade e exibir o resultado no console.
*/ 

function maiorIdade(idade){
    if (idade >= 18){
        return "Você é maior de idade";
    }else{
        return "Você é menor de idade";
    }
}

console.log(maiorIdade(30));// "Você é maior de idade"
console.log(maiorIdade(18));// "Você é maior de idade"
console.log(maiorIdade(17));// "Você é menor de idade"
console.log(maiorIdade(15));// "Você é menor de idade"

/*
3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
operador e retorne o resultado da operação.
Instruções:
Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
A função deve retornar o resultado da operação;
Chamar a função com diferentes operadores e exibir os resultados no console.
*/ 

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