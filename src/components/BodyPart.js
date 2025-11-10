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
        borderTop: bodyPart === (item.name || item) ? '4px solid #FF2625' : '4px solid transparent',
        background: '#fff',
        borderRadius: '12px',
        width: '270px',
        height: '280px',
        cursor: 'pointer',
        gap: '18px',
        boxShadow: bodyPart === (item.name || item) ? '0px 10px 24px rgba(255,38,37,0.18)' : '0px 6px 18px rgba(15,40,62,0.08)',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
        transform: bodyPart === (item.name || item) ? 'scale(1.05)' : 'scale(1)',
        '&:hover': {
          transform: 'scale(1.05)',
          boxShadow: '0px 12px 28px rgba(15,40,62,0.12)',
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
        color="#0B0C0F"
        textTransform="capitalize"
      >
        {item.name || item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
