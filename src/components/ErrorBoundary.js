import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('❌ Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
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
                color: '#FF6B6B',
                fontWeight: 700,
                fontSize: { xs: '24px', sm: '32px' }
              }}
            >
              Oops! Something went wrong
            </Typography>
            
            <Typography
              variant="body1"
              sx={{
                color: '#B8EFFF',
                fontSize: '16px',
                lineHeight: 1.6
              }}
            >
              We encountered an unexpected error while loading the exercises. 
              Don't worry, your fitness journey continues!
            </Typography>

            <Button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
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
              Try Again
            </Button>

            {process.env.NODE_ENV === 'development' && this.state.error && (
              <Box
                sx={{
                  mt: 2,
                  p: 2,
                  backgroundColor: 'rgba(255, 107, 107, 0.1)',
                  borderRadius: '8px',
                  border: '1px solid rgba(255, 107, 107, 0.3)',
                  maxWidth: '100%',
                  overflow: 'auto'
                }}
              >
                <Typography
                  variant="caption"
                  sx={{
                    color: '#FF6B6B',
                    fontFamily: 'monospace',
                    fontSize: '12px',
                    whiteSpace: 'pre-wrap'
                  }}
                >
                  {this.state.error.toString()}
                </Typography>
              </Box>
            )}
          </Stack>
        </Box>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;