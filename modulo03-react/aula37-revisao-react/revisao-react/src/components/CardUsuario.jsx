function CardUsuario({ nome, curso }) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <p>Curso: {curso}</p>
    </div>
  );
}

export default CardUsuario;
