import "./Header.css";

// Componente de cabeçalho. Recebe duas props vindas do App:
// - tema: string "light" ou "dark", para saber qual texto mostrar no botão
// - aoAlternarTema: função a ser chamada quando o botão for clicado
// A desestruturação "{ tema, aoAlternarTema }" já extrai essas duas
// propriedades direto do objeto de props recebido.
function Header({ tema, aoAlternarTema }) {
  // new Date() pega a data/hora atual do dispositivo do usuário.
  // toLocaleDateString formata essa data de acordo com um "locale" (aqui, pt-BR)
  // e com as opções passadas: dia da semana por extenso, dia, mês por extenso e ano.
  // Ex.: "sexta-feira, 14 de agosto de 2026"
  const hoje = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="cabecalho">
      {/* Faixa superior estilo "jornal impresso": edição, data e "preço" */}
      <div className="cabecalho__faixa">
        <span>Edição de Nova York</span>
        <span>{hoje}</span>
        <span>U$ 1.50</span>
        {/* onClick recebe a FUNÇÃO em si (aoAlternarTema), sem chamá-la com ().
            Se fosse escrito onClick={aoAlternarTema()}, a função executaria
            imediatamente durante a renderização, e não apenas no clique — um
            erro comum bem no início do aprendizado de React. */}
        <button className="cabecalho__tema" onClick={aoAlternarTema}>
          {/* Operador ternário: se o tema atual for "light", mostra "Escuro"
              (ou seja, o texto indica para ONDE o clique vai levar) */}
          {tema === "light" ? "🌙 Escuro" : "☀️ Claro"}
        </button>
      </div>

      <h1 className="cabecalho__titulo">Clarim Diário</h1>
      <p className="cabecalho__lema">
        A verdade, doa a quem doer - Inclusive a certos aracnídeos
      </p>

      {/* Menu de navegação. Os href="" ainda estão vazios/placeholder —
          quando as rotas dessas seções existirem, troque por <Link to="..."> 
          (do react-router-dom) em vez de <a>, para navegar sem recarregar a página. */}
      <nav className="cabecalho__menu">
        <a href="">Cidades</a>
        <a href="">Ameaças Urbanas</a>
        <a href="">Opinião do Editor</a>
        <a href="">Esportes</a>
        <a href="">Classificados</a>
      </nav>
    </header>
  );
}

export default Header;
