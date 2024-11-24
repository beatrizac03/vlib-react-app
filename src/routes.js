import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./pages/Home"
import SearchPage from "./pages/SearchPage"
import Livro from "./pages/Livro"

function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path="search" element={<SearchPage />} />
                    <Route path=":id" element={<Livro />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes