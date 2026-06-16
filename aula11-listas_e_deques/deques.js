//deque é uma estrutura de dados que permite a inserção e remoção de elementos em ambas as extremidades, 
//ou seja, tanto no início quanto no final da fila.
class Deque {
    constructor() {
        this.itens = [];
    };

    //Adiciona umm elemento no inicio do deque
    adicionarFrente(elemento) {
        this.itens.unshift(elemento); // o unshift adiciona um elemento no início do array
    };

    //Adiciona um elemento no final do deque
    adicionarFim(elemento) {
        this.itens.push(elemento); // o push adiciona um elemento no final do array
    }

    //Remove e retorna o elemento do início do deque
    removerFrente() {
        return this.itens.shift(); // o shift remove o primeiro elemento do array e retorna ele
    };

    //Remove e retorna um elemento do fim do deque
    removeFim() {
        return this.itens.pop(); // o pop remove o último elemento do array e retorna ele
    }

    //dar prioridade a um elemento, ou seja, adicioná-lo no início do deque
    prioridade(elemento) {
        this.adicionarFrente(elemento);
    };

    //imprime os elementos do deque
    imprimirDeque() {
        console.log(this.itens.join(' <-> '));
    }
};

const deque = new Deque();