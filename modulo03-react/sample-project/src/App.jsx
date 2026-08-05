import { useState } from "react";

function Saudacao({ nome }) {
  return <h2>Olá ${nome}, seja bem vindo(a)!</h2>;
}

export default function App() {
  const [contador, setContador] = useState(0);

  return (
    <div>
      <Saudacao nome="Jaques" />

      <p>{contador}</p>

      <button onClick={() => setContador(contador + 1)}>Somar +1</button>
      <button onClick={() => setContador(contador - 1)}>Somar -1</button>
    </div>
  );
}
