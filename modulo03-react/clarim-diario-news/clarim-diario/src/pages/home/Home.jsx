import NewsCard from "../../components/NewsCard/NewsCard";
import { noticias } from "../../data/noticias";
import "./Home.css";

// Página inicial (rota "/"). Mostra a primeira notícia em destaque
// (a "manchete") e as demais numa grade.
function Home() {
  // Desestruturação de array com "rest operator" (...):
  // - "manchete" recebe o PRIMEIRO item do array "noticias"
  // - "demais" recebe um NOVO array com todos os itens restantes
  // Equivale a: const manchete = noticias[0]; const demais = noticias.slice(1);
  const [manchete, ...demais] = noticias;

  return (
    <main className="container">
      {/* Seção de destaque: usa o MESMO componente NewsCard da grade,
          só que sozinho e com CSS diferente (classe "manchete" no <section>
          dá um estilo maior/diferente via CSS, sem precisar duplicar o componente) */}
      <section className="manchete">
        <NewsCard
          id={manchete.id}
          categoria={manchete.categoria}
          titulo={manchete.titulo}
          resumo={manchete.resumo}
        />
      </section>

      <section className="grade">
        {/* .map() percorre o array "demais" e transforma cada "noticia"
            em um elemento <NewsCard />. É assim que se renderizam listas
            dinâmicas em React (o tamanho da grade se adapta automaticamente
            à quantidade de notícias). */}
        {demais.map((noticia) => (
          // 💡 Atenção: falta a prop especial "key" aqui (ex: key={noticia.id}).
          // Sempre que você usa .map() para gerar uma lista de elementos JSX,
          // o React precisa de uma "key" única em cada item para conseguir
          // identificar o que mudou, foi adicionado ou removido entre uma
          // renderização e outra (isso otimiza a atualização da tela e evita
          // bugs de estado "vazando" entre itens). Sem a key, o React usa o
          // índice da posição por baixo dos panos e mostra um aviso no console.
          // Correção sugerida: <NewsCard key={noticia.id} ... />
          <NewsCard
            id={noticia.id}
            categoria={noticia.categoria}
            titulo={noticia.titulo}
            resumo={noticia.resumo}
          />
        ))}
      </section>
    </main>
  );
}

export default Home;
