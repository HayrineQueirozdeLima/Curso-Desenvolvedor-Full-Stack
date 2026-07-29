/* 
Objeto é uma coleção de propriedades, 
e uma propriedade é uma associação entre 
um nome (ou chave) e um valor. 
O valor de uma propriedade 
pode ser uma função, o que é então 
considerado um método do objeto.

let objeto = {
    propriedade1: valor1,
    propriedade2: valor2,
    metodo1: function() {
        // código do método
    }
};

No exemplo acima, "objeto" é um objeto 
que possui duas propriedades (propriedade1 e propriedade2) 
e um método (metodo1). 
As propriedades podem conter qualquer tipo de valor, 
incluindo outros objetos, arrays, ou funções. 
Os métodos são funções associadas a um objeto que podem 
acessar e manipular as propriedades do objeto.

Geralmente propriedades que contém outros objetos são chamados de objetos aninhados:
let pessoa = {
    nome: "João",
    idade: 30,
    endereco: {
        rua: "Rua A",
        numero: 123
    }
};
Sendo assim, "endereco" é um objeto aninhado dentro do objeto "pessoa".
Objetos aninhados são úteis para organizar dados relacionados de forma hierárquica,
permitindo uma estrutura mais clara e fácil de entender. 
Eles permitem que você agrupe informações relacionadas, 
como os detalhes de um endereço dentro de um objeto de pessoa, 
facilitando o acesso e a manipulação desses dados.

Propriedades que contém arrays são chamados de arrays aninhados:
let pessoa = {
    nome: "Maria",
    idades: [25, 30, 35]
};
Neste exemplo, "idades" é um array aninhado dentro do objeto "pessoa".
Arrays aninhados são úteis para armazenar listas de dados relacionados dentro de um objeto, 
permitindo que você organize e acesse facilmente conjuntos de informações, 
como uma lista de idades associada a uma pessoa.
São especialmente úteis quando você precisa representar múltiplos valores para uma única propriedade,
como uma coleção de itens, uma série de eventos ou uma sequência de dados relacionados.
Outro exemplo de array aninhado seria:
let empresa = {
    nome: "Tech Solutions",
    departamentos: [
        {
            nome: "Desenvolvimento",
            funcionarios: [
                {
                    nome: "Carlos",
                    cargo: "Desenvolvedor"
                }
            ]
        }
    ]
};
Neste exemplo, "departamentos" é um array aninhado dentro do objeto "empresa",
e "funcionarios" é um array aninhado dentro do objeto "departamentos".
Mais umexemplo mais simples de array aninhado seria:
let escola = {
    nome: "Escola ABC",
    alunos: [
        {
            nome: "Ana",
            nota: 8.5
        }, 
        {
            nome: "Pedro",
            nota: 7.0
        }, 
        {
            nome: "Maria",
            nota: 9.0
        }
    ]
};
Neste exemplo, "alunos" é um array aninhado dentro do objeto "escola",e cada elemento do array "alunos" é um objeto que representa um aluno, 
com suas próprias propriedades "nome" e "nota". 
Esse tipo de estrutura é comum para representar dados complexos, 
como uma lista de alunos em uma escola, onde cada aluno tem suas próprias informações associadas.
*/

let aluno = {
    nome: "João",
    idade: 20,
    matriculado: true,
    cursos: ["Matemática", "Física", "Química"], // Array aninhado
    endereco: {
        rua: "Rua A",
        numero: 123,
        cidade: "São Paulo"
    },
    apresentar: function () { // Método do objeto
        console.log(`Olá, meu nome é ${this.nome} e tenho ${this.idade} anos.`);
    }// "this" é uma palavra-chave que se refere ao objeto atual, permitindo acessar suas propriedades dentro do método.
};

console.log(aluno.nome);// Acessando a propriedade "nome" do objeto "aluno"
console.log(aluno.idade);// Acessando a propriedade "idade" do objeto "aluno"
console.log(aluno.matriculado);// Acessando a propriedade "matriculado" do objeto "aluno"
console.log(aluno.cursos[1]);// Acessando o segundo elemento do array "cursos" do objeto "aluno"
console.log(aluno.endereco.cidade);// Acessando a propriedade "cidade" do objeto "endereco" dentro do objeto "aluno"
console.log(aluno["endereco"]["rua"]);// Acessando a propriedade "rua" do objeto "endereco" usando notação de colchetes
aluno.apresentar();// Chamando o método "apresentar" do objeto "aluno"


/* =====================================================================
   RESUMO DA AULA:
   - Estrutura de Objetos: Coleções de dados complexos organizados em pares de chave (nome) e valor. Servem para modelar entidades e dados estruturados no JavaScript.
   - Propriedades vs. Métodos: Quando o valor associado a uma chave é um tipo de dado comum (string, número, etc.), chamamos de propriedade. Quando o valor é uma função que executa uma ação, chamamos de método.
   - O Conceito do `this`: Palavra-chave contextual fundamental. Dentro de um método de objeto, o `this` referencia o próprio objeto executor, permitindo recuperar ou modificar seus próprios atributos de forma dinâmica.
   - Notações de Acesso: Demonstração prática de como ler valores utilizando a Notação de Ponto (`aluno.nome`) e a Notação de Colchetes (`aluno["endereco"]["rua"]`). Esta última é vital quando precisamos usar chaves dinâmicas armazenadas em variáveis.
   - Estruturas Aninhadas (Nesting):
     - Objetos Aninhados: Embutir um objeto dentro de outro (como `endereco` em `aluno`) para representar hierarquias claras.
     - Arrays Aninhados: Listas dentro de objetos (como `cursos` ou coleções de objetos como a lista de `alunos` da escola), permitindo criar estruturas de dados complexas similares a tabelas de banco de dados e APIs REST (JSON).
   ===================================================================== */