// ============================================================
//   PONTO DE ENTRADA DA APLICAÇÃO (o "liga" do React)
// ============================================================
// Este é o PRIMEIRO arquivo JavaScript que roda no navegador.
// É aqui que o React "entra" na página HTML e assume o controle.

// Este é o "ponto de entrada" (entry point) da aplicação: o primeiro arquivo
// JS que o Vite/navegador executa. É aqui que o React "assume o controle"
// de uma parte da página HTML (o index.html).

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// BrowserRouter é o componente que habilita o roteamento baseado em URL
// (usando a History API do navegador) para toda a aplicação.
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext.jsx";
import App from "./App.jsx";

// CSS "global": variáveis (cores, espaçamentos) e estilos base que valem
// para o site inteiro, não só para um componente específico.
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/forms.css";

// "achando" a div de id 'root' e entrega o controle dela pro react, que vai renderizar o App dentro dela
createRoot(document.getElementById("root")).render(
  // o StrictMode é um componente do react que ajuda a identificar problemas no app, mas não é obrigatório
  // Na prática, em desenvolvimento, o StrictMode faz o React renderizar alguns
  // trechos DUAS vezes de propósito, só para ajudar a detectar efeitos colaterais
  // "impuros" (ex: um useEffect que faz algo que não deveria repetir). Isso não
  // acontece em produção, então não afeta o usuário final.
  // Cada componente que ENVOLVE outro adiciona uma "camada" de recurso.
  // Pense em cebola: o App fica no centro, cercado por essas camadas.
  <StrictMode>
    {" "}
    {/* modo de desenvolvimento: avisa sobre práticas arriscadas */}
    <BrowserRouter>
      {" "}
      {/* habilita as rotas/URLs (react-router) na árvore toda */}
      <AuthProvider>
        {" "}
        {/* disponibiliza o usuário logado para qualquer componente */}
        <App /> {/* nosso app de fato */}
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
{
  /* BrowserRouter precisa envolver o App inteiro para que qualquer
        componente dentro dele possa usar <Link>, <Routes>, useParams(), etc. */
}
