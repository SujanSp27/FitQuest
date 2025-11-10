import React from 'react';
import { Stack, Typography, Box } from '@mui/material';

// Import all icons
import AllIcon from '../assets/icons/all-Photoroom.png';
import NeckIcon from '../assets/icons/neck-Photoroom.png';
import LowerArmsIcon from '../assets/icons/lowerarms-Photoroom.png';
import ShouldersIcon from '../assets/icons/shoulder-Photoroom.png';
import CardioIcon from '../assets/icons/cardio-Photoroom.png';
import UpperArmsIcon from '../assets/icons/upperarm-Photoroom.png';
import ChestIcon from '../assets/icons/chest-Photoroom.png';
import LowerLegIcon from '../assets/icons/lwerleg-Photoroom.png';
import BackIcon from '../assets/icons/back-Photoroom.png';
import UpperLegIcon from '../assets/icons/upperleg-Photoroom.png';
import WaistIcon from '../assets/icons/waist-Photoroom.png';


const bodyPartImages = {
  all: AllIcon,
  neck: NeckIcon,
  'lower arms': LowerArmsIcon,
  shoulders: ShouldersIcon,
  cardio: CardioIcon,
  'upper arms': UpperArmsIcon,
  chest: ChestIcon,
  'lower legs': LowerLegIcon,
  back: BackIcon,
  'upper legs': UpperLegIcon,
  waist: WaistIcon,
};

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  const name = item.name || item;
  const icon = bodyPartImages[name.toLowerCase()] || AllIcon; 

  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        background:
          'linear-gradient(#101417, #101417) padding-box, linear-gradient(135deg, #00C2FF, #4FD7FF) border-box',
        border: '2px solid transparent',
        borderRadius: '16px',
        width: { xs: '240px', sm: '250px', md: '270px' },
        minWidth: { xs: '240px', sm: '250px', md: '270px' },
        height: { xs: '260px', sm: '270px', md: '280px' },
        cursor: 'pointer',
        gap: { xs: '14px', sm: '16px', md: '18px' },
        boxShadow: '0 6px 18px rgba(0, 194, 255, 0.12)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: bodyPart === name ? 'scale(1.07)' : 'scale(1)',
        touchAction: 'manipulation',
        '&:hover': {
          transform: 'scale(1.07)',
          boxShadow: '0 12px 28px rgba(0,194,255,0.35)',
        },
      }}
      onClick={() => {
        setBodyPart(name);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <Box
        component="img"
        src={icon}
        alt={name}
        sx={{
          width: { xs: '70px', sm: '75px', md: '80px' },
          height: { xs: '70px', sm: '75px', md: '80px' },
          objectFit: 'contain',
          filter: 'drop-shadow(0 0 8px rgba(0,194,255,0.4))',
        }}
      />
      <Typography
        sx={{
          fontSize: { xs: '18px', sm: '19px', md: '20px' },
          fontWeight: '700',
          color: '#FFFFFF',
          textTransform: 'capitalize',
          textAlign: 'center',
          textShadow: '0 0 6px rgba(0,194,255,0.4)',
          px: { xs: 1, sm: 1.5 }
        }}
      >
        {name}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
