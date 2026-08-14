// Este é o "ponto de entrada" (entry point) da aplicação: o primeiro arquivo
// JS que o Vite/navegador executa. É aqui que o React "assume o controle"
// de uma parte da página HTML (o index.html).

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// BrowserRouter é o componente que habilita o roteamento baseado em URL
// (usando a History API do navegador) para toda a aplicação.
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

// CSS "global": variáveis (cores, espaçamentos) e estilos base que valem
// para o site inteiro, não só para um componente específico.
import "./styles/variables.css";
import "./styles/globals.css";

// "achando" a div de id 'root' e entrega o controle dela pro react, que vai renderizar o App dentro dela
createRoot(document.getElementById("root")).render(
  // o StrictMode é um componente do react que ajuda a identificar problemas no app, mas não é obrigatório
  // Na prática, em desenvolvimento, o StrictMode faz o React renderizar alguns
  // trechos DUAS vezes de propósito, só para ajudar a detectar efeitos colaterais
  // "impuros" (ex: um useEffect que faz algo que não deveria repetir). Isso não
  // acontece em produção, então não afeta o usuário final.
  <StrictMode>
    {/* BrowserRouter precisa envolver o App inteiro para que qualquer
        componente dentro dele possa usar <Link>, <Routes>, useParams(), etc. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
);
