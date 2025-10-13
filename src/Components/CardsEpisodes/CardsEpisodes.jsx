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
const base = "https://cdn.thesimpsonsapi.com/1280";

function CardsEpisodes({ episode }) {


    return (
        <Card sx={{ maxWidth: 1280 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="auto"
                    image={`${base}${episode.image_path}`}
                    alt="green iguana"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {episode.name || 'Unknown Title'}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Season: {episode.season || 'N/A'} | Episode: {episode.episode_number || 'N/A'}
                    </Typography>




                    <Accordion defaultExpanded={!window.matchMedia('(max-width:600px)').matches}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1-content"
                            id="panel1-header"
                        >
                            <Typography component="span">Synopsis</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {episode.synopsis || 'No synopsis available.'}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>



                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default CardsEpisodes;
