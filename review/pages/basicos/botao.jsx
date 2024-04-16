export default function Botao() {
  const clickAction = () => {
    console.log("Ação 1!");
  };

  return (
    <div>
      <button onClick={clickAction}>Click #01</button>
      <button onClick={() => console.log("Ação 2!")}>Click #02</button>
    </div>
  );
}
