const prompt = require('prompt-sync')();

// 1. Crie um objeto representando um produto com as propriedades: nome, preço,
// categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
// propriedades e seus valores. Em seguida, adicione uma nova propriedade
// desconto ao objeto e exiba o preço final calculado.

let produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    qtd_estoque: 10
}

for (let prop in produto) {
    console.log(`${prop}: ${produto[prop]}`);
}

produto.desconto = 0.1; // 10% de desconto
console.log(`Preço com ${produto.desconto * 100}% de desconto: R$ ${(produto.preco * (1 - produto.desconto)).toFixed(2)}`);

// 2. Crie dois objetos representando personagens de um jogo, cada um com as
// propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
// cada personagem lado a lado e determine qual deles tem maior poder total
// (soma de vida + ataque + defesa).

let personagem1 = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 30,
    defesa: 20
}

let personagem2 = {
    nome: "Mago",
    vida: 80,
    ataque: 50,
    defesa: 10
}

for (let prop in personagem1) {
    console.log(`${prop}: ${personagem1[prop]} | ${personagem2[prop]}`);
}

let poderTotal1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
let poderTotal2 = personagem2.vida + personagem2.ataque + personagem2.defesa;

console.log(`Poder total de ${personagem1.nome}: ${poderTotal1}`);
console.log(`Poder total de ${personagem2.nome}: ${poderTotal2}`);
if (poderTotal1 > poderTotal2) {
    console.log(`${personagem1.nome} tem maior poder total.`);
}
else if (poderTotal2 > poderTotal1) {
    console.log(`${personagem2.nome} tem maior poder total.`);
}
else {
    console.log(`Ambos os personagens têm o mesmo poder total.`);
}

// 3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
// experiência. Use for...in para listar todos os dados. Com base nos anos de
// experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
// anos = 10%, acima de 5 anos = 15%.

let funcionario = {
    nome: "Rafaela Silva",
    cargo: "Desenvolvedora Frontend",
    salario: 5000.00,
    anos_experiencia: 4
};

for (let prop in funcionario) {
    console.log(`${prop}: ${funcionario[prop]}`);
}

let percentual_bonus = 0;

if (funcionario.anos_experiencia <= 2) {
    percentual_bonus = 0.05; // 5%
} else if (funcionario.anos_experiencia >= 3 && funcionario.anos_experiencia <= 5) {
    percentual_bonus = 0.10; // 10%
} else {
    percentual_bonus = 0.15; // 15%
}

let valor_bonus = funcionario.salario * percentual_bonus;
console.log(`Bônus anual ganho: R$ ${valor_bonus.toFixed(2)}`);

// 4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
// no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
// listar o inventário completo. Permita que o usuário informe um item para usar:
// reduza a quantidade em 1 ou exiba "item esgotado" se for zero.

let inventario = { espada: 1, poção: 5, escudo: 2 };

for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}

let itemParaUsar = prompt("Informe o item que deseja usar:");

if (inventario[itemParaUsar] !== undefined) {
    if (inventario[itemParaUsar] > 0) {
        inventario[itemParaUsar]--;
        console.log(`Você usou 1 ${itemParaUsar}. Restam: ${inventario[itemParaUsar]}`);
    } else {
        console.log("item esgotado");
    }
} else {
    console.log("Item não encontrado no inventário.");
}

// 5. Crie um objeto representando o orçamento mensal de uma pessoa, com
// categorias como alimentação, transporte, lazer e saúde, cada uma com valor
// planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
// uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.

let orcamento = {
    alimentacao: { planejado: 600, gasto: 550 },
    transporte: { planejado: 250, gasto: 300 },
    lazer: { planejado: 200, gasto: 200 },
    saude: { planejado: 400, gasto: 150 }
};

let totalPlanejado = 0;
let totalGasto = 0;

for (let categoria in orcamento) {
    let dados = orcamento[categoria];
    totalPlanejado += dados.planejado;
    totalGasto += dados.gasto;

    if (dados.gasto <= dados.planejado) {
        console.log(`${categoria}: Dentro do orçamento`);
    } else {
        console.log(`${categoria}: Acima do orçamento`);
    }
}

