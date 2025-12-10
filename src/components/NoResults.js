import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const NoResults = ({ 
  title = "No exercises found", 
  message = "Try adjusting your search or browse different body parts",
  onReset 
}) => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '400px',
        width: '100%',
        py: 4,
        px: 2,
        textAlign: 'center'
      }}
    >
      <Stack spacing={3} alignItems="center" maxWidth="500px">
        <Typography
          variant="h4"
          sx={{
            color: '#B8EFFF',
            fontWeight: 700,
            fontSize: { xs: '24px', sm: '32px' },
            textShadow: '0 0 10px rgba(0, 194, 255, 0.3)'
          }}
        >
          {title}
        </Typography>
        
        <Typography
          variant="body1"
          sx={{
            color: '#7ED7E8',
            fontSize: '16px',
            lineHeight: 1.6
          }}
        >
          {message}
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: '#5A9FB8',
            fontSize: '14px',
            fontStyle: 'italic'
          }}
        >
          💡 Try searching for popular exercises like "push-up", "squat", or "deadlift"
        </Typography>

        {onReset && (
          <Button
            onClick={onReset}
            sx={{
              background: 'linear-gradient(90deg, #00C2FF 0%, #00A3B8 100%)',
              color: '#FFFFFF',
              fontWeight: 700,
              borderRadius: '30px',
              px: 4,
              py: 1.5,
              fontSize: '16px',
              boxShadow: '0 6px 18px rgba(0, 194, 255, 0.28)',
              transition: 'all .3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(90deg, #14F1C5 0%, #00C2FF 100%)',
                transform: 'translateY(-2px)',
                boxShadow: '0 0 20px #00C2FF',
              },
            }}
          >
            Show All Exercises
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default NoResults;