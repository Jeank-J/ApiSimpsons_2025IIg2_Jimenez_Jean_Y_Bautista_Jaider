import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import { useNavigate } from 'react-router-dom';


export default function CardCharacter({ character }) {

  const navigate = useNavigate();

  return (
    <Card
      sx={{
        width: 300,
        height: 500,
        borderRadius: 5,
        boxShadow: '0 6px 12px rgba(0,0,0,0.15)',        
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        paddingBottom: "15px",
        background: 'linear-gradient(180deg, #fff8e1 0%, #ffecb3 100%)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-8px)',
          boxShadow: '0 10px 20px rgba(0,0,0,0.25)',
        },
      }}
    >
      <CardActionArea onClick={ () => navigate(`/Characters/${character.id}`)}>
        <CardMedia
          component="img"
          image={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
          alt={character.name}
          sx={{
            height: 280,
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            '&:hover': { transform: 'scale(1.06)' },
          }}
        />

        <CardContent
          sx={{
            textAlign: 'center',
            backgroundColor: '#fff8e1',
            padding: '12px 16px',
            borderRadius: '15px',
            margin: '5px',
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#f9c80e',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
              mb: 1,
            }}
          >
            {character.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#6d4c41',
              fontStyle: 'italic',
            }}
          >
            {character.occupation || 'Sin ocupación conocida'}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center', 
          backgroundColor: '#ffe082',
          padding: '12px 10px',
          borderRadius: '20px',
          marginTop: 'auto', 
        }}
      >
        <Button
          variant="contained"
          sx={{
            background: 'linear-gradient(135deg, #fdd835, #fbc02d)',
            color: '#000',
            fontWeight: 'bold',
            borderRadius: '50px',
            textTransform: 'none',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
            px: 3,
            py: 0.8,
            transition: 'all 0.3s ease',
            '&:hover': {
              background: 'linear-gradient(135deg, #ffca28, #fdd835)',
              transform: 'scale(1.05)',
            },
          }}
          onClick={() => navigate(`/Characters/${character.id}`)}
        >
          <i
            className="bi bi-arrow-right-circle"
            style={{ marginRight: '8px', fontSize: '1.1rem' }}
          ></i>
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}