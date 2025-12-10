import React, { useState } from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

const ImageTest = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const testImages = [
    {
      name: 'Push-up',
      url: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/pushup-1457045324.gif'
    },
    {
      name: 'Squat',
      url: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/squat-1457045324.gif'
    },
    {
      name: 'Plank',
      url: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/plank-1457045324.gif'
    },
    {
      name: 'Burpee',
      url: 'https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/burpee-1457045324.gif'
    },
    {
      name: 'Placeholder',
      url: 'https://via.placeholder.com/300x200/0A1929/00C2FF?text=Exercise+Demo'
    }
  ];

  const currentImage = testImages[currentImageIndex];

  return (
    <Box sx={{ p: 4, textAlign: 'center', backgroundColor: '#0A1929', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ color: '#00C2FF', mb: 4 }}>
        Exercise Image Test
      </Typography>
      
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" sx={{ color: '#B8EFFF', mb: 2 }}>
          Testing: {currentImage.name}
        </Typography>
        
        <Box
          sx={{
            width: 300,
            height: 200,
            mx: 'auto',
            border: '2px solid #00C2FF',
            borderRadius: 2,
            overflow: 'hidden',
            backgroundColor: '#1a2332'
          }}
        >
          <img
            src={currentImage.url}
            alt={currentImage.name}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'contain'
            }}
            onLoad={() => console.log(`✅ Image loaded: ${currentImage.name}`)}
            onError={() => console.log(`❌ Image failed: ${currentImage.name}`)}
          />
        </Box>
      </Box>

      <Stack direction="row" spacing={2} justifyContent="center">
        <Button
          onClick={() => setCurrentImageIndex(Math.max(0, currentImageIndex - 1))}
          disabled={currentImageIndex === 0}
          sx={{ color: '#00C2FF', border: '1px solid #00C2FF' }}
        >
          Previous
        </Button>
        <Button
          onClick={() => setCurrentImageIndex(Math.min(testImages.length - 1, currentImageIndex + 1))}
          disabled={currentImageIndex === testImages.length - 1}
          sx={{ color: '#00C2FF', border: '1px solid #00C2FF' }}
        >
          Next
        </Button>
      </Stack>

      <Typography variant="body2" sx={{ color: '#7ED7E8', mt: 4 }}>
        Image {currentImageIndex + 1} of {testImages.length}
      </Typography>
    </Box>
  );
};

export default ImageTest;