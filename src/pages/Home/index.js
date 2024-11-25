import styles from "./Home.module.css";
import "../../styles.css";
import Header from "../../components/Header";
import Livros from "../../components/Livros";
import Banner from "../../components/Banner";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Livros />
    </>
  );
}
