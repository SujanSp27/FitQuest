import React from 'react';
import { Stack, Typography, Box } from '@mui/material';
import { InfinitySpin } from 'react-loader-spinner';

const Loader = ({ message = "Loading exercises..." }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '400px',
      width: '100%',
      py: 4
    }}
  >
    <Stack direction="column" justifyContent="center" alignItems="center" spacing={3}>
      <InfinitySpin 
        color="#00C2FF" 
        width="200"
        height="200"
      />
      <Typography
        variant="h6"
        sx={{
          color: '#B8EFFF',
          fontWeight: 600,
          textAlign: 'center',
          fontSize: { xs: '16px', sm: '18px' }
        }}
      >
        {message}
      </Typography>
      <Typography
        variant="body2"
        sx={{
          color: '#7ED7E8',
          textAlign: 'center',
          fontSize: '14px',
          maxWidth: '300px'
        }}
      >
        Fetching the best exercises for your workout 💪
      </Typography>
    </Stack>
  </Box>
);

export default Loader;