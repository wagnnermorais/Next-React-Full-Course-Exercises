export default function Estilo(props) {
  return (
    <div>
      <h2
        style={{
          background: props.numero >= 0 ? "#2d2" : "#d22",
          color: props.color ? "green" : "red",
          textAlign: props.alignment ? "center" : "left",
        }}
      >
        Texto #01
      </h2>
      <h3 className={props.numero >= 0 ? styles.red : "vermelha"}>Texto #02</h3>
    </div>
  );
}
