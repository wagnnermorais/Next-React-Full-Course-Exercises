function createList(limit) {
  const list = [];
  for (let i = 1; i <= limit; i++) {
    list.push(
      <li key={i} style={{ fontFamily: "system-ui", fontWeight: "bold" }}>
        {i}
        {i !== limit ? "," : ""}
      </li>
    );
  }
  return list;
}

export default function numberedList() {
  return (
    <div>
      <h2>Listagem de números:</h2>
      <ul>{createList(20)}</ul>
    </div>
  );
}
