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
        width: 300,  
        height: 500,
        borderRadius: 3,
        boxShadow: 3,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        '&:hover': {
          transform: 'translateY(-5px)',
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea sx={{ flexGrow: 1 }}>
        <CardMedia
          component="img"
          image={`https://cdn.thesimpsonsapi.com/500${character.portrait_path}`}
          alt={character.name}
          sx={{
            backgroundColor: '#fffde7',
            height: 300,
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            '&:hover': { transform: 'scale(1.05)' },
          }}
        />

        <CardContent
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            backgroundColor: '#fffde7',
            paddingBottom: 0,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 'bold',
              color: '#f3b518ff',
              textShadow: '1px 1px 2px rgba(0,0,0,0.4)',
              mb: 0.5,
            }}
          >
            {character.name}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              color: '#fff59d',
              textShadow: '1px 1px 2px rgba(0,0,0,0.3)',
            }}
          >
            {character.occupation || 'Sin ocupación conocida'}
          </Typography>
        </CardContent>
      </CardActionArea>

      <CardActions
        sx={{
          justifyContent: 'flex-start',
          backgroundColor: '#fffde7',
          padding: '8px 12px',
        }}
      >
        <Button
          size="small"
          variant="contained"
          color="danger"
          sx={{
            borderTopRightRadius: '30px',
            borderBottomRightRadius: '30px',
            borderTopLeftRadius: 0,
            borderBottomLeftRadius: 0,
            paddingRight: '15px',
            textTransform: 'none',
            '&:hover': {
              transform: 'translateX(3px)',
            },
          }}
        >
          <i
            className="bi bi-arrow-return-right"
            style={{ marginRight: '10px' }}
          ></i>
          Ver más
        </Button>
      </CardActions>
    </Card>
  );
}
