import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import "./styles/variables.css";
import "./styles/globals.css";

// "achando" a div de id 'root' e entrega o controle dela pro react, que vai renderizar o App dentro dela
createRoot(document.getElementById("root")).render(
  // o StrictMode é um componente do react que ajuda a identificar problemas no app, mas não é obrigatório
  <StrictMode>
    <App />
  </StrictMode>,
);
