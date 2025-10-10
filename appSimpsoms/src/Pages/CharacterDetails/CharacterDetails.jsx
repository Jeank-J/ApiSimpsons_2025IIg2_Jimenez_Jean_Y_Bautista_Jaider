import React from 'react'
import { useEffect, useState } from "react";
import CardCharacter from '../../Components/CardCharacter/CardCharacter'

import './CharacterDetails.css';
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
                    <ul className="characters-list">
                        {
                            characters.map(character => (
                                <CardCharacter key={character.id} character={character} />
                            ))
                        }
                    </ul>


                    <div className="d-flex justify-content-center align-items-center my-5">
                        <button
                            className="btn btn-primary mx-2"
                            onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                        >
                            Anterior
                        </button>

                        <span className="mx-3 fs-5">
                            Pagina {page} de {totalPages}
                        </span>

                        <button
                            className="btn btn-primary mx-2"
                            onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                            disabled={page === totalPages}
                        >
                            Siguiente
                        </button>
                    </div>

                </div>
            )}

        </div>
    )
}

export default CharacterDetails
