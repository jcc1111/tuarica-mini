import React from "react";
import styles from "./CallToAction.module.css";

export default function CallToAction() {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.ctaBox}>
        <h2>¿Quieres que tu comercio aparezca aquí?</h2>
        <p>Pronto podrás contactarnos y sumarte a la red de TuArica.</p>
        <button className={styles.ctaButton} disabled>
          Próximamente: Formulario de contacto
        </button>
      </div>
    </section>
  );
}
