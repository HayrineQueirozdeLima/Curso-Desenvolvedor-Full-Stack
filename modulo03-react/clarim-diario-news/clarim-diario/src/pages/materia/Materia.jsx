import { useParams, Link } from "react-router-dom";
import { noticias } from "../../data/noticias";
import "./Materia.css";

function Materia() {
  const { id } = useParams();
  const noticia = noticias.find((n) => n.id === Number(id));

  if (!noticia) {
    return (
      <main className="container">
        <p>
          Matéria não encontrada - Nem o Homem-Aranha Destruría uma Página tão
          Rápido
        </p>
        <Link to="/">Voltar à capa</Link>
      </main>
    );
  }
}

export default Materia;
