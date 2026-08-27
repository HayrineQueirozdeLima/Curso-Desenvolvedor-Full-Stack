// ============================================================
//   COMPONENTE RAIZ — monta o layout e decide QUAL página mostrar
// ============================================================

// Hooks do React:
// useState -> guarda um valor que, quando muda, faz o componente renderizar de novo
// useEffect -> roda um "efeito colateral" (algo fora do fluxo normal de render, como
//              mexer no localStorage ou no DOM) sempre que algo que ele observa muda
import { useState, useEffect } from "react";

// Routes/Route vêm do react-router-dom e são responsáveis por decidir QUAL página
// (componente) mostrar de acordo com a URL atual do navegador
import { Routes, Route } from "react-router-dom";

import Header from "../components/Header/Header.jsx";
import Home from "../pages/Home/Home.jsx";
import Materia from "../pages/Materia/Materia.jsx";
import Cadastro from "../pages/Cadastro/Cadastro.jsx";
import "../styles/App.css";

// Componente raiz da aplicação. É aqui que ficam as coisas "globais":
// o cabeçalho (Header) e o sistema de rotas (qual página mostrar).
function App() {
  // useState aceita uma função como valor inicial (chamada de "inicialização preguiçosa"
  // / lazy initial state). Essa função só roda UMA vez, na primeira renderização —
  // é útil aqui porque ler o localStorage é um pouco mais "caro" do que ler uma variável comum.
  const [tema, setTema] = useState(() => {
    // Tenta recuperar um tema salvo de uma visita anterior
    const salvo = localStorage.getItem("tema") || "light";
    if (salvo) return salvo;

    const preferenciaEscuro = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    if (preferenciaEscuro) return "dark";
    return "light";
  });

  // Função que alterna entre "light" e "dark".
  // Usamos a forma "setTema(t => ...)" (função de atualização) em vez de
  // "setTema(tema === 'light' ? 'dark' : 'light')" porque isso garante que estamos
  // sempre partindo do valor mais atual de "tema", mesmo que o React agrupe
  // atualizações de estado (evita bugs sutis em cliques muito rápidos).
  function alterarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  // Esse useEffect roda toda vez que "tema" muda (por causa do array [tema] no final).
  // Ele faz duas coisas:
  // 1) Escreve o tema atual como atributo "data-theme" na tag <html>, o que permite
  //    que o CSS use seletores como [data-theme="dark"] para trocar as cores.
  // 2) Salva o tema escolhido no localStorage, para lembrar na próxima visita.
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  return (
    // <>...</> é um "Fragment": permite retornar múltiplos elementos lado a lado
    // sem precisar envolver tudo numa <div> extra e desnecessária no HTML final.
    <>
      {/* Header recebe o tema atual e a função para alterná-lo via props */}
      <Header tema={tema} aoAlternarTema={alterarTema} />

      {/* Routes funciona como um "switch": olha a URL e renderiza a primeira
          Route cujo "path" combine com ela. */}
      <Routes>
        {/* Rota "/" -> página inicial, com a lista de notícias */}
        <Route path="/" element={<Home />} />
        {/* Rota com parâmetro dinâmico ":id" -> ex: /materia/3
            O valor depois de "materia/" fica disponível dentro do componente
            Materia através do hook useParams(). */}
        <Route path="/materia/:id" element={<Materia />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </>
  );
}

export default App;
