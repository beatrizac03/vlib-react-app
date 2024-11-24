import styles from "./Home.module.css";
import Header from "../../components/Header";
import Livros from "../../components/Livros";

export default function Home() {
  return (
    <>
      <Header />
      <Livros />
    </>
  );
}