let saldoGeral = totalPlanejado - totalGasto;
console.log(`Saldo geral do mês: R$ ${saldoGeral.toFixed(2)}`);

// 6. Crie um array de objetos representando músicas, cada uma com título, artista e
// duração em segundos. Use for...of para exibir cada música no formato "Artista —
// Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
// mesmo formato.

let musicas = [
    { titulo: "Bohemian Rhapsody", artista: "Queen", duracao: 355 },
    { titulo: "Hotel California", artista: "Eagles", duracao: 390 },
    { titulo: "Imagine", artista: "John Lennon", duracao: 183 }
];

function formatarTempo(segundos) {
    let minutos = Math.floor(segundos / 60);
    let segs = segundos % 60;
    return `${minutos.toString().padStart(2, '0')}:${segs.toString().padStart(2, '0')}`;
}

for (let musica of musicas) {
    console.log(`${musica.artista} — ${musica.titulo} (${formatarTempo(musica.duracao)})`);
}

let duracaoTotal = 0;

musicas.forEach(function (musica) {
    duracaoTotal += musica.duracao;
});

console.log(`Duração total: ${formatarTempo(duracaoTotal)}`);

// 7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
// cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
// forEach para calcular e exibir separadamente a média dos aprovados e a média
// dos reprovados.

let alunos = [
    { nome: "Carlos", nota: 8.5 },
    { nome: "Ana", nota: 6.2 },
    { nome: "Bruno", nota: 4.5 },
    { nome: "Julia", nota: 9.0 },
    { nome: "Marcos", nota: 5.8 },
    { nome: "Fernanda", nota: 3.5 }
];

for (let aluno of alunos) {
    let classificacao = "";
    if (aluno.nota >= 7) {
        classificacao = "Aprovado";
    } else if (aluno.nota >= 5) {
        classificacao = "Recuperação";
    } else {
        classificacao = "Reprovado";
    }
    console.log(`${aluno.nome}: ${classificacao}`);
}

let somaAprovados = 0;
let qtdAprovados = 0;
let somaReprovados = 0;
let qtdReprovados = 0;

alunos.forEach(function (aluno) {
    if (aluno.nota >= 7) {
        somaAprovados += aluno.nota;
        qtdAprovados++;
    } else if (aluno.nota < 5) {
        somaReprovados += aluno.nota;
        qtdReprovados++;
    }
});

let mediaAprovados = qtdAprovados > 0 ? somaAprovados / qtdAprovados : 0;
let mediaReprovados = qtdReprovados > 0 ? somaReprovados / qtdReprovados : 0;

console.log(`Média dos aprovados: ${mediaAprovados.toFixed(2)}`);
console.log(`Média dos reprovados: ${mediaReprovados.toFixed(2)}`);

// 8. Crie um array de objetos representando produtos com nome, preço e quantidade.
// Use forEach para calcular o valor total em estoque de cada produto (preço ×
// quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
// estoque.

let produtos = [
    { nome: "Notebook", preco: 3500, quantidade: 4 },
    { nome: "Mouse Wireless", preco: 120, quantidade: 15 },
    { nome: "Teclado Mecânico", preco: 250, quantidade: 8 }
];

let valorTotalGeral = 0;

produtos.forEach(function (produto) {
    let valorEstoqueProduto = produto.preco * produto.quantidade;
    valorTotalGeral += valorEstoqueProduto;
    console.log(`${produto.nome} | Preço: R$ ${produto.preco} | Qtd: ${produto.quantidade} | Total: R$ ${valorEstoqueProduto}`);
});

console.log(`Valor total geral do estoque: R$ ${valorTotalGeral}`);

// 9. Crie um array de objetos onde cada objeto representa um contato com nome,
// telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
// buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
// uma mensagem de "não encontrado".

let contatos = [
    { nome: "Roberto", telefone: "99111-2222", email: "roberto@email.com" },
    { nome: "Maria", telefone: "99333-4444", email: "maria@email.com" },
    { nome: "Diego", telefone: "99555-6666", email: "diego@email.com" }
];

