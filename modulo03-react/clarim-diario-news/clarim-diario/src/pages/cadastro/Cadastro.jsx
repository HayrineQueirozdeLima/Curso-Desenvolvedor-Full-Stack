import { buscarCep } from "../../services/viacep";
import { useState } from "react";
import "./Cadastro.css";

function Cadastro() {
  const [cep, setCep] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [numero, setNumero] = useState("");
  const [bairro, setBairro] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUf] = useState("");
  const [erro, setErro] = useState("");

  async function handleBuscarCep() {
    try {
      const endereco = await buscarCep(cep);
      setLogradouro(endereco.logradouro);
      setBairro(endereco.bairro);
      setCidade(endereco.localidade);
      setUf(endereco.uf);
      setErro("");
    } catch (erroCapturado) {
      setErro(erroCapturado.message);
      setLogradouro("");
      setBairro("");
      setCidade("");
      setUf("");
    }
  }

  return (
    <div>
      <h1>Cadastro</h1>

      <label htmlFor="cep">CEP:</label>
      <input
        id="cep"
        type="text"
        value={cep}
        onChange={(e) => setCep(e.target.value)}
      />

      <button onClick={handleBuscarCep}>Buscar CEP</button>
      {erro && <p className="erro">{erro}</p>}

      <label htmlFor="logradouro">Logradouro:</label>
      <input
        id="logradouro"
        type="text"
        value={logradouro}
        onChange={(e) => setLogradouro(e.target.value)}
      />

      <label htmlFor="numero">Número:</label>
      <input
        id="numero"
        type="text"
        value={numero}
        onChange={(e) => setNumero(e.target.value)}
      />

      <label htmlFor="bairro">Bairro:</label>
      <input
        id="bairro"
        type="text"
        value={bairro}
        onChange={(e) => setBairro(e.target.value)}
      />

      <label htmlFor="cidade">Cidade:</label>
      <input
        id="cidade"
        type="text"
        value={cidade}
        onChange={(e) => setCidade(e.target.value)}
      />

      <label htmlFor="uf">UF:</label>
      <input
        id="uf"
        type="text"
        value={uf}
        onChange={(e) => setUf(e.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </div>
  );
}

export default Cadastro;
