import Counter from "@/components/Counter";
import { Component } from "react";

export default class Contador extends Component {
  render() {
    return (
      <div>
        <h1>Teste Classe</h1>
        <Counter valorInicial={100} passo={2} />
      </div>
    );
  }
}
