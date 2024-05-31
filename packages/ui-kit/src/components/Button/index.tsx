import { PropsWithChildren } from "react";
import styles from "./Button.module.css";

interface ButtonProps {
  onClick?: () => void;
}

export default function Button(props: PropsWithChildren<ButtonProps>) {
  return (
    <button onClick={props.onClick} className={styles.btn}>
      {props.children}
    </button>
  );
}
