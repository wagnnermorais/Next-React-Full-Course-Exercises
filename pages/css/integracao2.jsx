import styles from "./integracao2.module.css";

export default function integracao2() {
  return (
    <div className={styles.container}>
      <h2>Testing module CSS</h2>
      <div className={styles.vermelha}>Texto 1</div>
      <div className={styles.azul}>Texto 2</div>
      <div className={styles.branca}>Texto 3</div>
    </div>
  );
}
