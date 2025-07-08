"use client";

import { useEffect, useState } from "react";
import { Categoria } from "@/types/categoria";
import { API_URL } from "@/config";

export default function Home() {
  const [cats, setCats] = useState<Categoria[]>([]);

  useEffect(() => {
    fetch(`${API_URL}/categorias`)
      .then(res => res.json())
      .then(setCats)
      .catch(console.error);
  }, []);

  return (
    <main>
      <h1>Lista de Categorías</h1>
      <a href="/categorias">Ir a CRUD de Categorías</a>
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
