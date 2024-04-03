import Style from "../../components/Style";

export default function usingStyle() {
  return (
    <div>
      <h2>Usando estilos!</h2>
      <Style numero={3} color={true} alignment={false} />
      <Style numero={-5} color={false} alignment={true} />
    </div>
  );
}
