import React from "react";
import styles from "./Header.module.css";

export interface HeaderProps {
  titulo: string;
  esModoOscuro?: boolean;
}

export default function Header({ titulo, esModoOscuro = false }: HeaderProps) {
  return (
    <header className={esModoOscuro ? styles.headerDark : styles.header}>
      <h1>{titulo}</h1>
    </header>
  );
}
