import Row from "./Row";

export default function Board() {
  return (
    <div>
      <Row />
      <Row isBlack={true} />
      <Row />
      <Row isBlack={true} />
      <Row />
      <Row isBlack={true} />
      <Row />
      <Row isBlack={true} />
    </div>
  );
}
