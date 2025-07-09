import React from "react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <span>© {new Date().getFullYear()} TuArica. Todos los derechos reservados.</span>
    </footer>
  );
}
