"use client";

import { useEffect, useState } from "react";
import { Categoria } from "@/types/categoria";
import { API_URL } from "@/config";
import Link from "next/link";

export default function AdminCategoriasPage() {
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
    fetchCats();
  };

  return (
    <main>
      <h1>Categorías</h1>
      <Link href="/admin/categorias/form">Crear nueva categoría</Link>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p style={{ color: "red" }}>{error}</p>
      ) : cats.length === 0 ? (
        <p>No hay categorías aún.</p>
      ) : (
        <ul>
          {cats.map((cat) => (
            <li key={cat.id}>
              {cat.nombre}
              <button onClick={() => startEdit(cat)}>Editar</button>
              <button onClick={() => handleDelete(cat.id)} style={{ color: "red" }}>
                Eliminar
              </button>
            </li>
          ))}
        </ul>
      )}
      {editId !== null && (
        <form onSubmit={handleEdit} style={{ marginTop: 16 }}>
          <input
            type="text"
            value={editNombre}
            onChange={(e) => setEditNombre(e.target.value)}
            required
          />
          <button type="submit">Guardar</button>
          <button type="button" onClick={() => setEditId(null)}>
            Cancelar
          </button>
        </form>
      )}
      <br />
      <Link href="/">Volver al inicio</Link>
    </main>
  );
}
