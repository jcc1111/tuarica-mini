import React from "react";
import styles from "./CategoriesSection.module.css";
import { Categoria } from "@/types/categoria";

interface CategoriesSectionProps {
  categorias: Categoria[];
}

export default function CategoriesSection({ categorias }: CategoriesSectionProps) {
  return (
    <section className={styles.categoriesSection}>
      <h2>Categorías</h2>
      {categorias.length === 0 ? (
        <p className={styles.emptyMsg}>No hay categorías disponibles.</p>
      ) : (
        <ul className={styles.categoriesList}>
          {categorias.map((cat) => (
            <li key={cat.id} className={styles.categoryItem}>
              {cat.nombre}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
