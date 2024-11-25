import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Livro from "./pages/Livro";
import LivrosProvider from "./context/ContextLivro";

function AppRoutes() {
  return (
    <LivrosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/:id" element={<Livro />} />
        </Routes>
      </BrowserRouter>
    </LivrosProvider>
  );
}

export default AppRoutes;
