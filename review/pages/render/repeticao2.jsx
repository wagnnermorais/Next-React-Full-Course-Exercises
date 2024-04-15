import list from "../../data/listaProdutos";

export default function Repeticao2() {
  return (
    <table style={{ border: "1px solid black" }}>
      <thead>
        <tr>
          <th>Código</th>
          <th>Nome</th>
          <th>Preço</th>
        </tr>
      </thead>
      <tbody>
        {list.map((product) => (
          <tr key={product.id}>
            <td style={{ border: "1px solid black" }}>{product.id}</td>
            <td style={{ border: "1px solid black" }}>{product.nome}</td>
            <td style={{ border: "1px solid black" }}>{product.preco}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
