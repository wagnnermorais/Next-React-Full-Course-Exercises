import { Component } from "react";

export default class Counter extends Component {
  state = {
    numero: this.props.valorInicial ?? 0,
    passo: this.props.passo ?? 1,
  };

  increase() {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }

  decrease() {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  }

  render() {
    return (
      <div>
        <h1>Contador (usando classe)</h1>
        <p>{this.state.numero}</p>
        <input
          type="number"
          min={1}
          max={1000}
          value={this.state.passo}
          onChange={(e) => this.setState({ passo: Number(e.target.value) })}
        />
        <button onClick={() => this.increase()}>Incrementar</button>
        <button onClick={() => this.decrease()}>Decrementar</button>
      </div>
    );
  }
}
