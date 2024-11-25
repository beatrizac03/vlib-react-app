import { useEffect } from "react";
import Header from "../../components/Header";
import { useLivrosContext } from "../../context/ContextLivro";
import { useParams } from "react-router-dom";
import styles from "./Livro.module.css"

export default function Livro() {
  const { livros, fetchData, adcComment } = useLivrosContext();
  const { id } = useParams();
  const livro = livros.find((livro) => livro.id == id);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const getAuthors = () => {
    if (livro.authors.length > 1) {
      return livro.authors.join(", ");
    }

    return livro.authors[0];
  };

  return (
    <>
      <Header />
      <div className={styles.container}>
        <div className={styles.imgInfo}>
          <div className={styles.imgCard}>
            <img src={livro.imageLinks.thumbnail} />
          </div>
          <div className={styles.infoCard}>
            <h1>{livro.title} </h1>
            <h2>Autores: {getAuthors()} </h2>
            <h3>Editora: {livro.publisher} </h3>
            <h3>Data de publicação: {livro.publishedDate} </h3>
            <h3>Qtde páginas: {livro.pageCount} </h3>
          </div>
        </div>

        <div className={styles.descLivro}>
          <h2>Descrição</h2>
          <h3>{livro.description}</h3>
        </div>
      </div>
    </>
  );
}
