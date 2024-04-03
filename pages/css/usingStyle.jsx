import Style from "../../components/Style";

export default function usingStyle() {
  return (
    <div>
      <h2>Usando estilos!</h2>
      <Style numero={3} />
      <Style numero={-5} />
    </div>
  );
}
