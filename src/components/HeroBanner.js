import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const HeroBanner = () => {
  return (
    <Box id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, rgba(0,194,255,0.10) 0%, rgba(34,230,168,0.10) 40%, rgba(0,163,184,0.10) 100%)',
        py: { xs: 8, md: 12 },
        mt: { xs: 4, md: 6 }
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: 'center' }}>
        <Typography
          variant="overline"
          sx={{ color: 'primary.dark', fontWeight: 700, letterSpacing: 2 }}
        >
          FitQuest
        </Typography>

        <Typography
          variant="h2"
          sx={{ fontWeight: 800, fontSize: { xs: '2.2rem', md: '3.4rem' }, mt: 1 }}
        >
          Explore, Train and Evolve
        </Typography>

        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', maxWidth: 760, mx: 'auto', mt: 2 }}
        >
          Discover effective movements and curated workouts to reach your goals faster.
        </Typography>

        <Button
          href="#exercises"
          variant="contained"
          color="primary"
          size="large"
          sx={{ mt: 4, px: 4, py: 1.5, borderRadius: '30px', transition: 'all .25s ease', '&:hover': { bgcolor: 'primary.light', transform: 'translateY(-1px)' } }}
        >
          Explore Exercises
        </Button>
      </Container>
    </Box>
  );
};

export default HeroBanner;
