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
    <Stack
      gap="60px"
      sx={{
        flexDirection: { lg: 'row', xs: 'column' },
        p: { xs: '16px', md: '30px' },
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Exercise Image */}
      <Box
        component="img"
        src={gifUrl}
        alt={name}
        loading="lazy"
        sx={{
          width: { lg: '380px', md: '340px', xs: '280px' },
          height: { lg: '380px', md: '340px', xs: '280px' },
          objectFit: 'contain',
          borderRadius: '20px',
          boxShadow: '0 0 30px rgba(0, 194, 255, 0.25)',
          background: 'linear-gradient(145deg, #101417, #0E1B22)',
          p: '10px',
        }}
      />

      {/* Exercise Details */}
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
            fontSize: { lg: '52px', md: '40px', xs: '30px' },
            color: '#FFFFFF',
            fontWeight: 800,
            lineHeight: 1.2,
            textTransform: 'capitalize',
            textShadow: '0 0 10px rgba(0,194,255,0.5)',
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { lg: '20px', md: '18px', xs: '16px' },
            color: '#00C2FF',
            lineHeight: 1.7,
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
          gap={{ lg: '30px', md: '25px', xs: '18px' }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
          alignItems="center"
          flexWrap="wrap"
          sx={{
            mt: '10px',
          }}
        >
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              alignItems="center"
              justifyContent="center"
              gap="10px"
              sx={{ minWidth: '100px' }}
            >
              <Button
                sx={{
                  background: 'linear-gradient(145deg, #00C2FF, #14F1C5)',
                  borderRadius: '50%',
                  width: '90px',
                  height: '90px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 0 20px rgba(0, 194, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    boxShadow: '0 0 30px rgba(0, 194, 255, 0.6)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    filter: 'drop-shadow(0 0 6px #00C2FF)',
                  }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{
                  fontSize: { lg: '20px', md: '18px', xs: '16px' },
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
  );
};

export default Detail;
