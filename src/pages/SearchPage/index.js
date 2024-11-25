import Header from "../../components/Header";
import { useLocation, useParams } from "react-router-dom";
import { useLivrosContext } from "../../context/ContextLivro";
import CardLivro from "../../components/CardLivro";
import styles from "./SearchPage.module.css";

export default function SearchPage() {
  const { livros } = useLivrosContext(); // retorna a lista de livros do Context
  const { pesquisa } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query")?.toLowerCase();

  const livrosCorrespondentes = livros.filter((livro) => {
    const title = livro.title?.toLowerCase() || "";

    const categories = livro.categories?.some((category) =>
      category.toLowerCase().includes(searchQuery)
    );

    const authors = livro.authors?.some((author) =>
      author.toLowerCase().includes(searchQuery)
    );

    return (
      searchQuery && (title.includes(searchQuery) || categories || authors)
    );
  });

  return (
    <>
      <Header />
      <div className={styles.containAll}>
        <div className={styles.result}>
          <h2>Resultados para: {searchQuery} </h2>
        </div>
        <div className={styles.containerResults}>
          {livrosCorrespondentes.length > 0 ? (
            livrosCorrespondentes.map((livro) => (
              <CardLivro key={livro.id} livro={livro} />
            ))
          ) : (
            <p>Nenhum resultado encontrado para "{searchQuery}"</p>
          )}
        </div>
      </div>
    </>
  );
}
