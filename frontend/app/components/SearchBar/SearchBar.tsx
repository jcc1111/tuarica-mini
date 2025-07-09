import React from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar() {
  return (
    <div className={styles.searchBarContainer}>
      <input
        className={styles.searchInput}
        type="text"
        placeholder="Buscar..."
        disabled
      />
    </div>
  );
}
