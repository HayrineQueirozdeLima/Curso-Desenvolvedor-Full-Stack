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

/* =====================================================================
   RESUMO DA AULA:
   - Estrutura de Dados Deque (Double-Ended Queue): Uma fila de duas extremidades que flexibiliza as regras tradicionais de filas (FIFO) e pilhas (LIFO), permitindo inserir e remover dados tanto pelo início quanto pelo fim.
   - Manipulação de Arrays em Baixo Nível: Entendimento prático de quatro métodos fundamentais do JavaScript para alteração de arrays:
     - `.unshift()`: Adiciona elementos na primeira posição (frente).
     - `.push()`: Adiciona elementos na última posição (fim).
     - `.shift()`: Remove e retorna o primeiro elemento.
     - `.pop()`: Remove e retorna o último elemento.
   - Programação Orientada a Objetos (POO): Implementação do Deque utilizando o modelo de classes (`class`), encapsulando o array de dados dentro do `constructor` e gerenciando seu estado interno através do `this.itens`.
   - Reutilização de Métodos: Demonstração de boas práticas com o método `prioridade()`, que reaproveita a lógica interna de `adicionarFrente()` sem duplicar código.
   - Formatação de Saída: Uso do método `.join(' <-> ')` para criar uma representação visual clara e intuitiva das conexões bidirecionais do Deque no console.
   ===================================================================== */