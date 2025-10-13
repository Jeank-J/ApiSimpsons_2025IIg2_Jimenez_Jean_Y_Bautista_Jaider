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
            <div className="container my-5 text-center">
                <h1 className="fw-bold mb-3 text-warning display-5">
                    Personajes de Los Simpson
                </h1>

                <p className="lead mx-auto w-75 text-secondary">
                    Explora la <span className="text-warning fw-semibold">lista completa </span>
                    de personajes icónicos que han dado vida a
                    <span className="text-primary fw-semibold"> Springfield</span>.
                    Cada uno tiene una <span className="text-warning">historia unica</span>,
                    una voz inconfundible y momentos que marcaron la serie.
                </p>

                <hr className="my-4 border-3 border-warning w-50 mx-auto" />
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
        </>
    )
}

export default CharacterDetails
