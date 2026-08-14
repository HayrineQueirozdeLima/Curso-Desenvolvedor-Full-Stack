import "./NewsCard.css";
import { Link } from "react-router-dom";

// Componente reutilizável: representa UM card de notícia. Ele não sabe
// nada sobre a lista inteira de notícias — só recebe, via props, os dados
// de UMA notícia específica e os exibe. Isso é o princípio de "componente
// de apresentação": recebe dados prontos e só se preocupa em mostrá-los.
function NewsCard({ id, categoria, titulo, resumo }) {
  return (
    <article className="card">
      <span className="card__categoria">{categoria}</span>
      <h3 className="card__titulo">
        <Link to={`/materia/${id}`}>{titulo}</Link>
      </h3>

      {/* Renderização condicional: "resumo && <p>...</p>" só mostra o
          parágrafo se "resumo" for uma string não-vazia (truthy). Se resumo
          for undefined, null ou "", o React simplesmente não renderiza nada
          ali — é um jeito curto de fazer um "if" dentro do JSX. */}
      {resumo && <p className="card__resumo">{resumo}</p>}
    </article>
  );
}

export default NewsCard;
