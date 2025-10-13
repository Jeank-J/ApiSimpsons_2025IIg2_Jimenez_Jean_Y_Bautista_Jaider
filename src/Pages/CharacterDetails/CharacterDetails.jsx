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
        <>
            <section className="characters-section">
                                
                <div className="container my-5 text-center simpsons-header">
                    <h1 className="simpsons-title">
                        Personajes de Los Simpson
                    </h1>

                    <p className="simpsons-description">
                        Explora la <span className="highlight">lista completa</span> de personajes icónicos
                        que han dado vida a <span className="blue">Springfield</span>. Cada uno tiene una{" "}
                        <span className="highlight">historia unica</span>, una voz inconfundible y momentos
                        que marcaron la serie.
                    </p>

                    <hr className="simpsons-divider" />
                </div>



                <div className="container">
                    {loading ? (
                        <p className="text-center fs-5">Cargando...</p>
                    ) : (
                        <>
                            <ul className="characters-list row justify-content-center g-4">
                                {characters.map((character) => (
                                    <CardCharacter key={character.id} character={character} />
                                ))}
                            </ul>

                            <div className="d-flex justify-content-center align-items-center my-5">
                                <button
                                    className="btn btn-warning mx-2 px-4 fw-bold"
                                    onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                                    disabled={page === 1}
                                >
                                    Anterior
                                </button>

                                <span className="mx-3 fs-5 fw-semibold text-secondary">
                                    Página {page} de {totalPages}
                                </span>

                                <button
                                    className="btn btn-warning mx-2 px-4 fw-bold"
                                    onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
                                    disabled={page === totalPages}
                                >
                                    Siguiente
                                </button>
                            </div>
                        </>
                    )}
                </div>
            </section>
        </>
    )
}

export default CharacterDetails
