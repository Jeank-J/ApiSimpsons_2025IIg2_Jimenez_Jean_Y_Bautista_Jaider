import React from 'react'
import { useEffect, useState } from "react";



const CharacterDetails = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://thesimpsonsapi.com/api/characters?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setCharacters(data.results);
                setTotalPages(data.pages);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error al obtener personajes:', err);
                setLoading(false);
            });
    }, [page]);

    return (
        <div>
            <h1>Personajes de Los Simpsons</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <ul>
                        {characters.map(character => (
                            <li key={character.id}>
                                <h2>{character.name}</h2>
                                <img src={
                                    `https://cdn.thesimpsonsapi.com/500${character.portrait_path}`
                                } alt={character.name} width="100" />
                                <p>{character.description}</p>
                            </li>
                        ))}
                    </ul>
                    <div>
                        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
                            Anterior
                        </button>
                        <span>Pagina {page} de {totalPages}</span>
                        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
                            Siguiente
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}

export default CharacterDetails
