import React from "react";
import styles from "./PromotionsCarousel.module.css";

export default function PromotionsCarousel() {
  return (
    <section className={styles.carouselContainer}>
      <div className={styles.carouselPlaceholder}>
        <span>🔄 Carrusel de promociones (próximamente)</span>
      </div>
    </section>
  );
}
