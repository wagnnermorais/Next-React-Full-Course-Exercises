export default function Filho(props) {
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.funcao}>Falar com o pai!</button>
      <div>
        <button onClick={() => props.funcao("Passei no ENEM!")}>
          Falar com o pai! #02
        </button>
      </div>
    </div>
  );
}
