import React from 'react'
import { useEffect, useState } from "react";


const LocationDetails = () => {
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setLocations(data.results);
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
            <h1>Ubicaciones de Los Simpsons</h1>
            {loading ? (
                <p>Cargando...</p>
            ) : (
                <div>
                    <ul>
                        {locations.map(location => (
                            <li key={location.id}>
                                <h1>{location.id}</h1>
                                <h2>{location.name}</h2>
                                <img src={
                                    `https://cdn.thesimpsonsapi.com/500${location.image_path}`
                                } alt={location.name} width="100" />
                                <p>{location.description}</p>
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

export default LocationDetails
