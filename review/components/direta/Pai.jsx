import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <h1>Família {props.familia}</h1>
      <Filho nome="Pedro" familia="Albuquerque" />
      <Filho nome="Wagner" familia="Morais" />
      <Filho nome="Vitor" {...props} />
    </div>
  );
}
