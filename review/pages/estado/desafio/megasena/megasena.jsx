import { useState } from "react";
import styles from "./Megasena.module.css";

export default function Megasena() {
  const [userChoice, setUserChoice] = useState("");
  const [numbers, setNumbers] = useState([]);

  const handleGetUserChoice = (e) => {
    setUserChoice(e.target.value);
  };

  const handleCreateNumbers = () => {
    const randomGeneratedNumbers = [];
    const quantity = parseInt(userChoice);

    if (isNaN(quantity) || quantity < 6 || quantity > 16) {
      alert("Por favor, insira um número válido entre 6 e 16.");
      return;
    }

    while (randomGeneratedNumbers.length < quantity) {
      let randomNumber = Math.floor(Math.random() * 61);
      if (!randomGeneratedNumbers.includes(randomNumber)) {
        randomGeneratedNumbers.push(randomNumber);
      }
    }
    setNumbers(randomGeneratedNumbers);
  };

  const handleResetCard = () => {
    setUserChoice("");
    setNumbers([]);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Gerador de números Mega-Sena</h1>
      <div style={{ width: "35%", textAlign: "center" }}>
        <p className={styles.paragraph}>Quantos números você deseja?</p>
        <small className={styles.small}>
          O número mínimo de números é 6 e o máximo 16.
        </small>
        <div>
          <input
            type="text"
            className={styles.numberInput}
            value={userChoice}
            onChange={handleGetUserChoice}
            maxLength={2}
          />
        </div>
      </div>
      <div className={styles.card}>
        <p className={styles.numbers}>{numbers.join(", ")}</p>
      </div>
      <div className={styles.buttonBox}>
        <button className={styles.button} onClick={handleCreateNumbers}>
          Gerar Números
        </button>
        <button className={styles.button} onClick={handleResetCard}>
          Resetar
        </button>
      </div>
    </div>
  );
}
