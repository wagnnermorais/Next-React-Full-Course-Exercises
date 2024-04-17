interface PessoaProps {
  name: string;
  age?: number;
}

export default function Pessoa(props: PessoaProps) {
  return (
    <div>
      <p>Nome: {props.name}</p>
      <p>Idade: {props.age ?? "Não informada"}</p>
    </div>
  );
}
