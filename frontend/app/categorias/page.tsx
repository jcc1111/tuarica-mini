'use client';

// Las rutas de CRUD de categorías han sido trasladadas a /admin/categorias/
// Puedes eliminar o reutilizar este archivo si lo deseas.

import Link from "next/link";
import { useEffect, useState } from "react";
import { Categoria } from "@tuarica/shared/types";
import { API_URL } from "@/config";
import styles from "./Categorias.module.css";

export default function CategoriasPage() {
  const [cats, setCats] = useState<Categoria[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editId, setEditId] = useState<number | null>(null);
  const [editNombre, setEditNombre] = useState("");

  const fetchCats = () => {
    setLoading(true);
    fetch(`${API_URL}/categorias`)
      .then((res) => {
        if (!res.ok) throw new Error("Error al cargar categorías");
        return res.json();
      })
      .then(setCats)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchCats();
  }, []);

  const handleDelete = async (id: number) => {
    if (!confirm("¿Eliminar esta categoría?")) return;
    await fetch(`${API_URL}/categorias/${id}`, { method: "DELETE" });
    fetchCats();
  };

  const startEdit = (cat: Categoria) => {
    setEditId(cat.id);
    setEditNombre(cat.nombre);
  };

  const handleEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId === null) return;
    await fetch(`${API_URL}/categorias/${editId}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ nombre: editNombre }),
    });
    setEditId(null);
    setEditNombre("");
    fetchCats();
  };

  return (
    <main>
      <h1>Categorías</h1>
      <Link href="/categorias/form">Crear nueva categoría</Link>
      {loading && <p>Cargando...</p>}
      {error && <p className={styles.error}>Error: {error}</p>}
      <ul>
        {cats.map((c) => (
          <li key={c.id}>
            {editId === c.id ? (
              <form onSubmit={handleEdit} className={styles.inlineForm}>
                <input
                  value={editNombre}
                  onChange={e => setEditNombre(e.target.value)}
                  required
                  placeholder="Nombre de la categoría"
                  title="Nombre de la categoría"
                />
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => setEditId(null)}>Cancelar</button>
              </form>
            ) : (
              <>
                {c.nombre}
                <button onClick={() => startEdit(c)} className={styles.buttonEdit}>Editar</button>
                <button onClick={() => handleDelete(c.id)} className={styles.buttonDelete}>Eliminar</button>
              </>
            )}
          </li>
        ))}
      </ul>
      <Link href="/">Volver a inicio</Link>
    </main>
  );
}
