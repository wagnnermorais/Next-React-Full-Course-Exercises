import styles from "../styles/Square.module.css";

export default function Square(props) {
  return (
    <div
      className={styles.square}
      style={{
        backgroundColor: props.background ? "#000000" : "#ffffff",
      }}
    ></div>
  );
}
