"use client";

import { useEffect, useState } from "react";
import { Categoria } from "@/types/categoria";
import { API_URL } from "@/config";
import CategoriesSection from "@/app/components/CategoriesSection/CategoriesSection";
import CallToAction from "@/app/components/CallToAction/CallToAction";

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
      <CategoriesSection categorias={cats} />
      <CallToAction />
      <a href="/categorias">Ir a CRUD de Categorías</a>
    </main>
  );
}
