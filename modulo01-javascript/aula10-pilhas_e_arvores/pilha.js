// a estrutura de pilha não é nativa do JavaScript, por isso estamos usando listas
const pilha = [];

pilha.push("Livro 1");
pilha.push("Livro 2");
pilha.push("Livro 3");

console.log("Topo: ", pilha[pilha.length - 1]);
console.log("Removido:", pilha.pop());
console.log("Agora o topo é: ", pilha[pilha.length - 1])

//classe é um molde que usamos para criar nossos objetos. define a estrutura, os dados e os comportamentos dos nossos objetos.
//js nao tem classe, mas temos algo que funciona como prototipo

class Pilha{
    constructor(){// é um método especial dentro de uma classe. chamamos ele sempre que criamos uma nova instancia da classe.
        //dentro da minha classe pilha tenho um construtor que vai iniciar esse array de itens
        // só podemos ter um construtor por classe
        //O construtor é a fábrica ou o 
        // "momento do nascimento" do seu objeto. 
        // É um método especial que o JavaScript 
        // roda automaticamente apenas uma vez: 
        // no exato segundo em que você cria um 
        // objeto usando o molde.
        this.itens = []; //Isso significa: "Assim que um objeto novo nascer dessa forma, dê a ele uma caixinha vazia (um array) chamada itens".
    }

    push(elemento){
        this.itens.push(elemento);
    };

    pop(){
        if(this.isEmpty()){
            return "A pilha está vazia.";
        };

        return this.itens.pop();
    };

    isEmpty(){
        return this.itens.length = 0;
    };

    print(){
        console.log(this.itens);
    };
};
// não é possível manipular a lista "itens" da pilha por fora, apenas dentro da construção da classe pilha


const pilha = new Pilha();
pilha.push("A");
pilha.print();
pilha.pop();
pilha.print();
console.log(pilha.pop());


/*
===================================================================
                       RESUMO DA AULA: PILHAS & POO
===================================================================

1. O CONCEITO DE PILHA (STACK):
   - É uma estrutura de dados linear que segue a regra LIFO (Last In, First Out).
   - O ÚLTIMO elemento a entrar é obrigatoriamente o PRIMEIRO a sair.
   - Pensar sempre em: pilha de pratos, pilha de livros ou o botão "Desfazer" (Ctrl+Z).

2. MÉTODOS PRINCIPAIS DE UMA PILHA:
   - push(elemento): Adiciona um item ao topo da pilha.
   - pop(): Remove e retorna o item que estava no topo da pilha.
   - isEmpty(): Retorna verdadeiro (true) se a pilha não tiver nada.
   - print(): Mostra o estado atual dos elementos.

3. PROGRAMAÇÃO ORIENTADA A OBJETOS (POO):
   - Classe (class): É o molde/fôrma de bolo. Define o que o objeto terá.
   - Construtor (constructor): É a fábrica. Roda uma única vez quando o objeto 
     nasce através do comando `new`. Serve para inicializar as variáveis (atributos).
   - This: É a palavra chave para o objeto olhar para si mesmo. Garante que uma 
     instância não mexa nos dados da outra.

4. CURIOSIDADE SOBRE ENCAPSULAMENTO NO JAVASCRIPT:
   - Por padrão, propriedades criadas com `this.itens` ainda PODEM ser mexidas por fora
     (ex: se você digitar `pilha.itens = []` fora da classe, você apaga tudo).
   - Para torná-la 100% protegida e privada (onde realmente ninguém mexe por fora), 
     no JavaScript moderno nós usamos uma hashtag `#` antes do nome: `this.#itens = []`.
*/