/*
1. Desenhando um sistema de impressão (Fila de Impressão)
Instruções:
● Criar uma fila que simula o processo de uma fila de impressão;
● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila.
*/

class Impressora {
    constructor() {
        this.impressoes = [];
    }

    adicionarTarefa(elemento) {
        this.impressoes.push(elemento);
        console.log(`Tarefa adicionada: ${elemento}`);
    }

    imprimir() {
        if (this.vazio()) {
            console.log('Não há mais tarefas de impressões na fila');
            return;
        }

        const documento = this.impressoes.shift();
        console.log(`Imprimindo o arquivo: ${documento}`);
    }

    vazio() {
        return this.impressoes.length === 0;
    }
}

const impressora = new Impressora();

impressora.adicionarTarefa("Documento 1");
impressora.adicionarTarefa("Documento 2");
impressora.adicionarTarefa("Documento 3");
impressora.imprimir();
impressora.imprimir();
impressora.imprimir();
impressora.imprimir();

/*
2. Implementação de deque
Instruções:
● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.

Após isso, remover elementos de ambas as extremidades e mostrar o estado da
estrutura após cada operação.
*/

class Deque {
    constructor() {
        this.itens = [];
    };

    addFront(element) {
        this.itens.unshift(element);
    };

    addBack(element) {
        this.itens.push(element);
    };

    removeFront() {
        return this.itens.shift();
    };

    removeBack() {
        return this.itens.pop();
    };

    isEmpty() {
        return this.size() === 0;
    };

    size() {
        return this.itens.length;
    };

    peekFront() {
        if (this.isEmpty()) {
            return 'A fila  está vazia';
        };
        return this.itens[0];
    };

    peekBack() {
        if (this.isEmpty()) {
            return 'A fila  está vazia';
        };
        return this.itens[this.size() - 1];
    };

    printDeque() {
        if (this.isEmpty()) {
            return 'A fila  está vazia';
        };
        console.log(`Estado atual da fila: ${this.itens.join(' ; ')}`);
    };
};

const deque = new Deque();

deque.addFront(1);
deque.addFront(2);
deque.addBack(3);

console.log(`O primeiro da fila é  "${deque.peekFront()}"`);
console.log(`O último da fila é  "${deque.peekBack()}"`);
deque.printDeque();
console.log(`Removendo o primeiro da fila: "${deque.removeFront()}"`);
deque.printDeque();
console.log(`Removendo o último da fila: "${deque.removeBack()}"`);
deque.printDeque();

