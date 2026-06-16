/* ========================================================================
 📝 RESUMO DA AULA: ESTRUTURA DE FILA (QUEUE)
========================================================================

1. O que é uma Fila? 
É exatamente como a fila do banco ou do supermercado. 
A regra principal é o FIFO (First In, First Out - Primeiro a Entrar, Primeiro a Sair).
Quem chega primeiro é atendido primeiro!

2. Os Comandos "Mágicos" (Métodos):
- push(): É como colocar a pessoa no FINAL da fila. (Chegou cliente novo!)
- shift(): Remove e entrega a PRIMEIRA pessoa da fila. (O caixa chamou "Próximo!")
- length: Conta quantas pessoas têm na fila. (Tamanho da fila)

3. O Molde (Class):
A `class Fila` é como a planta de um prédio. Ela ensina o computador 
como construir uma fila. Depois, você pode usar esse mesmo molde para criar 
a fila do banco, a fila da padaria, etc., sem misturar as pessoas!

4. O Bug Corrigido (Loop Infinito):
No código original, o método vazio() chamava ele mesmo, deixando o computador
preso num pensamento sem fim. A correção foi simples: para saber se está 
vazia, basta perguntar se o tamanho (length) da fila é igual a 0.
========================================================================
*/

class Fila {
    // 1. Abre as portas (Cria a fila vazia)
    constructor() {
        this.itens = [];
    }

    // 2. Adiciona um elemento ao final da fila (Chegou alguém!)
    enfileirar(elemento) {
        this.itens.push(elemento);
    }

    // 3. Imprime os elementos da fila para visualizarmos
    imprimirFila() {
        console.log(this.itens.join(' <- '));
    }

    // 4. Remove e retorna o primeiro elemento da fila (Foi pro caixa!)
    desenfileirar() {
        return this.itens.shift(); // O shift remove e devolve o primeiro da lista
    }

    // 5. Verifica se a fila está vazia (Bug corrigido!)
    vazio() {
        return this.itens.length === 0;
    }

    // 6. Retorna o primeiro da fila, mas não tira ele de lá (Só espiando o próximo)
    proximo() {
        if (this.vazio()) {
            return 'A fila está vazia';
        }
        return this.itens[0];
    }
}

/* ========================================================================
 🚀 TESTANDO NA PRÁTICA (Pode rodar para ver funcionando!)
========================================================================
*/

// Criando a fila do Banco
let filaDoBanco = new Fila();

console.log("O banco abriu!");

// Chegou cliente
filaDoBanco.enfileirar("Ana");
filaDoBanco.enfileirar("Carlos");
filaDoBanco.enfileirar("Beatriz");

// Olhando como a fila ficou
console.log("Como está a fila agora?");
filaDoBanco.imprimirFila(); // Ana <- Carlos <- Beatriz

// Quem é o próximo? (Mas não chama ainda)
console.log(`Espiando quem é o próximo: ${filaDoBanco.proximo()}`); // Ana

// Chamando pro caixa
console.log(`Caixa chamou: ${filaDoBanco.desenfileirar()}`); // A Ana sai
console.log(`Caixa chamou: ${filaDoBanco.desenfileirar()}`); // O Carlos sai

// Olhando quem sobrou
console.log("Como está na fila agora?");
filaDoBanco.imprimirFila(); // Só sobrou a Beatriz