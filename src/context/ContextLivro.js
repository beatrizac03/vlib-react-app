import React, {createContext, useContext, useState} from "react";
import { addComment, getBooks } from "../api/LivrosAPI";

const LivrosContext = createContext()
 /* LivrosContext.displayName = "Livros" */

export function useLivrosContext() {
    const context = useContext(LivrosContext)

    if (!context) {
        throw new Error("useLivrosContext deve ser usado dentro de um LivrosProvider");
      }
      return context;
}

export default function LivrosProvider( {children} ) {
    const [livros, setLivros] = useState([])

    async function fetchData() {
        try {
            const dados = await getBooks()
            setLivros(dados)
        } catch (error) {
            console.log("Erro ao listar os livros: ", error.message)
        }
    }

    async function adcComment(idLivro, comentario) {
        try {
            await addComment(idLivro, comentario)
            fetchData()
        } catch(error) {
            console.log("Erro ao adicionar comentário: ", error.message)
        }
    }

    return(
        <LivrosContext.Provider value={{ livros, fetchData, adcComment }}>
            {children}
        </LivrosContext.Provider>
    )
}

