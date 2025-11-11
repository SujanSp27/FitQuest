import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import heroBg from '../assets/images/herobg.jpg'; 

const HeroBanner = () => {
  return (
    <Box
      id="home"
      sx={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        backgroundImage: `
          linear-gradient(
            rgba(0, 194, 255, 0.25), 
            rgba(34, 230, 168, 0.25)
          ),
          url(${heroBg})
        `,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        py: { xs: 6, sm: 8, md: 10, lg: 12 },
        mt: { xs: 2, sm: 4, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: { xs: '100%', sm: '600px', md: '900px', lg: '1200px', xl: '1600px' },
          mx: 'auto',
          textAlign: 'center',
          px: { xs: 2, sm: 3, md: 4, lg: 5 },
        }}
      >
        <Typography
          variant="overline"
          sx={{
            color: 'primary.dark',
            fontWeight: 700,
            letterSpacing: 2,
            fontSize: { xs: '0.75rem', sm: '0.875rem', md: '1rem' },
          }}
        >
         
        </Typography>

        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: '1.75rem', sm: '2.2rem', md: '2.8rem', lg: '3.4rem' },
            mt: { xs: 0.5, sm: 1 },
            px: { xs: 1, sm: 2 },
            lineHeight: { xs: 1.2, sm: 1.3 },
            color: '#fff',
            textShadow: '0 2px 6px rgba(0,0,0,0.2)',
          }}
        >
          Explore, Train and Evolve
        </Typography>

        <Typography
          variant="body1"
          sx={{
            color: '#f0f0f0',
            maxWidth: { xs: '100%', sm: 600, md: 760 },
            mx: 'auto',
            mt: { xs: 1.5, sm: 2 },
            px: { xs: 1, sm: 2 },
            fontSize: { xs: '0.875rem', sm: '1rem', md: '1.125rem' },
            lineHeight: { xs: 1.5, sm: 1.6 },
            textShadow: '0 1px 4px rgba(0,0,0,0.3)',
          }}
        >
          Discover effective movements and curated workouts to reach your goals faster.
        </Typography>

        <Button
          href="#exercises"
          variant="contained"
          color="primary"
          size="large"
          sx={{
            mt: { xs: 3, sm: 4 },
            px: { xs: 3, sm: 4 },
            py: { xs: 1.25, sm: 1.5 },
            borderRadius: '30px',
            transition: 'all .25s ease',
            fontSize: { xs: '0.875rem', sm: '1rem' },
            touchAction: 'manipulation',
            '&:hover': { bgcolor: 'primary.light', transform: 'translateY(-1px)' },
          }}
        >
          Explore Exercises
        </Button>
      </Container>
    </Box>
  );
};

export default HeroBanner;
