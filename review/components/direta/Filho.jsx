export default function Filho(props) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem " }}>
      <h2>{props.nome}</h2>
      <h3>{props.familia}</h3>
    </div>
  );
}
