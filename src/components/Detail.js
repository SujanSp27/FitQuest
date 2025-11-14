import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          maxWidth: { 
            xs: '100%', 
            sm: '600px', 
            md: '900px', 
            lg: '1200px', 
            xl: '1600px'
          },
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4, lg: 5 }
        }}
      >
        <Stack
          gap="60px"
          sx={{
            flexDirection: { lg: 'row', xs: 'column' },
            p: { xs: '16px', md: '30px' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
      
      <Box
        component="img"
        src={gifUrl}
        alt={name}
        loading="lazy"
        sx={{
          width: { xs: '280px', sm: '320px', md: '340px', lg: '380px' },
          height: { xs: '280px', sm: '320px', md: '340px', lg: '380px' },
          maxWidth: '100%',
          objectFit: 'contain',
          borderRadius: '20px',
          boxShadow: '0 0 30px rgba(0, 194, 255, 0.25)',
          background: 'linear-gradient(145deg, #101417, #0E1B22)',
          p: { xs: '8px', sm: '10px' },
        }}
      />

     
      <Stack
        sx={{
          gap: { lg: '28px', xs: '20px' },
          maxWidth: '650px',
          alignItems: { xs: 'center', lg: 'flex-start' },
          textAlign: { xs: 'center', lg: 'left' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '28px', sm: '32px', md: '40px', lg: '52px' },
            color: '#FFFFFF',
            fontWeight: 800,
            lineHeight: { xs: 1.1, sm: 1.2 },
            textTransform: 'capitalize',
            textShadow: '0 0 10px rgba(0,194,255,0.5)',
            px: { xs: 1, sm: 2 },
            textAlign: { xs: 'center', lg: 'left' }
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
            color: '#00C2FF',
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
            px: { xs: 1, sm: 2 },
            textAlign: { xs: 'center', lg: 'left' }
          }}
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize', color: '#00C2FF', fontWeight: 300 }}>
            {name}
          </span>{' '}
          is one of the best exercises. It will help improve your
          endurance, boost mood, and increase energy levels.
        </Typography>

        {/* Horizontal Icon Row */}
        <Stack
          direction="row"
          gap={{ xs: '14px', sm: '18px', md: '25px', lg: '30px' }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
          alignItems="center"
          flexWrap="wrap"
          sx={{
            mt: { xs: '8px', sm: '10px' },
            px: { xs: 1, sm: 2 }
          }}
        >
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              alignItems="center"
              justifyContent="center"
              gap={{ xs: '8px', sm: '10px' }}
              sx={{ minWidth: { xs: '90px', sm: '100px' } }}
            >
              <Button
                sx={{
                  background: 'linear-gradient(145deg, #00C2FF, #14F1C5)',
                  borderRadius: '50%',
                  width: { xs: '75px', sm: '85px', md: '90px' },
                  height: { xs: '75px', sm: '85px', md: '90px' },
                  minWidth: { xs: '75px', sm: '85px', md: '90px' },
                  minHeight: { xs: '75px', sm: '85px', md: '90px' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 0 20px rgba(0, 194, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  touchAction: 'manipulation',
                  '&:hover': {
                    boxShadow: '0 0 30px rgba(0, 194, 255, 0.6)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.name}
                  sx={{
                    width: { xs: '35px', sm: '38px', md: '40px' },
                    height: { xs: '35px', sm: '38px', md: '40px' },
                    filter: 'drop-shadow(0 0 6px #00C2FF)',
                  }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{
                  fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
                  color: '#E0F7FF',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Detail;
