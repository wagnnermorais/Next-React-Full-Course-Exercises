import Square from "./Square";
import styles from "../styles/Row.module.css";

export default function Row(props) {
  return (
    <div className={styles.row}>
      <Square background={props.isBlack} />
      <Square background={!props.isBlack} />
      <Square background={props.isBlack} />
      <Square background={!props.isBlack} />
      <Square background={props.isBlack} />
      <Square background={!props.isBlack} />
      <Square background={props.isBlack} />
      <Square background={!props.isBlack} />
    </div>
  );
}
