import styles from "./page.module.css";
import { Categorias } from "./components/Categorias";
import { Produtos } from "./components/Produtos";

async function fetchProdutosApi() {
  const res = await fetch(
    "https://api.npoint.io/858e26b4d34970582173/produtos",
  );

  if (!res.ok) {
    throw new Error("Não foi possivel obter os dados");
  }

  const produtos = await res.json();

  return produtos;
}

async function fetchCategoriasApi() {
  const res = await fetch("http://localhost:3000/api/categorias");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const produtos = await res.json();

  return produtos;
}

export default async function Home() {
  const produtos = await fetchProdutosApi();
  const { categorias } = await fetchCategoriasApi();

  return (
    <>
      <main className={styles.main}>
        <Categorias categorias={categorias} />
        <Produtos produtos={produtos} />
      </main>
    </>
  );
}
