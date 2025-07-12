import React from "react";
import styles from "./Carrusel1.module.css";

export default function Carrusel1() {
  return (
    <section className={styles.carouselContainer}>
      <div className={styles.carouselPlaceholder}>
        <span>🔄 Carrusel de promociones (próximamente)</span>
      </div>
    </section>
  );
}
