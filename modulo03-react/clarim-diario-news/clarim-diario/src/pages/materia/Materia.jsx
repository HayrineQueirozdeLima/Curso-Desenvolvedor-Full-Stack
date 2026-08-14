import { useParams, Link } from "react-router-dom";
import { noticias } from "../../data/noticias";
import "./Materia.css";

// Página de detalhe de UMA notícia (rota "/materia/:id").
function Materia() {
  // useParams() lê os parâmetros dinâmicos da URL atual, definidos lá no
  // App.jsx pela rota <Route path="/materia/:id" .../>. Se a URL for
  // "/materia/3", então "id" aqui vale a STRING "3" (sempre string, nunca number).
  const { id } = useParams();

  // .find() percorre o array até achar o primeiro item que satisfaça a condição
  // e para por aí (diferente do .filter(), que percorre tudo e devolve vários).
  // Number(id) converte a string "3" vindo da URL para o número 3, para poder
  // comparar corretamente com n.id (que é number lá em noticias.js).
  const noticia = noticias.find((n) => n.id === Number(id));

  // Se nenhuma notícia bater com o id da URL (ex: usuário digitou um id
  // inexistente), mostramos uma mensagem amigável de "não encontrado" em vez
  // de deixar a página quebrar tentando ler propriedades de "undefined".
  if (!noticia) {
    return (
      <main className="container">
        <p>
          Matéria não encontrada - Nem o Homem-Aranha Destruría uma Página tão
          Rápido
        </p>
        {/* <Link> troca de página sem recarregar o navegador (diferente de <a>) */}
        <Link to="/">Voltar à capa</Link>
      </main>
    );
  }

  // Caminho "feliz": a notícia existe, então renderizamos seus dados.
  return (
    <main className="container materia">
      <Link to="/" className="materia__voltar">
        Voltar à capa
      </Link>
      <span className="materia__categoria">{noticia.categoria}</span>
      <h1>{noticia.titulo}</h1>
      <p className="materia__resumo">{noticia.resumo}</p>
      <div className="materia__texto">
        <p>{noticia.texto}</p>
      </div>
    </main>
  );
}

export default Materia;
