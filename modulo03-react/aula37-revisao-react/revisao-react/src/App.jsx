import { useState } from "react";
import Header from "./components/Header";
import CardUsuario from "./components/CardUsuario";

function App() {
  const nomeDoCurso = "React +Prati";
  const [concluidas, setConcluidas] = useState(0);

  return (
    <>
      <Header />

      <CardUsuario nome="Guilherme" curso={nomeDoCurso} />

      <p> Tarefas Concluídas: {concluidas}</p>
      <button onClick={() => setConcluidas(concluidas + 1)}>
        Concluir tarefa
      </button>
    </>
  );
}

export default App;
