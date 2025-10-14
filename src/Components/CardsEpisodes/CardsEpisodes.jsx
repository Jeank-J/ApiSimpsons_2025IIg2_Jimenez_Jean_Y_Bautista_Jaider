import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Gif } from '@mui/icons-material';
const base = "https://cdn.thesimpsonsapi.com/1280";

function CardsEpisodes({ episode }) {


    return (
        <Card sx={{ maxWidth: 1000, backgroundColor: '#ddc98a' }}>
            <CardActionArea

                disableRipple
                disableTouchRipple
                sx={{
                    backgroundColor: 'transparent',
                    '&:hover': { backgroundColor: 'transparent' },
                    '&:active': { backgroundColor: 'transparent' },
                    '&:focus': { backgroundColor: 'transparent' },
                    '&.Mui-focusVisible': { backgroundColor: 'transparent' },
                    '& .MuiCardActionArea-focusHighlight': { backgroundColor: 'transparent' },
                }}
            >
                <CardMedia
                    component="img"
                    height="400px"
                    image={`${base}${episode.image_path}`}
                    alt={episode.name || 'Episode Image'}
                    sx={{
                        '&:hover': {
                            transform: 'scale(1.05)',
                            transition: 'transform 0.1s ease-in-out',
                        },

                    }}

                />
                <CardContent
                    sx={{
                        padding: '20px',
                        backgroundColor: '#ddc98aff',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
                    }}
                >
                    <Typography gutterBottom variant="h5" component="div"
                        sx={{ fontFamily: 'SimpsonsFont, Arial, sans-serif', color: '#0f172a' }}>
                        {episode.name || 'Unknown Title'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2, fontStyle: 'italic' }}>
                        Season: {episode.season || 'N/A'} | Episode: {episode.episode_number || 'N/A'}
                    </Typography>


                    <Accordion
                        defaultExpanded={!window.matchMedia('(max-width:62000px)').matches}
                        sx={{
                            border: '1px solid #ffeaa7',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            marginBottom: 2,
                            boxShadow: 'none',
                            '&:hover': {
                                boxShadow: '0 12px 40px rgba(0, 0, 0, 0.35)',
                                transition: 'box-shadow 0.2s ease-in-out',
                            },
                        }}
                    >
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                            sx={{
                                backgroundColor: '#ffeaa7',
                                borderBottom: '1px solid #ffd180',
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    position: 'relative',
                                    display: 'inline-block',
                                    fontFamily: 'SimpsonsFont, Arial, sans-serif',
                                    color: '#0f172a',
                                    paddingBottom: '4px',
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        left: 0,
                                        bottom: 0,
                                        width: '100%',
                                        height: '3px',
                                        background:
                                            'linear-gradient(to right, transparent, #ff4400ff, transparent)',
                                    },
                                }}
                            >
                                Synopsis
                            </Typography>
                        </AccordionSummary>

                        <AccordionDetails
                            sx={{
                                backgroundColor: '#fff3e0',
                                padding: 2,
                            }}
                        >
                            <Typography
                                component="span"
                                sx={{
                                    color: '#0f172a',
                                    fontFamily: 'SimpsonsFont, Arial, sans-serif',
                                    textAlign: 'justify',
                                    textJustify: 'inter-word',
                                    lineHeight: 1.6,
                                    letterSpacing: '0.5px',
                                    whiteSpace: 'pre-line',
                                }}
                            >
                                {episode.synopsis || 'No synopsis available.'}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                </CardContent>
            </CardActionArea>
        </Card >
    )
}

export default CardsEpisodes;