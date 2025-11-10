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
        borderTop: bodyPart === (item.name || item) ? '4px solid #ff2625' : '',
        background: '#fff',
        borderBottomLeftRadius: '20px',
        width: '270px',
        height: '282px',
        cursor: 'pointer',
        gap: '47px',
        boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
        transition: 'all 0.3s ease',
        transform: bodyPart === (item.name || item) ? 'scale(1.05)' : 'scale(1)',
        '&:hover': {
          transform: 'scale(1.05)',
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
        style={{ width: '40px', height: '40px' }}
      />
      <Typography
        fontSize="24px"
        fontWeight="bold"
        color="#3A1212"
        textTransform="capitalize"
      >
        {item.name || item}
      </Typography>
    </Stack>
  );
};

export default BodyPart;
