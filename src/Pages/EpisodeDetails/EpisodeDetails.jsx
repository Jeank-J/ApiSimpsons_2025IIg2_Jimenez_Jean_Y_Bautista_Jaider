import * as React from 'react';
import { useSearchParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Tab from '@mui/material/Tab';
import CardContent from '@mui/material/CardContent';
const base = "https://cdn.thesimpsonsapi.com/500";
import Loading from '../../Components/Loading/Loading';
import CardsEpisodes from '../../Components/CardsEpisodes/CardsEpisodes';
import Button from '@mui/material/Button';

const EpisodeDetails = () => {
    const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => { setValue(newValue); };

    const [Episode, setEpisode] = React.useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const initialPage = Number(searchParams.get('page')) || 1;
    const [page, setPage] = React.useState(initialPage);
    const [totalPages, setTotalPages] = React.useState(1);
    const [loading, setLoading] = React.useState(true);
    const [TotalEpisodes, setTotalEpisodes] = React.useState(0);
    const [RandomEpisode, setRandomEpisode] = React.useState(-1);
    const [preloadedImg, setPreloadedImg] = React.useState(null);

    const preloadRandomImage = async () => {
        try {
            setPreloadedImg(null);
            const cached = Number(localStorage.getItem('episodes.count')) || 0;
            console.log("cached episodes count:", cached);
            const max = cached > 0 ? cached : 700;
            for (let attempt = 0; attempt < 3; attempt++) {
                const random = Math.floor(Math.random() * max) + 1;
                try {
                    const res = await fetch(`https://thesimpsonsapi.com/api/episodes/${random}`);
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

    const getRandomEpisode = async () => {
        try {
            const cached = Number(localStorage.getItem('episodes.count')) || 0;
            const max = cached > 0 ? cached : 700;
            const randomId = Math.floor(Math.random() * max) + 1;

            const res = await fetch(`https://thesimpsonsapi.com/api/episodes/${randomId}`);
            if (!res.ok) throw new Error('Error al obtener episodio');
            const data = await res.json();

            setRandomEpisode(data);
        } catch (err) {
            console.error('Error obteniendo episodio aleatorio:', err);
            setRandomEpisode(null);
        }
    };


    React.useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            await preloadRandomImage();

            const delay = 600;
            const startTime = Date.now();
            try {
                const res = await fetch(`https://thesimpsonsapi.com/api/episodes?page=${page}`);
                const data = await res.json();
                setEpisode(data.results);
                setTotalPages(data.pages);
                setTotalEpisodes(data.count);
                try {
                    localStorage.setItem('episodes.count', String(data.count || 0));
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

    React.useEffect(() => {
        const current = Number(searchParams.get('page')) || 1;
        if (current !== page) {
            setSearchParams({ page: String(page) }, { replace: true });
        }
    }, [page]);

    React.useEffect(() => {
        const current = Number(searchParams.get('page')) || 1;
        if (current !== page) {
            setPage(current);
        }
    }, [searchParams]);


    if (loading) return <Loading preloadedImg={preloadedImg} />;



    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <TabContext value={value}

            >
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Random Episode" value="1" />
                        <Tab label="List Episodes" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <CardContent
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                            gap: 10,
                            backgroundColor: '#70D1FE',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            marginTop: '16px',
                        }} >
                        <Button variant="contained" onClick={() => getRandomEpisode()}>
                            Ay, caramba
                        </Button>
                        {RandomEpisode !== -1 && <CardsEpisodes key={RandomEpisode.id} episode={RandomEpisode} />}

                    </CardContent>

                </TabPanel>
                <TabPanel value="2" sx={{
                    backgroundColor: '#059adfff',
                }}>
                    <CardContent
                        sx={{
                            height: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyItems: 'center',
                            gap: 10,
                            backgroundColor: '#70D1FE',
                            borderRadius: '8px',
                            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                            marginTop: '16px',
                        }}
                    >

                        {Episode.map((ep) => (
                            <CardsEpisodes key={ep.id} episode={ep} />
                        ))}

                    </CardContent>
                    <nav className="pagination" aria-label="Paginacion de ubicaciones" >
                        <button className="page-btn" onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
                            Anterior
                        </button>
                        <div className="page-info">Pagina {page} de {totalPages}</div>
                        <button className="page-btn" onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
                            Siguiente
                        </button>
                    </nav>


                </TabPanel>
            </TabContext>
        </Box >
    );
};

export default EpisodeDetails;
