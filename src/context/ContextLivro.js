import React, {createContext, useContext, useState} from "react";
import { addComment, getBooks } from "../api/LivrosAPI";

export const LivrosContext = createContext()

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
        <LivrosContext.Provider value={{ livros, setLivros, fetchData, adcComment }}>
            {children}
        </LivrosContext.Provider>
    )
}

export function useLivrosContext() {
    const context = useContext(LivrosContext)

    if (!context) {
        throw new Error("useLivrosContext deve ser usado dentro de um LivrosProvider");
      } 
      return context;
}



