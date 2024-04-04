import Square from "@/components/Square";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.board}>
        <Square background={false} />
        <Square background={true} />
      </section>
    </main>
  );
}
