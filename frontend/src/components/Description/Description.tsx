import type { ReactNode } from "react";
import styles from "./Description.module.css";

export default function Description({ children }: { children: ReactNode }) {
  return <div className={styles.description}>{children}</div>;
}