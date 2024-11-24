import styles from "./Header.module.css";
import logo from "../../../src/img/vlib.svg";

export default function Header() {
  return (
    <header>
      <div className={styles.container}>
        <div className={styles.logo}>
          <img src={logo} alt="Logo da VLib" />
        </div>

        <div className={styles.searchBar}>
          <input type="text" placeholder="encontre sua próxima leitura" />
        </div>

        <h2>Pesquisar</h2>
      </div>
    </header>
  );
}
