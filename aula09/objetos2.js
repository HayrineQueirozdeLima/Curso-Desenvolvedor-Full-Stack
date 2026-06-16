
// array aninhado em objetos
/*
Em JavaScript, um array aninhado em objetos é uma estrutura de dados onde um objeto contém um array como uma de suas propriedades. 
Esse array pode conter outros objetos ou valores, permitindo a criação de estruturas de dados mais complexas e organizadas.
Eles permitem que você agrupe informações relacionadas, 
como os detalhes de um endereço dentro de um objeto de pessoa, 
facilitando o acesso e a manipulação desses dados.
Propriedades que contém arrays são chamados de arrays aninhados:
*/
let alunos = [
    {
        nome: "João",
        idade: 30,
        endereco: {
            rua: "Rua A",
            numero: 123
        },
        notas: [8.5, 7.0, 9.0]
    },
    {
        nome: "Maria",
        idade: 25,
        endereco: {
            rua: "Rua B",
            numero: 456
        },
        notas: [7.5, 8.0, 8.5]
    }
]

console.log(alunos[0].nome); // Acessando o nome do primeiro aluno
console.log(alunos[1].endereco.rua); // Acessando a rua do endereço do segundo aluno

//utilizando for para acessar os dados dos alunos
for (let i = 0; i < alunos.length; i++) {
    console.log(`Nome: ${alunos[i].nome}`);
    console.log(`Idade: ${alunos[i].idade}`);
    console.log(`Endereço: ${alunos[i].endereco.rua}, ${alunos[i].endereco.numero}`);
    console.log(`Notas: ${alunos[i].notas.join(", ")}`);
    console.log("-------------------------");
}

// utilizando for...of para acessar os dados dos alunos
for (let aluno of alunos) {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Endereço: ${aluno.endereco.rua}, ${aluno.endereco.numero}`);
    console.log(`Notas: ${aluno.notas.join(", ")}`);
    console.log("-------------------------");
}

// utilizando for in para acessar os dados dos alunos
for (let index in alunos) {
    console.log(`Nome: ${alunos[index].nome}`);
    console.log(`Idade: ${alunos[index].idade}`);
    console.log(`Endereço: ${alunos[index].endereco.rua}, ${alunos[index].endereco.numero}`);
    console.log(`Notas: ${alunos[index].notas.join(", ")}`);
    console.log("-------------------------");
}


//utilizando map para acessar os dados dos alunos
alunos.map(aluno => {
    console.log(`Nome: ${aluno.nome}`);
    console.log(`Idade: ${aluno.idade}`);
    console.log(`Endereço: ${aluno.endereco.rua}, ${aluno.endereco.numero}`);
    console.log(`Notas: ${aluno.notas.join(", ")}`);
    console.log("-------------------------");
});
// O método map() é uma função de array em JavaScript que cria um novo array com os resultados da chamada de uma função para cada elemento do array original.
// Ele é frequentemente usado para transformar os elementos de um array, aplicando uma função a cada um deles e retornando um novo array com os resultados. 
// No exemplo acima, estamos usando map() para iterar sobre o array de alunos e imprimir suas informações formatadas no console. 
// Cada elemento do array "alunos" é passado para a função de callback, que acessa as propriedades do aluno e as imprime no console. 
// O resultado é um novo array contendo os valores retornados pela função de callback, 
// mas como estamos apenas imprimindo as informações, o resultado final do map() não é utilizado.

//criamdo metodos
let aluno2 = {
    nome: "João",
    idade: 20,
    nota: 8.5,
    atualizarNota: function(novaNota) { // Método para atualizar a nota do aluno
        this.nota = novaNota; // "this" se refere ao objeto atual, permitindo acessar e modificar a propriedade "nota"
    },
    nome: "Maria",
    idade: 25,
    nota: 7.5,
    atualizarNota: function(novaNota) { // Método para atualizar a nota do aluno
        this.nota = novaNota; // "this" se refere ao objeto atual, permitindo acessar e modificar a propriedade "nota"
    },
};

console.log(aluno2.nota); // Imprime a nova nota do aluno, que agora é 8.5
aluno2.atualizarNota(9.0); // Chamando o método para atualizar a nota do aluno
console.log(aluno2.nota); // Imprime a nova nota do aluno, que agora é 9.0

const entradas = Object.entries(aluno2);
console.log(entradas); // Imprime um array de arrays, onde cada sub-array contém uma chave e seu valor correspondente do objeto "aluno2"
// exemplo de saída: [["nome", "João"], ["idade", 20], ["nota", 9.0], ["atualizarNota", function(novaNota) { ... }]]


for (let [chave, valor] of Object.entries(aluno2)) {
    console.log(`${valor.nome}`); // Imprime o valor da propriedade "nome" do objeto "aluno2" para cada chave-valor do objeto
    console.log(`${valor.idade}`); // Imprime o valor da propriedade "idade" do objeto "aluno2" para cada chave-valor do objeto
}// O loop for...of é usado para iterar sobre os elementos do array retornado por Object.entries(aluno2),
// onde cada elemento é um array contendo uma chave e seu valor correspondente do objeto "aluno2".
// Dentro do loop, estamos acessando as propriedades "nome" e "idade" do valor (que é o objeto "aluno2") e imprimindo seus valores no console. 
// No entanto, como estamos iterando sobre as entradas do objeto, o valor de "valor" será o mesmo para cada iteração, 
// resultando na impressão repetida das mesmas informações do aluno. 
// Para acessar as propriedades corretamente, seria necessário verificar a chave antes de acessar os valores correspondentes.
