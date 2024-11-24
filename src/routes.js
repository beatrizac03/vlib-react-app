import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SearchPage from "./pages/SearchPage";
import Livro from "./pages/Livro";
import LivrosProvider from "./context/ContextLivro";

function AppRoutes() {
  return (
    <BrowserRouter>
      <LivrosProvider>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="search" element={<SearchPage />} />
            <Route path=":id" element={<Livro />} />
          </Route>
        </Routes>
      </LivrosProvider>
    </BrowserRouter>
  );
}

export default AppRoutes;
