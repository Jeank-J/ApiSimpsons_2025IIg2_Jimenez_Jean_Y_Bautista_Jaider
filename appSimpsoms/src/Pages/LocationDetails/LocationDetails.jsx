import React from 'react'
import { useEffect, useState } from "react";
import CardsLocation from '../../Components/CardsLocation/CardsLocation';
import Loading from '../../Components/Loading/Loading';
import './LocationDetails.css'
const LocationDetails = () => {
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        const delay = 1000;
        const startTime = Date.now();
        fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setLocations(data.results);
                setTotalPages(data.pages);
                const timeElapsed = Date.now() - startTime;
                if (timeElapsed < delay) {
                    setTimeout(() => setLoading(false), delay - timeElapsed);
                } else {
                    setLoading(false);
                }

            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setLoading(false);
            });

        // .finally(() => setLoading(false));
    }, [page]);

    if (loading) {
        return <Loading />;
    }

    return (

        <div className="locations-container">
            <header className="locations-header">
                <h1 className="locations-title">Ubicaciones de <span className="highlight">Los Simpsons</span></h1>
                <p className="locations-subtitle">Explora lugares famosos de Springfield y sus alrededores</p>
            </header>

            <div className="locations-styles">
                {locations.map(lo => (<CardsLocation key={lo.id} Location={lo}


                />))}

            </div>
            <nav className="pagination" aria-label="Paginación de ubicaciones" >
                <button className="page-btn" onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
                    Anterior
                </button>
                <div className="page-info">Pagina {page} de {totalPages}</div>
                <button className="page-btn" onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
                    Siguiente
                </button>
            </nav>

        </div>
    )
}

export default LocationDetails
