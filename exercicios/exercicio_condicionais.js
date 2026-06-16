/* Crie um programam com a idade do aluno e se ele possui autorização (responda com sim ou nao)
o sistema deve mostrar:
- acesso permitio se o aluno tiver 14 anos ou mais e autorização = sim
- acesso permitido com responsavel, se o aluno tiver 12 ou 13 anos e autoorizaçao = sim
- acesso negado, se o aluno tiver menos de 12 anos ou autorização = nao
*/
let idade = 13;
let autorizacao = "sim";

if (autorizacao == "sim" && idade >= 14) {
  console.log("Acesso permitido");
} else if (autorizacao == "sim" && (idade == 13 || idade == 12)) {
  console.log("Acesso permitido com responsável");
} else {
  console.log("Acesso negado");
}

// o uso de '' e "" em js é para definir strings, ou seja, sequências de caracteres. Ambas as formas são válidas e podem ser usadas de maneira intercambiável. A escolha entre usar aspas simples ('') ou aspas duplas ("") é principalmente uma questão de estilo e preferência pessoal. No entanto, é importante ser consistente no uso das aspas dentro do mesmo projeto para manter a legibilidade do código.
// Por exemplo, se você usar aspas simples para definir uma string, é recomendável usar aspas duplas para definir outra string dentro dela, para evitar a necessidade de escapar as aspas. Por exemplo:
let mensagem = 'Ele disse: "Olá!"'; // Usando aspas simples para a string principal e aspas duplas para a string interna
console.log(mensagem); // Isso imprimirá: Ele disse: "Olá!"
