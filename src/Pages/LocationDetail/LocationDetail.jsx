import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Card, CardContent, CardMedia, Typography, Button, Box, Chip, Divider, Paper } from '@mui/material';
import { ArrowBack, LocationOn, Business, CalendarToday } from '@mui/icons-material';
import Loading from '../../Components/Loading/Loading';
import noImg from '../../assets/NoImg.jpg';
import './LocationDetail.css';

const LocationDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [location, setLocation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [preloadedImg, setPreloadedImg] = useState(null);

    const preloadRandomImage = async () => {
        try {
            setPreloadedImg(null);
            const cached = Number(localStorage.getItem('locations.count')) || 0;
            const max = cached > 0 ? cached : 500;
            for (let attempt = 0; attempt < 3; attempt++) {
                const random = Math.floor(Math.random() * max) + 1;
                try {
                    const res = await fetch(`https://thesimpsonsapi.com/api/locations/${random}`);
                    if (!res.ok) continue;
                    const data = await res.json();
                    if (!data || !data.image_path) continue;
                    const img = new Image();
                    img.src = `https://cdn.thesimpsonsapi.com/500${data.image_path}`;
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
        const fetchLocation = async () => {
            try {
                setLoading(true);
                await preloadRandomImage();

                const delay = 600;
                const startTime = Date.now();
                const res = await fetch(`https://thesimpsonsapi.com/api/locations/${id}`);
                if (!res.ok) {
                    navigate('/404', { replace: true });
                    return;
                }
                const data = await res.json();
                setLocation(data);
                const timeElapsed = Date.now() - startTime;
                const remaining = Math.max(0, delay - timeElapsed);
                setTimeout(() => setLoading(false), remaining);
            } catch (err) {
                navigate('/404', { replace: true });
            }
        };

        fetchLocation();
    }, [id]);

    const handleBack = () => {
        navigate(-1); // Vuelve a la pagina anterior
    };

    if (loading) return <Loading preloadedImg={preloadedImg} />;

    return (
        <div className="location-detail-page">
            <Container maxWidth="lg" className="location-detail-container">
                <Box sx={{ mb: 3 }}>
                    <Button
                        variant="contained"
                        startIcon={<ArrowBack />}
                        onClick={handleBack}
                        sx={{
                            backgroundColor: '#FFD700',
                            color: '#0f172a',
                            fontWeight: 'bold',
                            borderRadius: '20px',
                            padding: '10px 20px',
                            fontFamily: 'SimpsonsFont, Arial, sans-serif',
                            '&:hover': {
                                backgroundColor: '#F5C04A',
                                transform: 'translateY(-2px)',
                                boxShadow: '0 4px 12px rgba(255, 215, 0, 0.4)'
                            }
                        }}
                    >
                        Volver
                    </Button>
                </Box>

                <Card className="location-detail-card" sx={{
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 12px 30px rgba(2, 6, 23, 0.15)',
                    backgroundColor: '#FFF7D6'
                }}>
                    <CardMedia
                        component="img"
                        height="400"
                        image={location.image_path ? `https://cdn.thesimpsonsapi.com/500${location.image_path}` : noImg}
                        alt={location.name}
                        sx={{
                            objectFit: 'cover',
                            backgroundColor: '#D1B271'
                        }}
                    />

                    <CardContent sx={{ padding: '30px' }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            className="location-title"
                            sx={{
                                fontFamily: 'SimpsonsFont, Arial, sans-serif',
                                color: '#0f172a',
                                textAlign: 'center',
                                marginBottom: '20px'
                            }}
                        >
                            {location.name}
                        </Typography>

                        <Box className="location-chips" sx={{
                            display: 'flex',
                            gap: 2,
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            marginBottom: '25px'
                        }}>
                            <Chip
                                icon={<LocationOn />}
                                label={location.town || 'Unknown Town'}
                                color="primary"
                                sx={{
                                    backgroundColor: '#70D1FE',
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}
                            />
                            <Chip
                                icon={<Business />}
                                label={location.use || 'Unknown Use'}
                                color="secondary"
                                sx={{
                                    backgroundColor: '#D1B271',
                                    color: '#ffffff',
                                    fontWeight: 'bold',
                                    fontSize: '14px'
                                }}
                            />
                        </Box>

                        <Divider sx={{ marginY: '25px' }} />

                        <Paper elevation={2} sx={{
                            padding: '20px',
                            backgroundColor: '#FFF3C0',
                            border: '1px solid rgba(209, 178, 113, 0.25)',
                            borderRadius: '15px',
                            marginBottom: '25px',
                            '&:hover': {
                                boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)',
                                transform: 'translateY(-3px)',
                                borderColor: 'rgba(209, 178, 113, 0.5)'
                            }
                        }}>
                            <Typography
                                variant="h5"
                                gutterBottom
                                sx={{
                                    fontFamily: 'SimpsonsFont, Arial, sans-serif',
                                    color: '#0f172a',

                                }}
                            >
                                Descripción
                            </Typography>
                            <Typography
                                variant="body1"
                                sx={{
                                    lineHeight: 1.8,
                                    fontSize: '16px',
                                    color: '#475569',
                                    fontFamily: 'Comic Sans MS, Trebuchet MS, Arial, sans-serif'
                                }}
                            >
                                {location.description || 'No description available'}
                            </Typography>
                        </Paper>

                        {location.first_appearance_ep && (
                            <Paper elevation={2} sx={{
                                padding: '20px',
                                backgroundColor: '#FFF7D6',
                                borderRadius: '15px',
                                '&:hover': {
                                    boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)',
                                    transform: 'translateY(-3px)',
                                    borderColor: 'rgba(209, 178, 113, 0.5)'
                                }
                            }}>
                                <Typography
                                    variant="h5"
                                    gutterBottom
                                    sx={{
                                        fontFamily: 'Comic Sans MS, Trebuchet MS, Arial, sans-serif',
                                        color: '#0f172a',
                                        marginBottom: '15px'
                                    }}
                                >
                                    Primera Aparición
                                </Typography>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <CalendarToday sx={{ color: '#D1B271' }} />
                                    <Typography variant="body1" sx={{
                                        fontWeight: 'bold',
                                        fontFamily: 'Comic Sans MS, Trebuchet MS, Arial, sans-serif'
                                    }}>
                                        {location.first_appearance_ep.name}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" sx={{
                                    color: '#475569',
                                    mb: 1,
                                    fontFamily: 'Comic Sans MS, Trebuchet MS, Arial, sans-serif'
                                }}>
                                    Temporada {location.first_appearance_ep.season}, Episodio {location.first_appearance_ep.episode_number}
                                </Typography>
                                <Typography variant="body2" sx={{
                                    color: '#475569',
                                    fontFamily: 'Comic Sans MS, Trebuchet MS, Arial, sans-serif',
                                    lineHeight: 1.6
                                }}>
                                    {location.first_appearance_ep.synopsis}
                                </Typography>
                            </Paper>
                        )}
                    </CardContent>
                </Card>
            </Container>
        </div>
    );
};

export default LocationDetail;