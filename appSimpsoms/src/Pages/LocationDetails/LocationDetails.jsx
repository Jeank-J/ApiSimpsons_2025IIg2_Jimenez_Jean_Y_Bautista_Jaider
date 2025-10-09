import React from 'react'
import { useEffect, useState } from "react";
import CardsLocation from '../../Components/CardsLocation/CardsLocation';
import './LocationDetails.css'
const LocationDetails = () => {
    const [locations, setLocations] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`)
            .then(res => res.json())
            .then(data => {
                setLocations(data.results);
                setTotalPages(data.pages);

            })
            .catch((err) => console.error("Fetch error:", err))
            .finally(() => setLoading(false));
    }, [page]);

    if (loading) {
        return <h1>Cargando...</h1>
    }

    return (

        <div>

            <h1>Ubicaciones de Los Simpsons</h1>

            <div className="locations-styles">
                {locations.map(lo => (<CardsLocation key={lo.id} Location={lo}
                    

                />))}

            </div>
            <div>
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

        </div>
    )
}

export default LocationDetails
