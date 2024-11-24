import styles from "./Livros.module.css";
import { addComment, getBooks } from "../../api/LivrosAPI";
import { useEffect, useState } from "react";
import CardLivro from "../CardLivro";

export default function Livros() {
  const [livros, setLivros] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const dados = await getBooks();
      setLivros(dados);
    }

    fetchData();
  }, []);

  const livrosCurrentlyReading = livros.filter(
    (livro) => livro.shelf == "currentlyReading"
  );
  const livrosQueroLer = livros.filter((livro) => livro.shelf == "wantToRead");
  const livrosLidos = livros.filter((livro) => livro.shelf == "read");

  return (
    <main>
      <div className={styles.currentlyReading}>
        <h2>Continuar Lendo</h2>
        <div className={styles.wrapperLivros}>
          {livrosCurrentlyReading.map((livro) => (
            <CardLivro livro={livro} />
          ))}
        </div>
      </div>
      <div className={styles.wantToRead}>
        <h2>Quero Ler</h2>
        <div className={styles.wrapperLivros}>
          {livrosQueroLer.map((livro) => (
            <CardLivro livro={livro} />
          ))}
        </div>
      </div>
      <div className={styles.read}>
        <h2>Lido</h2>
        <div className={styles.wrapperLivros}>
          {livrosLidos.map((livro) => (
            <CardLivro livro={livro} />
          ))}
        </div>
      </div>
    </main>
  );
}