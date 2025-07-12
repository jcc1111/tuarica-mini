"use client";

import { useState } from "react";
import styles from "./Form.module.css";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { API_URL } from "@/config";

export default function CategoriaForm() {
  const [nombre, setNombre] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      const res = await fetch(`${API_URL}/categorias`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre }),
      });
      if (!res.ok) throw new Error("Error al crear categoría");
      setSuccess(true);
      setNombre("");
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <main>
      <h1>Crear Categoría</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>
        <button type="submit">Crear</button>
      </form>
      {success && <p className={styles.success}>¡Categoría creada!</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      <Link href="/categorias">Volver a listado de categorías</Link>
      <br />
      <Link href="/">Volver a inicio</Link>
      <p>El formulario de categorías ahora está en /admin/categorias/form/page.tsx</p>
      <p>Puedes eliminar o reutilizar este archivo si lo deseas.</p>
    </main>
  );
}
