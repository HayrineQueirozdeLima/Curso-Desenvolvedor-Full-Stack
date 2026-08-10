import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/home/Home";
import "./styles/App.css";

function App() {
  const [tema, setTema] = useState(() => {
    const salvo = localStorage.getItem("tema") || "light";
    if (salvo) return salvo;

    const preferenciaEscuro = window.matchMedia(
      "(preferes-color-scheme: dark)",
    ).matches;
    if (preferenciaEscuro) return "dark";
    return "light";
  });

  function alterarTema() {
    setTema((t) => (t === "light" ? "dark" : "light"));
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", tema);
    localStorage.setItem("tema", tema);
  }, [tema]);

  return (
    <>
      <Header tema={tema} aoAlternarTema={alterarTema} />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
