// Exemplo com switch
let dia = 3;
switch (dia) {
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  default:
    console.log("Dia inválido");
}
//outros exemplos com switch
let fruta = "banana";
switch (fruta) {
  case "maçã":
    console.log("A fruta é maçã");
    break;
  case "banana":
    console.log("A fruta é banana");
    break;
  case "laranja":
    console.log("A fruta é laranja");
    break;
  default:
    console.log("Fruta não reconhecida");
}
//o switch também pode ser usado para verificar múltiplas condições usando expressões.
// Por exemplo, podemos usar um switch para verificar o dia da semana com base em uma data:
let data = new Date(); // Cria um objeto Date com a data e hora atuais
let diaSemana = data.getDay(); // O método getDay() retorna o dia da semana como um número de 0 a 6, onde 0 representa domingo, 1 representa segunda-feira, e assim por diante.
switch (diaSemana) {
  case 0:
    console.log("Domingo");
    break;
  case 1:
    console.log("Segunda-feira");
    break;
  case 2:
    console.log("Terça-feira");
    break;
  case 3:
    console.log("Quarta-feira");
    break;
  case 4:
    console.log("Quinta-feira");
    break;
  case 5:
    console.log("Sexta-feira");
    break;
  case 6:
    console.log("Sábado");
    break;
  default:
    console.log("Dia inválido");
} //explicando: o método getDay() retorna um número de 0 a 6,
// onde 0 representa domingo, 1 representa segunda-feira,
// e assim por diante.
// O switch então compara o valor retornado por getDay()
// com os casos definidos para cada dia da semana e
// imprime o nome correspondente do dia.
// Se o valor retornado por getDay() não corresponder
// a nenhum dos casos, o default será executado,
// indicando que o dia é inválido.

// o switch funciona comparando o valor da expressão com os casos definidos,
// e executando o bloco de código correspondente ao caso que corresponde à expressão.
// Se nenhum dos casos corresponder à expressão, o bloco de código do default será executado, se estiver presente.
// O switch é útil quando temos várias condições para verificar,
// e pode ser mais legível do que uma série de if-else aninhados.
