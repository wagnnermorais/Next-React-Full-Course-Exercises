import Pessoa from "../../components/Pessoa";

export default function Example() {
  return (
    <div>
      <Pessoa name="Wagner" age={24} />
      <Pessoa name="João" />
    </div>
  );
}
