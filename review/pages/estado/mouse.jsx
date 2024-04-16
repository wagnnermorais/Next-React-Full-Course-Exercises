import { useState } from "react";

export default function mouse() {
  const [xAxis, setXAxis] = useState("");
  const [yAxis, setYAxis] = useState("");
  const mouseMove = (e) => {
    setXAxis(e.pageX);
    setYAxis(e.pageY);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100vh",
        background: "#222",
        color: "#fff",
      }}
      onMouseMove={mouseMove}
    >
      <p>Eixo X: {xAxis}</p>
      <p>Eixo Y: {yAxis}</p>
    </div>
  );
}
