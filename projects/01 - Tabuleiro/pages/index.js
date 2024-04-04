import Board from "@/components/Board";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.board}>
        <Board />
      </section>
    </main>
  );
}
