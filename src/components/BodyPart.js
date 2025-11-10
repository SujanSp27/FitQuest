import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
  return (
    <Stack
      type="button"
      alignItems="center"
      justifyContent="center"
      className="bodyPart-card"
      sx={{
        background: 'linear-gradient(#101417, #101417) padding-box, linear-gradient(135deg, #00C2FF, #4FD7FF) border-box',
        border: '2px solid transparent',
        borderRadius: '16px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '18px',
        boxShadow: '0 6px 18px rgba(0, 194, 255, 0.12)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: bodyPart === (item.name || item) ? 'scale(1.05)' : 'scale(1)',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0 12px 28px rgba(0,194,255,0.28)',
        },
      }}
      onClick={() => {
        setBodyPart(item.name || item);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
      }}
    >
      <img
        src={Icon}
        alt="gym"
        style={{ width: '60px', height: '60px' }}
      />
      <Typography
        fontSize="20px"
        fontWeight="700"
        color="#FFFFFF"
        textTransform="capitalize"
      >
        {item.name || item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
