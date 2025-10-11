import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import './CardsLocation.css'
import noImg from '../../assets/NoImg.jpg'

const ActionAreaCard = ({ Location }) => {

    return (
        <Card sx={{
            maxWidth: 345,
            borderRadius: '15px',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'transform 0.3s ease-in-out',
            '&:hover': {
                transform: 'scale(1.05)',
                border: '2px solid #D1B271',
                boxShadow: '0 0 15px rgba(209, 178, 113, 0.8)'
            },
            backgroundColor: '#F5F5DC'
        }}>
            <CardActionArea
                disableRipple
                disableTouchRipple
                sx={{
                    backgroundColor: 'transparent',
                    '&:hover': { backgroundColor: 'transparent' },
                    '&:active': { backgroundColor: 'transparent' },
                    '&:focus': { backgroundColor: 'transparent' },
                    '&.Mui-focusVisible': { backgroundColor: 'transparent' },
                    '& .MuiCardActionArea-focusHighlight': { backgroundColor: 'transparent' }
                }}
            >
                <CardMedia
                    component="img"
                    height="150"
                    object-fit="contain"
                    image={Location?.image_path ? `https://cdn.thesimpsonsapi.com/500${Location.image_path}` : noImg}
                    alt={Location.name ? Location.name : 'No image available'}
                    sx={{
                        backgroundColor: '#D1B271',
                        '&:hover': {
                            transform: 'scale(1.05)',
                            transition: 'transform 0.3s ease-in-out',
                        }
                    }}

                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div" fontFamily={'SimpsonsFont'} sx={{ textAlign: 'center' }}>
                        {Location.name ? Location.name : 'Unknown Location'}
                    </Typography>
                    <div className="cards-divider" />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }} fontFamily={'monospace'}>

                        Town: {Location.town ? Location.town : 'Unknown Town'}
                        <br />
                        Use: {Location.use ? Location.use : 'Unknown Use'}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default ActionAreaCard;
