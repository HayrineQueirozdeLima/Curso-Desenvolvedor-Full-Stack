const prompt = require('prompt-sync')();

/*
1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.
*/
let numero = parseInt(prompt("Digite um número inteiro: "));
if (numero % 2 == 0) {
    console.log("O número é par");
} else {
    console.log("O número é ímpar");
};

/*
2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.
*/

let idade = 24;
if (idade < 12) {
    console.log("Criança");
} else if (idade < 18) {
    console.log("Adolescente");
} else if (idade < 60) {
    console.log("Adulto");
} else {
    console.log("Idoso");
};

/*
3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if.
*/

let nota = 7;
if (nota >= 7) {
    console.log("Aprovado");
} else if (nota >= 5) {
    console.log("Recuperação");
} else {
    console.log("Reprovado");
};

/*
4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.
*/


console.log("--------------Cardápio--------------");
console.log("Digite '1' para escoher 'Salgado'");
console.log("Digite '2' para escoher 'Doce'");
console.log("Digite '3' para escoher 'Bebida'");
console.log("-----------------------------------");
let opcao = parseInt(prompt("Digite o número da opção: "));
console.log(`Opção selecionada: ${opcao}`);

switch (opcao) {
    case 1:
        console.log("Você escolheu 'Salgado'");
        break;
    case 2:
        console.log("Você escolheu 'Doce'");
        break;
    case 3:
        console.log("Você escolheu 'Bebida'");
        break;
    default:
        console.log("Opção inválida");
};


/*
5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.
*/

let peso = 68;
let altura = 1.60;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Baixo peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obesidade");
}

/*
6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/

console.log("--------------Triângulo--------------");
let ladoA = 5;
let ladoB = 2;
let ladoC = 3;
if (ladoA < (ladoB + ladoC) && ladoB < (ladoA + ladoC) && ladoC < (ladoA + ladoB)) {
    console.log("Os lados formam um triângulo.");
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("Triângulo eqüilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
} else {
    console.log("Os lados não formam um triângulo.");
}

/*
7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.
*/

let numero = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar):"));
let soma = 0;
let contador = 0;

while (numero !== 0) {
    soma += numero;
    contador++;
    numero = parseFloat(prompt("Digite um número decimal (ou 0 para finalizar):"));
}
if (contador > 0) {
    let media = soma / contador;
    console.log(`A média aritmética dos números digitados é: ${media}`);
} else {
    console.log("Nenhum número foi digitado.");
}

/*
8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.
*/

let numero = parseInt(prompt("Digite um número para calcular o fatorial:"));
let resultado = 1;
if (numero < 0) {
    console.log("Fatorial não é definido para números negativos.");
} else if (numero === 0 || numero === 1) {
    console.log(`O fatorial de ${numero} é 1.`);
} else {
    for (let i = numero; i >= 1; i--) {
        resultado *= i;
    }
    console.log(`O fatorial de ${numero} é ${resultado}.`);
};

/*
9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.
*/

let termos = 10;
let a = 0;
let b = 1;

for (let i = 1; i <= termos; i++) {
    console.log(a);
    let c = a + b;
    a = b;
    b = c;
};

/*
10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.
*/

// let list_nomes = [];
// for (let i = 0; i < 7; i++){
//     let nome = prompt('Nome: ');
//     list_nomes.push(nome);
// };
// console.log(list_nomes);
// let inversa = [];
// for (let i = list_nomes.length - 1; i >=0; i--){
//     inversa.push(list_nomes[i]);
// };
// console.log(inversa);

let list_nomes = [];
for (let i = 0; i < 7; i++) {
    let nome = prompt('Nome: ');
    list_nomes.push(nome);
}
let inversa = list_nomes.reverse();
console.log("Lista invertida:", inversa);


/*
11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.
*/

let nomes = [];
let idades = [];
let menores = [];

for (let i = 0; i < 9; i++) {
    let nome = prompt('Nome: ');
    nomes.push(nome);
    let idade = prompt('Idade: ');
    idades.push(idade);

    if (idade < 18) {
        menores.push(`${nome}, ${idade}`);
    }
};
console.log(nomes);
console.log(idades);
console.log(menores);



/*
12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: 
peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.

*/

function calcPeso(alt, sexo) {
    console.log(`Altura informada: ${alt}`);
    console.log(`Sexo informado: ${sexo}`);
    let peso_ideal;
    if (sexo === 'FEMI') {
        peso_ideal = 62.1 * alt - 44.7;
        return 'Peso ideal: ' + peso_ideal;
    } else if (sexo === 'MASC') {
        peso_ideal = 72.7 * alt - 58;
        return 'Peso ideal: ' + peso_ideal;
    } else {
        return 'Sexo informado inválido. Por Favor, digite "FEMI" (para feminino) ou "MASC" (para masculino).';
    };
};

console.log(calcPeso(1.60, 'FEMI'));
console.log(calcPeso(1.73, 'MASC'));
console.log(calcPeso(184, 'masculino'));

/*
13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).
*/

let funcionario = [];

let total_empregados = 3; //coloquei 3 empregados para testes, mas seguindo o exercício seria 80 mesmo...

for (let i = 0; i < total_empregados; i++) {
    let matricula = prompt(`[Funcionario ${i + 1}] Digite a matrícula:`);
    let nome = prompt(`[Funcionario ${i + 1}] Digite o nome :`);
    let sal_bruto = parseFloat(prompt(`[Funcionario ${i + 1}] Digite o salário bruto (em reais, sem "R$")`));

    funcionario.push({
        matricula = matricula,
        nome = nome,
        sal_bruto = sal_bruto
    });
};

