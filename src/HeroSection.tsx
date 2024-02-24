import React from 'react';
import Button from '@mui/material/Button';
import { Typography, Box } from '@mui/material';

const HeroSection = () => {
  return (
    <Box textAlign="center" p={5}>
      <Typography variant="h2" gutterBottom>
        Social Dimension by Seesaw
      </Typography>
      <Typography variant="h5" gutterBottom>
        Discover something new about each other.
      </Typography>
      <img src="your-image-url.jpg" alt="Hero" style={{ maxWidth: '100%', height: 'auto' }} />
      <Box mt={4}>
        <Button variant="contained" color="primary" href="link-to-guidebook-player1">
          Session for Player 1
        </Button>
        <Button variant="contained" color="secondary" href="link-to-guidebook-player2" style={{ marginLeft: '20px' }}>
          Session for Player 2
        </Button>
      </Box>
    </Box>
  );
};

export default HeroSection;
