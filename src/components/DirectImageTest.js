import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const DirectImageTest = () => {
  // Test inline SVG images
  const testImages = [
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMwQTE5MjkiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzAwQzJGRiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzAwQzJGRiI+UHVzaC11cDwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiMwMEMyRkYiIG9wYWNpdHk9IjAuOCI+RXhlcmNpc2UgRGVtbzwvdGV4dD4KICA8L3N2Zz4=",
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMxYTIzMzIiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzE0RjFDNSIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzE0RjFDNSI+U3F1YXQ8L3RleHQ+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMTRGMUM1IiBvcGFjaXR5PSIwLjgiPkV4ZXJjaXNlIERlbW88L3RleHQ+CiAgPC9zdmc+",
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiMyZDM3NDgiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iIzAwQTNCOCIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzAwQTNCOCI+UGxhbms8L3RleHQ+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjE1MCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjEyIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBmaWxsPSIjMDBBM0I4IiBvcGFjaXR5PSIwLjgiPkV4ZXJjaXNlIERlbW88L3RleHQ+CiAgPC9zdmc+",
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM0YTU1NjgiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iI0UyRThGMCIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0UyRThGMCI+QnVycGVlPC90ZXh0PgogICAgPHRleHQgeD0iMTUwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI0UyRThGMCIgb3BhY2l0eT0iMC44Ij5FeGVyY2lzZSBEZW1vPC90ZXh0PgogIDwvc3ZnPg==",
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM1YTY3ZDgiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE2IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiI+SnVtcGluZyBKYWNrczwvdGV4dD4KICAgIDx0ZXh0IHg9IjE1MCIgeT0iMTUwIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTIiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGZpbGw9IiNmZmZmZmYiIG9wYWNpdHk9IjAuOCI+RXhlcmNpc2UgRGVtbzwvdGV4dD4KICA8L3N2Zz4=",
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9IiM2NjdlZWEiLz4KICAgIDxjaXJjbGUgY3g9IjE1MCIgY3k9IjcwIiByPSIzMCIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC4zIi8+CiAgICA8dGV4dCB4PSIxNTAiIHk9IjEzMCIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmb250LXdlaWdodD0iYm9sZCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiI+THVuZ2VzPC90ZXh0PgogICAgPHRleHQgeD0iMTUwIiB5PSIxNTAiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxMiIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iI2ZmZmZmZiIgb3BhY2l0eT0iMC44Ij5FeGVyY2lzZSBEZW1vPC90ZXh0PgogIDwvc3ZnPg=="
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: '#0A1929', minHeight: '100vh' }}>
      <Typography variant="h4" sx={{ color: '#00C2FF', mb: 4, textAlign: 'center' }}>
        Direct Image Test - All Should Be Visible
      </Typography>
      
      <Grid container spacing={3}>
        {testImages.map((imageUrl, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box
              sx={{
                border: '2px solid #00C2FF',
                borderRadius: 2,
                overflow: 'hidden',
                backgroundColor: '#1a2332'
              }}
            >
              <img
                src={imageUrl}
                alt={`Test ${index + 1}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'contain',
                  display: 'block'
                }}
                onLoad={() => console.log(`✅ Image ${index + 1} loaded successfully`)}
                onError={() => console.log(`❌ Image ${index + 1} failed to load`)}
              />
              <Typography sx={{ color: '#B8EFFF', p: 1, textAlign: 'center' }}>
                Image {index + 1}: {imageUrl.includes('text=') ? imageUrl.split('text=')[1].replace(/\+/g, ' ') : 'Test'}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default DirectImageTest;