import React from 'react'
import { useEffect, useState } from "react";
import { useSearchParams } from 'react-router-dom';
import CardsLocation from '../../Components/CardsLocation/CardsLocation';
import Loading from '../../Components/Loading/Loading';
import './LocationDetails.css'
const base = "https://cdn.thesimpsonsapi.com/500";

const LocationDetails = () => {
    const [locations, setLocations] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = Number(searchParams.get('page')) || 1;
    const [page, setPage] = useState(initialPage);
    const [totalPages, setTotalPages] = useState(1);
    const [loading, setLoading] = useState(true);
    const [totalLocations, setTotalLocations] = useState(0);
    const [preloadedImg, setPreloadedImg] = useState(null);

    const preloadRandomImage = async () => {
        try {
            setPreloadedImg(null);
            const cached = Number(localStorage.getItem('locations.count')) || 0;
            // Fallback razonable si no tenemos el count aún
            const max = cached > 0 ? cached : 500;

            // Intentar hasta 3 veces obtener una imagen válida
            for (let attempt = 0; attempt < 3; attempt++) {
                const random = Math.floor(Math.random() * max) + 1;
                try {
                    const res = await fetch(`https://thesimpsonsapi.com/api/locations/${random}`);
                    if (!res.ok) continue;
                    const data = await res.json();
                    if (!data || !data.image_path) continue;
                    const img = new Image();
                    img.src = `${base}${data.image_path}`;
                    await new Promise(resolve => {
                        img.onload = resolve;
                        img.onerror = resolve;
                    });
                    setPreloadedImg(img.src);
                    break;
                } catch {/* ignorar e intentar de nuevo */ }
            }
        } catch (err) {
            console.error("Error precargando imagen:", err);
        }
    };


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await preloadRandomImage();

            const delay = 600;
            const startTime = Date.now();
            try {
                const res = await fetch(`https://thesimpsonsapi.com/api/locations?page=${page}`);
                const data = await res.json();
                setLocations(data.results);
                setTotalPages(data.pages);
                setTotalLocations(data.count);
                try {
                    localStorage.setItem('locations.count', String(data.count || 0));
                } catch { }
                const timeElapsed = Date.now() - startTime;
                const remaining = Math.max(0, delay - timeElapsed);
                setTimeout(() => setLoading(false), remaining);
            } catch (err) {
                console.error("Fetch error:", err);
                setLoading(false);
            }
        };

        fetchData();
    }, [page]);

    useEffect(() => {
        const current = Number(searchParams.get('page')) || 1;
        if (current !== page) {
            setSearchParams({ page: String(page) }, { replace: true });
        }
    }, [page]);

    useEffect(() => {
        const current = Number(searchParams.get('page')) || 1;
        if (current !== page) {
            setPage(current);
        }
    }, [searchParams]);


    if (loading) return <Loading preloadedImg={preloadedImg} />;

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
