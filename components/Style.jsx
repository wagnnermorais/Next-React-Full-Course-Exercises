export default function Estilo(props) {
  return (
    <div>
      <h2
        style={{
          background: props.numero >= 0 ? "#2d2" : "#d22",
          color: "#FFF",
        }}
      >
        Texto
      </h2>
    </div>
  );
}
