import { useState } from "react";
import styles from "./Counter.module.css";

export default function Counter() {
  const [number, setNumber] = useState(0);

  const increaseNumber = () => setNumber(number + 1);
  const decreaseNumber = () => {
    number <= 0
      ? alert("Cannot decrease a number below 0")
      : setNumber(number - 1);
  };

  return (
    <div className={styles.container}>
      <h1>Counter</h1>
      <p className={styles.paragraph}>The current number is: {number}</p>
      <div className={styles.buttonBox}>
        <button className={styles.button} onClick={increaseNumber}>
          Increase
        </button>
        <button className={styles.button} onClick={decreaseNumber}>
          Decrease
        </button>
      </div>
    </div>
  );
}
