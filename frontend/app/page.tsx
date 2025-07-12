"use client";

import { useEffect, useState } from "react";
import { Categoria } from "@tuarica/shared/types";
import { API_URL } from "@/config";
import SearchBar from "@/app/components/SearchBar/SearchBar";
import Carrusel1 from "@/app/components/Carrusel1/Carrusel";
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
      <SearchBar />
      <Carrusel1 />
      <CategoriesSection categorias={cats} />
      <CallToAction />
      <a href="/categorias">Ir a CRUD de Categorías</a>
    </main>
  );
}
