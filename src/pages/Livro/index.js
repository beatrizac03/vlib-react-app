import { useEffect } from "react";
import Header from "../../components/Header";
import { useLivrosContext } from "../../context/ContextLivro";
import { useParams } from "react-router-dom";

export default function Livro() {
  const { livros, fetchData, adcComment } = useLivrosContext();
  const { idLivro } = useParams();
  const livro = livros.find((livro) => livro.id == idLivro);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <>
      <Header />
      <h1> {livro.title}</h1>
    </>
  );
}
