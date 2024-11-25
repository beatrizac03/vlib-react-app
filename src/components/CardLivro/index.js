import { Link } from "react-router-dom";
import styles from "./CardLivro.module.css";
import Livro from "../../pages/Livro";

export default function CardLivro({ livro }) {
  const getAuthors = () => {
    if (livro.authors.length > 1) {
      return livro.authors.join(", ");
    }

    return livro.authors[0];
  };

  return (
    <Link to={`/${livro.id}`} >
      <div className={styles.card}>
        <div className={styles.imgCard}>
          <img
            src={livro.imageLinks.thumbnail}
            alt={(`Capa do livro `, livro.title)}
          />
        </div>
        <div className={styles.txtCard}>
          <h2>{livro.title}</h2>
          <h3>{getAuthors()} </h3>
        </div>
      </div>
    </Link>
  );
}
