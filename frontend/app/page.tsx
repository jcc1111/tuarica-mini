"use client";

import { useEffect, useState } from "react";
import { Categoria } from "@/types/categoria";

export default function Home() {
  const [cats, setCats] = useState<Categoria[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/categorias")
      .then(res => res.json())
      .then(setCats)
      .catch(console.error);
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Lista de Categorías</h1>
      {cats.length === 0 ? (
        <p>No hay categorías aún.</p>
      ) : (
        <ul>
          {cats.map(c => <li key={c.id}>{c.nombre}</li>)}
        </ul>
      )}
    </main>
  );
}
