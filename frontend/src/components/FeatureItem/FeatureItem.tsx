import type { ReactNode } from "react";
import styles from "./FeatureItem.module.css";

export default function FeatureItem({ children }: { children: ReactNode }) {
  return (
  <li className={styles.featureItem}>
    <span className={styles.featureIcon}>✓</span>
    {children}
  </li>)
}