function gerarContraCheque(funcionario) {
    let ded_inss = funcionario.sal_bruto * 0.12;
    let sal_liquido = funcionario.sal_bruto - ded_inss;

    console.log("=========================================");
    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$ ${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$ ${deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$ ${salarioLiquido.toFixed(2)}`);
    console.log("=========================================");
}

console.log("\n--- EMISSÃO DE CONTRACHEQUES ---");
for (let i = 0; i < funcionarios.length; i++) {
    emitirContracheque(funcionarios[i]);
}

/*
14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.
*/

function realizarPesquisa() {
    let total_pessoas = 0;
    let soma_salarios = 0;
    let soma_filhos = 0;
    let maior_salario = 0;
    let pessoas_ate_350 = 0;

    let nome = prompt('Nome: ');
    let salario = parseFloat(prompt(`${nome}, qual o valor do salário?`));

    while (salario >= 0) {
        total_pessoas++;
        soma_salarios += salario;

        let filhos = parseInt(prompt('Quantos filhos?'));
        soma_filhos += filhos;

        if (salario <= 350) {
            pessoas_ate_350++;
        }

        if (salario > maior_salario) {
            maior_salario = salario;
        }

        nome = prompt('Nome da próxima pessoa:');
        salario = parseFloat(prompt(`${nome}, qual o valor do salário? (Digite um valor negativo para parar):`));
    }

    if (total_pessoas > 0) {
        let media_salarios = soma_salarios / total_pessoas;
        let media_filhos = soma_filhos / total_pessoas;
        let perc_ate_350 = (pessoas_ate_350 * 100) / total_pessoas;

        console.log("\n--- RESULTADO DA PESQUISA ---");
        console.log(`Média de salário da população: R$ ${media_salarios.toFixed(2)}`);
        console.log(`Média do número de filhos: ${media_filhos.toFixed(1)}`);
        console.log(`Maior salário: R$ ${maior_salario.toFixed(2)}`);
        console.log(`Percentual de pessoas com salário até R$350,00: ${perc_ate_350.toFixed(2)}%`);
    } else {
        console.log("Nenhum dado válido foi inserido.");
    }
}

/*
15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos.
*/

let matrizIdentidade = [];


for (let i = 0; i <= 6; i++) {
    let linha = [];

    for (let j = 0; j <= 6; j++) {
        if (i === j) {
            linha.push(1);
        } else {
            linha.push(0);
        }
    }

    matrizIdentidade.push(linha);
}

console.log("--- MATRIZ IDENTIDADE 7x7 ---");
for (let i = 0; i < matrizIdentidade.length; i++) {
    // O .join(" ") junta os números da linha com um espaço entre eles
    console.log(matrizIdentidade[i].join(" "));
}

/*
16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.
*/

// Criando uma matriz 6x8 para testes
let M = [
    [1, -2, 3, 4, -5, 6, 7, -8],
    [9, 10, 11, 12, 13, 14, 15, 16],
    [-1, -2, -3, -4, 5, 6, 7, 8],
    [0, 1, 2, 3, 4, 5, 6, 7],
    [-9, -10, -11, 0, 1, 2, 3, 4],
    [1, 2, 3, 4, 5, 6, 7, -1]
];

let C = [];
for (let i = 0; i < M.length; i++) {
    let contNegativos = 0;

    for (let j = 0; j < M[i].length; j++) {
        if (M[i][j] < 0) {
            contNegativos++;
        }
    }

    C.push(contNegativos);
}

console.log("Vetor C (Quantidade de negativos por linha):", C);

/*
17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.
*/

let pessoa = {
    nome: "Hayrine Queiroz de Lima",
    idade: 22
};

console.log(pessoa.idade);

console.log(pessoa);
pessoa.email = "hayrineqlima@gmail.com";

console.log(pessoa);

/*
18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.
*/

let aniversario = {
    nascimento: 2003,
    mes: 'agosto',
    aniversariantes: ['Hayrine', 'Raimunda', 'Fábio', 'Gabriel'],
    dias: [7, 10, 25, 22]
};

function retornarArraysObjeto(obj) {
    let obj_array = {}

    for (let chave in obj) {
        if (Array.isArray(obj[chave])) {
            obj_array[chave] = obj[chave];
        }
    }
    return obj_array;
}

console.log(retornarArraysObjeto(aniversario));

/*
19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.
*/

function combinarObjetos(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

let produtoLojaA = { nome: "Camiseta", preco: 49.90, estoque: 20 };
let produtoLojaB = { preco: 39.90, cor: "Azul" };

let produtoCombinado = combinarObjetos(produtoLojaA, produtoLojaB);
console.log(produtoCombinado);


/*
20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.
*/

function contarFrequencia(listaStrings) {
    let resultado = {};

    for (let i = 0; i < listaStrings.length; i++) {
        let elemento = listaStrings[i];

        if (resultado[elemento]) {
            resultado[elemento]++;
        } else {
            resultado[elemento] = 1;
        }
    }

    return resultado;
}


let frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];
console.log(contarFrequencia(frutas));

/*
21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.
*/

function sumarizarVendas(vendas) {
    let resumo = {};

    for (let i = 0; i < vendas.length; i++) {
        let vendaAtual = vendas[i];
        let vendedor = vendaAtual.vendedor;
        let valor = vendaAtual.valor;

        if (resumo[vendedor]) {
            resumo[vendedor] += valor;
        } else {
            resumo[vendedor] = valor;
        }
    }

    return resumo;
}

// lista de objetos de teste
let historicoVendas = [
    { vendedor: "Ana", valor: 150.00 },
    { vendedor: "Carlos", valor: 200.00 },
    { vendedor: "Ana", valor: 300.00 },
    { vendedor: "Beatriz", valor: 100.00 },
    { vendedor: "Carlos", valor: 50.00 }
];

console.log(sumarizarVendas(historicoVendas));
