import { useState } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      texto: "Estudar React",
      categoria: "Estudos",
      feito: false,
    },
    {
      id: 2,
      texto: "Treinar Calistenia",
      categoria: "Exercícios",
      feito: true,
    },
    {
      id: 3,
      texto: "Ler 5 páginas de um livro",
      categoria: "Rotina",
      feito: false,
    },
  ]);

  const concluirTarefa = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, feito: !todo.feito } : todo,
      ),
    );
  };

  return (
    <div className="app">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo) => (
          <div className="todo" key={todo.id}>
            <div className="conteudo">
              <input
                type="checkbox"
                checked={todo.feito}
                onChange={() => concluirTarefa(todo.id)}
              />
              <p>{todo.texto}</p>
              <p>{todo.categoria}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
