import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: '150px', xs: '70px' },
        ml: { sm: '50px' },
        position: 'relative',
        p: '20px',
        minHeight: { lg: '600px', md: '500px', xs: '450px' },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: { xs: 'center', sm: 'flex-start' },
      }}
    >
      <Typography color="#FF2625" fontWeight="600" fontSize="26px">
        FitQuest
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '40px' }, textAlign: { xs: 'center', sm: 'left' } }}
        mb="23px"
        mt="30px"
      >
        Explore, Train <br /> and Evolve.
      </Typography>

      <Typography
        fontSize="22px"
        lineHeight="35px"
        mb={4}
        sx={{ textAlign: { xs: 'center', sm: 'left' } }}
      >
        Check out the most effective Exercises
      </Typography>

      <Button
        variant="contained"
        color="error"
        href="#exercises"
        sx={{
          backgroundColor: '#FF2625',
          padding: '10px 20px',
          fontSize: '16px',
          '&:hover': { backgroundColor: '#d61c1c' },
        }}
      >
        Explore Exercises
      </Button>

      <Typography
        fontWeight={600}
        color="#ff2625"
        sx={{
          opacity: 0.1,
          display: { lg: 'block', xs: 'none' },
        }}
        fontSize="200px"
      >
        Exercise
      </Typography>

      <Box
        component="img"
        src={HeroBannerImage}
        alt="banner"
        sx={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: { lg: '650px', md: '500px', sm: '400px', xs: '100%' },
          height: 'auto',
          opacity: 1,
          zIndex: -1,
        }}
      />
    </Box>
  );
};

export default HeroBanner;
