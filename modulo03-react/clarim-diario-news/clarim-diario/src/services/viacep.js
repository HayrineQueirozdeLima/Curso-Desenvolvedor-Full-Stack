// axios é uma biblioteca para fazer requisições HTTP (parecida com o fetch
// nativo do navegador, mas com uma API mais conveniente: já converte a
// resposta para JSON automaticamente, por exemplo).
import axios from "axios";

// Função assíncrona (async/await) que busca o endereço correspondente a um
// CEP usando a API pública ViaCEP. "async" faz essa função sempre retornar
// uma Promise, então quem for chamá-la deve usar "await" ou ".then()".
export async function buscarCep(cep) {
  // Regex /\D/g -> "\D" significa "qualquer caractere que NÃO seja dígito",
  // e o "g" (global) faz substituir TODAS as ocorrências, não só a primeira.
  // Isso remove pontos, traços e espaços que o usuário possa ter digitado,
  // deixando só os números (ex: "01001-000" vira "01001000").
  const cepLimpo = cep.replace(/\D/g, "");

  // Validação simples: um CEP brasileiro sempre tem 8 dígitos.
  // Lançar um Error aqui interrompe a execução da função e quem chamou
  // "buscarCep" precisa capturar esse erro com try/catch.
  if (cepLimpo.length !== 8) {
    throw new Error("CEP deve ter 8 dígitos");
  }

  // "await" pausa a execução desta função até a Promise do axios.get
  // resolver (ou seja, até a resposta da API chegar), sem travar o restante
  // da aplicação. Desestruturamos "data" diretamente do retorno do axios,
  // que já vem com o corpo (body) da resposta em JSON convertido para objeto.
  const { data } = await axios.get(
    `https://viacep.com.br/ws/${cepLimpo}/json/`,
  );

  // A API ViaCEP tem uma particularidade: quando o CEP não existe, ela NÃO
  // retorna um erro HTTP (como 404) — ela retorna status 200 com um objeto
  // { erro: true }. Por isso é preciso checar esse campo manualmente,
  // mesmo que a requisição HTTP em si tenha "dado certo".
  if (data.erro) {
    throw new Error("CEP não encontrado");
  }

  return data;
}

// 💡 Dica de uso em um componente React:
// try {
//   const endereco = await buscarCep("01001000");
// } catch (erro) {
//   // trate erro.message aqui (ex: mostrar numa mensagem de validação do form)
// }
