import Filho from "./Filho";

export default function Pai(props) {
  const falarComigo = (param) => {
    console.log(param);
  };

  return (
    <div>
      <Filho funcao={falarComigo} />
    </div>
  );
}
