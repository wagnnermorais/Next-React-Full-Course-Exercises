import { useState } from "react";

export default function Formulario() {
  const [valor, setValor] = useState("");
  return (
    <div>
      <input
        style={{ padding: "1rem 0.5rem" }}
        type="text"
        placeholder="Insert text here"
        value={valor}
        onChange={(e) => setValor(e.target.value)}
      />
      {valor}
    </div>
  );
}