contatos.forEach(function (contato) {
    console.log(`Nome: ${contato.nome} - Tel: ${contato.telefone} - Email: ${contato.email}`);
});

let buscarNome = prompt("Digite o nome do contato que deseja buscar:");
let contatoEncontrado = null;

for (let contato of contatos) {
    if (contato.nome.toLowerCase() === buscarNome.toLowerCase()) {
        contatoEncontrado = contato;
        break;
    }
}

if (contatoEncontrado) {
    console.log(`Contato Encontrado -> Nome: ${contatoEncontrado.nome} | Tel: ${contatoEncontrado.telefone} | Email: ${contatoEncontrado.email}`);
} else {
    console.log("não encontrado");
}

// 10. Implemente uma pilha usando um array para simular o histórico de um
// navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
// (peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
// cada operação.

let historicoNavegador = [];

function visitar(pagina) {
    historicoNavegador.push(pagina);
    console.log(`Visitando: ${pagina}`);
    paginaAtual();
}

function voltar() {
    if (historicoNavegador.length > 1) {
        let removida = historicoNavegador.pop();
        console.log(`Voltando da página: ${removida}`);
    } else {
        console.log("Não há páginas anteriores no histórico.");
    }
    paginaAtual();
}

function paginaAtual() {
    if (historicoNavegador.length > 0) {
        console.log(`Página atual: ${historicoNavegador[historicoNavegador.length - 1]}`);
    } else {
        console.log("Histórico vazio.");
    }
}

visitar("home.com");
visitar("produtos.com");
visitar("carrinho.com");
visitar("pagamento.com");
voltar();
voltar();

// 11. Implemente uma fila usando um array para simular o atendimento de uma
// clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
// (dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
// exibindo o estado da fila a cada operação.

let filaClinica = [];

function chegarPaciente(nome) {
    filaClinica.push(nome);
    console.log(`Paciente ${nome} entrou na fila.`);
    exibirFila();
}

function chamarProximo() {
    if (filaClinica.length > 0) {
        let proximo = filaClinica.shift();
        console.log(`Chamando paciente: ${proximo}`);
    } else {
        console.log("A fila está vazia.");
    }
    exibirFila();
}

function exibirFila() {
    console.log(`Fila atual: [${filaClinica.join(" -> ")}]`);
}

chegarPaciente("Aline");
chegarPaciente("Bruno");
chegarPaciente("Carla");
chegarPaciente("Daniel");
chegarPaciente("Eduardo");
chamarProximo();
chamarProximo();
chamarProximo();

// 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
// funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
// Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
// exiba a lista antes e depois.

let listaTarefas = null;

function adicionar(tarefa) {
    let novoNo = { valor: tarefa, proximo: null };
    if (listaTarefas === null) {
        listaTarefas = novoNo;
    } else {
        let atual = listaTarefas;
        while (atual.proximo !== null) {
            atual = atual.proximo;
        }
        atual.proximo = novoNo;
    }
}

function remover(tarefa) {
    if (listaTarefas === null) return;

    if (listaTarefas.valor === tarefa) {
        listaTarefas = listaTarefas.proximo;
        return;
    }

    let atual = listaTarefas;
    while (atual.proximo !== null && atual.proximo.valor !== tarefa) {
        atual = atual.proximo;
    }

    if (atual.proximo !== null) {
        atual.proximo = atual.proximo.proximo;
    }
}

function exibir() {
    let atual = listaTarefas;
    let elementos = [];
    while (atual !== null) {
        elementos.push(atual.valor);
        atual = atual.proximo;
    }
    console.log(elementos.join(" -> ") || "Lista vazia");
}

adicionar("Estudar Estrutura de Dados");
adicionar("Comprar café");
adicionar("Enviar relatório");
adicionar("Organizar mesa");

console.log("Antes de remover:");
exibir();

remover("Enviar relatório");

console.log("Depois de remover:");
exibir();