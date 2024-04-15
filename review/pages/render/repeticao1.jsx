export default function Repeticao1() {
  const listaAprovados = ["João", "Maria", "Ana", "Maria", "Carla", "Daniel"];

  return (
    <div>
      <ul>
        {listaAprovados.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
