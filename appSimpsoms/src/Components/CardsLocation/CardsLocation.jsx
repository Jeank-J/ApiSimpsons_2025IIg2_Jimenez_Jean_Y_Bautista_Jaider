import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import noImg from '../../assets/NoImg.jpg'



const ActionAreaCard = ({ Location }) => {

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={Location?.image_path ? `https://cdn.thesimpsonsapi.com/500${Location.image_path}` : noImg}
                    alt={Location.name ? Location.name : 'No image available'}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {Location.name ? Location.name : 'Unknown Location'}

                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>

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
