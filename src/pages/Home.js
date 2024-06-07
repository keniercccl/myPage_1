import React from 'react';
import { Box, Typography, Container, Avatar } from '@mui/material';
import homeBackground from '../assets/home-background.jpg';

function Home() {
  return (
    <Box
      sx={{
        backgroundImage: `url(${homeBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <Container>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Avatar 
            alt="Kenier Becerra"
            src="/ruta/a/tu/foto.jpg"
            sx={{ width: 150, height: 150, mx: 'auto' }}
          />
          <Typography variant="h4" component="h1" gutterBottom>
            Kenier Becerra
          </Typography>
          <Typography variant="body1" color="textSecondary">
            Soy ingeniero de sistemas especializado en pruebas funcionales, performance, y programación con JavaScript. ¡Explora mi página para saber más sobre mí!
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export default Home;