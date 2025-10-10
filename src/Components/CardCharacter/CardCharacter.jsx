import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

export default function CardCharacter({ character }) {
    return (
        <Card
            sx={{
                maxWidth: 300,
                borderRadius: 3,
                boxShadow: 3,
                transition: 'transform 0.2s',
                '&:hover': { transform: 'scale(1.05)' },
            }}
        >
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="250"
                    image={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
                    sx={{ objectFit: 'cover' }}
                    alt={character.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                        {character.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {character.occupation || "Sin ocupación conocida"}
                    </Typography>
                </CardContent>

            </CardActionArea>
            <CardActions sx={{ justifyContent: 'center' }}>
                <Button size="small" variant="contained" color="primary">
                    Ver mas
                </Button>
            </CardActions>
        </Card>
    );
}