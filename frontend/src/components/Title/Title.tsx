import type { ReactNode } from "react";
import styles from "./Title.module.css";

export default function Title({ children }: { children: ReactNode }) {
  return <div>
      <h2 className={styles.title}>{children}</h2>
      <div className={styles.divider}></div>
    </div>
}
