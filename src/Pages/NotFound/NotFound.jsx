import React from 'react'
import { Link } from 'react-router-dom'
import noImg from '../../assets/NoImg.jpg'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

const NotFound = () => {
    return (
        <Box
            component="main"
            role="main"
            sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '70vh',
                p: { xs: 2, sm: 4 },
                background: 'linear-gradient(135deg, #e9d62cff 0%, #be8418ff 100%)'
            }}
        >
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    alignItems: 'center',
                    gap: { xs: 2, sm: 4 },
                    maxWidth: 980,
                    width: '100%',
                    bgcolor: 'rgba(228, 221, 122, 0.9)',
                    backdropFilter: 'blur(6px)',
                    boxShadow: '0 10px 30px rgba(16,24,40,0.08)',
                    borderRadius: 2,
                    p: { xs: 2, sm: 3 }
                }}
                aria-labelledby="notfound-title"
            >
                <Box sx={{ flex: '0 0 auto', textAlign: 'center' }} aria-hidden>
                    <Box
                        component="img"
                        src={noImg}
                        alt="Ilustracion: pagina no encontrada"
                        sx={{ width: { xs: 140, sm: 180, md: 220 }, borderRadius: 1, animation: 'float 4s ease-in-out infinite' }}
                    />
                </Box>

                <Stack spacing={1} sx={{ flex: 1, textAlign: { xs: 'center', sm: 'left' } }}>
                    <Typography id="notfound-title" variant="h2" sx={{ fontSize: { xs: '2.6rem', sm: '3.2rem', md: '4.5rem' }, fontWeight: 800, letterSpacing: '2px', color: '#0f172a' }}>
                        404
                    </Typography>
                    <Typography variant="h6" sx={{ fontSize: { xs: '1rem', sm: '1.25rem' }, color: '#334155', fontFamily: 'Roboto, sans-serif' }}>
                        Page Not Found
                    </Typography>
                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={1} sx={{ pt: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Button
                            variant="contained"
                            color="info"
                            component={Link}
                            to="/"
                            sx={{ width: { xs: '100%', sm: 'auto' }, textTransform: 'none', fontWeight: 700 }}
                        >
                            Volver al inicio
                        </Button>
                        <Button
                            variant="outlined"
                            component={Link}
                            to="/"
                            sx={{ width: { xs: '100%', sm: 'auto' }, textTransform: 'none', color: '#0f172a', borderColor: 'rgba(15,23,42,0.08)' }}
                        >
                            Ir al buscador
                        </Button>
                    </Stack>
                </Stack>
            </Box>

            {/* keyframes globales para la animación */}
            <style>{`@keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-8px)}100%{transform:translateY(0)}}`}</style>
        </Box>
    )
}

export default NotFound
