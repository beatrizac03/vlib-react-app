import { Link } from "react-router-dom";
import styles from "./CardLivro.module.css";
import Livro from "../../pages/Livro";
import { useState } from "react";

export default function CardLivro({ livro, onShelfChange }) {
  const getAuthors = () => {
    if (livro.authors.length > 1) {
      return livro.authors.join(", ");
    }

    return livro.authors[0];
  };

  const [shelfStatus, setShelfStatus] = useState(livro.shelf);

  const handleStatus = (e) => {
    const newShelf = e.target.value;
    setShelfStatus(newShelf);
    if (onShelfChange) {
      onShelfChange(livro, newShelf);
    }
  };

  return (
    <Link to={`/${livro.id}`}> 
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
      <select
        id="dropdown"
        name="options"
        value={shelfStatus}
        onChange={handleStatus}
      >
        <option value="currentlyReading">Continuar Lendo</option>
        <option value="wantToRead">Quero Ler</option>
        <option value="read">Lido</option>
      </select>
    </div>
    </Link>
  );
}
