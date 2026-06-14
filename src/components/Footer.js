import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import Logo from '../assets/images/logofitquest-Photoroom.png';

const SocialIcon = ({ href, label, path }) => (
  <IconButton
    component="a"
    href={href}
    target="_blank"
    rel="noreferrer"
    sx={{ 
      color: '#B8EFFF', 
      '&:hover': { 
        color: '#00C2FF', 
        transform: 'translateY(-2px)',
        boxShadow: '0 0 10px rgba(0, 194, 255, 0.5)'
      }, 
      transition: 'all .2s ease' 
    }}
    aria-label={label}
  >
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={path} />
    </svg>
  </IconButton>
);

const Footer = () => (
  <Box 
    mt="80px" 
    sx={{ 
      position: 'relative',
      background: 'linear-gradient(180deg, #000000 0%, #0E1B22 100%)',
      borderTop: '2px solid transparent',
      backgroundImage: 'linear-gradient(#000000, #0E1B22), linear-gradient(90deg, #00C2FF, #14F1C5)',
      backgroundOrigin: 'border-box',
      backgroundClip: 'padding-box, border-box',
      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '2px',
        background: 'linear-gradient(90deg, #00C2FF 0%, #14F1C5 100%)',
        boxShadow: '0 0 20px rgba(0, 194, 255, 0.6)',
        animation: 'pulse 2s ease-in-out infinite'
      },
      '@keyframes pulse': {
        '0%, 100%': { opacity: 1 },
        '50%': { opacity: 0.6 }
      }
    }}
  >
    <Stack 
      gap={{ xs: '12px', sm: '16px' }} 
      sx={{ alignItems: 'center' }} 
      flexWrap="wrap" 
      px={{ xs: 2, sm: 3, md: 4 }}
      pt={{ xs: '12px', sm: '16px' }}
      pb="0px"
    >
      <img 
        src={Logo} 
        alt="logo" 
        style={{ 
          width: '60px', 
          height: '48px', 
          filter: 'drop-shadow(0 0 10px rgba(0, 194, 255, 0.5))',
          maxWidth: '100%'
        }} 
      />
      <Typography 
        variant="subtitle1" 
        sx={{ 
          color: '#B8EFFF',
          fontWeight: 500,
          letterSpacing: '0.5px',
          fontSize: { xs: '0.875rem', sm: '1rem' },
          textAlign: 'center',
          px: { xs: 1, sm: 2 }
        }}
      >
        Train Smart. Live Strong.
      </Typography>
      <Stack direction="row" gap={1} sx={{ flexWrap: 'wrap', justifyContent: 'center' }}>
        <SocialIcon label="Instagram" href="https://instagram.com/" path="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A5.5 5.5 0 1 0 17.5 13 5.5 5.5 0 0 0 12 7.5zm0 2A3.5 3.5 0 1 1 8.5 13 3.5 3.5 0 0 1 12 9.5zm4.25-3.25a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
        <SocialIcon label="GitHub" href="https://github.com/" path="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.11.8-.25.8-.56 0-.28-.01-1.02-.02-2-3.26.71-3.95-1.57-3.95-1.57-.52-1.32-1.28-1.67-1.28-1.67-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.11-.75.4-1.25.73-1.54-2.6-.3-5.33-1.3-5.33-5.8 0-1.28.46-2.33 1.2-3.15-.12-.3-.52-1.52.11-3.17 0 0 .98-.31 3.2 1.2a11.1 11.1 0 0 1 5.83 0c2.22-1.51 3.2-1.2 3.2-1.2.63 1.65.23 2.87.11 3.17.75.82 1.2 1.87 1.2 3.15 0 4.51-2.74 5.5-5.35 5.79.41.35.77 1.03.77 2.08 0 1.5-.01 2.7-.01 3.06 0 .31.21.68.81.56A11.5 11.5 0 0 0 12 .5z" />
        <SocialIcon label="LinkedIn" href="https://www.linkedin.com/in/" path="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8h4V24h-4zM8.5 8h3.8v2.2h.06c.53-1 1.84-2.2 3.78-2.2 4.04 0 4.78 2.66 4.78 6.1V24h-4v-7.1c0-1.7-.03-3.88-2.37-3.88-2.38 0-2.75 1.86-2.75 3.77V24h-4z" />
      </Stack>
    </Stack>
    <Typography 
      variant="body2" 
      sx={{ 
        color: '#B8EFFF',
        mt: { xs: '16px', sm: '20px' },
        textAlign: 'center',
        pb: { xs: '24px', sm: '32px' },
        px: { xs: 1.5, sm: 2 },
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 1,
        flexWrap: 'wrap',
        fontSize: { xs: '0.75rem', sm: '0.875rem' }
      }}
    >
      <Box
        component="span"
        sx={{
          display: 'inline-block',
          width: '16px',
          height: '16px',
          background: 'linear-gradient(90deg, #00C2FF, #14F1C5)',
          borderRadius: '50%',
          position: 'relative',
          animation: 'heartbeat 1.5s ease-in-out infinite',
          '@keyframes heartbeat': {
            '0%, 100%': { transform: 'scale(1)' },
            '50%': { transform: 'scale(1.2)' }
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '8px',
            height: '8px',
            background: '#0B0C0F',
            borderRadius: '50%'
          }
        }}
      />
      <Box component="span" sx={{ whiteSpace: { xs: 'normal', sm: 'nowrap' } }}>
        © 2025 FitQuest
      </Box>
    </Typography>
  </Box>
);

export default Footer;
