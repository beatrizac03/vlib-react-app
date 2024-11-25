import Header from "../../components/Header";
import { useLocation, useParams } from "react-router-dom";
import { useLivrosContext } from "../../context/ContextLivro";
import CardLivro from "../../components/CardLivro";

export default function SearchPage() {
  const { livros } = useLivrosContext(); // retorna a lista de livros do Context
  const { pesquisa } = useParams();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("query")?.toLowerCase();

  const livrosCorrespondentes = livros.filter((livro) => {
    const title = livro.title?.toLowerCase() || "";
    const category = livro.category?.toLowerCase() || "";
    return (
      searchQuery &&
      (title.includes(searchQuery) || category.includes(searchQuery))
    );
  });

  return (
    <>
      <Header />
      <div>
        <h2>Resultados para: {searchQuery} </h2>
      </div>
      {livrosCorrespondentes.length > 0 ? (
        livrosCorrespondentes.map((livro) => (
          <CardLivro key={livro.id} livro={livro} />
        ))
      ) : (
        <p>Nenhum resultado encontrado para "{searchQuery}"</p>
      )}
    </>
  );
}
