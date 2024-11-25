import styles from "./Header.module.css";
import logo from "../../../src/img/vlib.svg";
import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchPage from "../../pages/SearchPage";

export default function Header() {
  const [search, setSearchInput] = useState("");
  const searchValue = useRef();
  const navigate = useNavigate();

  function handleSearch(e) {
    if (e.key === "Enter") {
      const query = searchValue.current.value;
      if (query) {
        navigate(`/search?query=${query}`);
      }
    }
  }

  return (
    <header>
      <div className={styles.container}>
        <Link to="/">
          <div className={styles.logo}>
            <img src={logo} alt="Logo da VLib" />
          </div>
        </Link>

        <div className={styles.searchBar}>
          <input
            type="text"
            placeholder="encontre sua próxima leitura"
            ref={searchValue}
            onKeyDown={handleSearch}
          />
        </div>

        <Link to="/search">
          <h2>Pesquisar</h2>
        </Link>
      </div>
    </header>
  );
}
