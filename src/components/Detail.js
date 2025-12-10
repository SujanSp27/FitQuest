import React from 'react';
import { Typography, Stack, Button, Box } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png';
import TargetImage from '../assets/icons/target.png';
import EquipmentImage from '../assets/icons/equipment.png';

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: BodyPartImage, name: bodyPart },
    { icon: TargetImage, name: target },
    { icon: EquipmentImage, name: equipment },
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Box
        sx={{
          maxWidth: { 
            xs: '100%', 
            sm: '600px', 
            md: '900px', 
            lg: '1200px', 
            xl: '1600px'
          },
          mx: 'auto',
          px: { xs: 2, sm: 3, md: 4, lg: 5 }
        }}
      >
        <Stack
          gap="60px"
          sx={{
            flexDirection: { lg: 'row', xs: 'column' },
            p: { xs: '16px', md: '30px' },
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
      
      {/* Exercise Benefits & Anatomy Showcase */}
      <Box
        sx={{
          width: { xs: '280px', sm: '320px', md: '340px', lg: '380px' },
          height: { xs: '280px', sm: '320px', md: '340px', lg: '380px' },
          maxWidth: '100%',
          borderRadius: '20px',
          boxShadow: '0 0 30px rgba(0, 194, 255, 0.25)',
          background: 'linear-gradient(145deg, #101417, #0E1B22)',
          border: '2px solid rgba(0, 194, 255, 0.3)',
          p: { xs: 2, sm: 3 },
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Header */}
        <Box sx={{ textAlign: 'center', mb: 2 }}>
          <Typography
            sx={{
              color: '#00C2FF',
              fontSize: { xs: '18px', sm: '20px' },
              fontWeight: 700,
              textShadow: '0 0 10px rgba(0, 194, 255, 0.5)',
              mb: 1,
            }}
          >
            Exercise Benefits
          </Typography>
          <Typography
            sx={{
              color: '#7ED7E8',
              fontSize: { xs: '12px', sm: '14px' },
              opacity: 0.8,
            }}
          >
            Why {name} is effective
          </Typography>
        </Box>

        {/* Benefits List */}
        <Box sx={{ flex: 1, mb: 2 }}>
          <Stack spacing={1.5}>
            {/* Strength Benefit */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              background: 'rgba(0, 194, 255, 0.08)',
              borderRadius: '12px',
              p: 1.5,
              border: '1px solid rgba(0, 194, 255, 0.2)',
            }}>
              <Box sx={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #00C2FF, #14F1C5)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                flexShrink: 0,
              }}>
                💪
              </Box>
              <Box>
                <Typography sx={{ 
                  color: '#00C2FF', 
                  fontSize: { xs: '12px', sm: '13px' }, 
                  fontWeight: 600,
                  mb: 0.2,
                }}>
                  Builds Strength
                </Typography>
                <Typography sx={{ 
                  color: '#B8EFFF', 
                  fontSize: { xs: '10px', sm: '11px' },
                  lineHeight: 1.3,
                }}>
                  Targets {target} muscles effectively
                </Typography>
              </Box>
            </Box>

            {/* Endurance Benefit */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              background: 'rgba(20, 241, 197, 0.08)',
              borderRadius: '12px',
              p: 1.5,
              border: '1px solid rgba(20, 241, 197, 0.2)',
            }}>
              <Box sx={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #14F1C5, #00C2FF)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                flexShrink: 0,
              }}>
                🏃‍♂️
              </Box>
              <Box>
                <Typography sx={{ 
                  color: '#14F1C5', 
                  fontSize: { xs: '12px', sm: '13px' }, 
                  fontWeight: 600,
                  mb: 0.2,
                }}>
                  Improves Endurance
                </Typography>
                <Typography sx={{ 
                  color: '#B8EFFF', 
                  fontSize: { xs: '10px', sm: '11px' },
                  lineHeight: 1.3,
                }}>
                  Enhances cardiovascular fitness
                </Typography>
              </Box>
            </Box>

            {/* Flexibility Benefit */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              background: 'rgba(255, 107, 107, 0.08)',
              borderRadius: '12px',
              p: 1.5,
              border: '1px solid rgba(255, 107, 107, 0.2)',
            }}>
              <Box sx={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FF6B6B, #FF8E8E)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                flexShrink: 0,
              }}>
                🤸‍♀️
              </Box>
              <Box>
                <Typography sx={{ 
                  color: '#FF6B6B', 
                  fontSize: { xs: '12px', sm: '13px' }, 
                  fontWeight: 600,
                  mb: 0.2,
                }}>
                  Enhances Mobility
                </Typography>
                <Typography sx={{ 
                  color: '#B8EFFF', 
                  fontSize: { xs: '10px', sm: '11px' },
                  lineHeight: 1.3,
                }}>
                  Improves {bodyPart} flexibility
                </Typography>
              </Box>
            </Box>

            {/* Calorie Burn */}
            <Box sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1.5,
              background: 'rgba(255, 217, 61, 0.08)',
              borderRadius: '12px',
              p: 1.5,
              border: '1px solid rgba(255, 217, 61, 0.2)',
            }}>
              <Box sx={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #FFD93D, #FFF176)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '16px',
                flexShrink: 0,
              }}>
                🔥
              </Box>
              <Box>
                <Typography sx={{ 
                  color: '#FFD93D', 
                  fontSize: { xs: '12px', sm: '13px' }, 
                  fontWeight: 600,
                  mb: 0.2,
                }}>
                  Burns Calories
                </Typography>
                <Typography sx={{ 
                  color: '#B8EFFF', 
                  fontSize: { xs: '10px', sm: '11px' },
                  lineHeight: 1.3,
                }}>
                  {Math.floor(Math.random() * 30) + 20}-{Math.floor(Math.random() * 30) + 50} cal/min
                </Typography>
              </Box>
            </Box>
          </Stack>
        </Box>

        {/* Quick Stats */}
        <Box sx={{
          background: 'rgba(138, 43, 226, 0.08)',
          borderRadius: '12px',
          p: 1.5,
          border: '1px solid rgba(138, 43, 226, 0.2)',
          textAlign: 'center',
        }}>
          <Typography sx={{ 
            color: '#8A2BE2', 
            fontSize: { xs: '11px', sm: '12px' }, 
            fontWeight: 600,
            mb: 0.5,
          }}>
            💡 Pro Tip
          </Typography>
          <Typography sx={{ 
            color: '#B8EFFF', 
            fontSize: { xs: '10px', sm: '11px' },
            lineHeight: 1.3,
          }}>
            {name.toLowerCase().includes('push') 
              ? "Keep your core tight throughout the movement"
              : name.toLowerCase().includes('squat')
              ? "Focus on proper knee alignment and depth"
              : name.toLowerCase().includes('plank')
              ? "Maintain a straight line from head to heels"
              : name.toLowerCase().includes('pull')
              ? "Squeeze your shoulder blades together"
              : "Focus on controlled movements and proper breathing"}
          </Typography>
        </Box>

        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: -20,
            right: -20,
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(0, 194, 255, 0.1), transparent)',
            animation: 'pulse 3s ease-in-out infinite',
            '@keyframes pulse': {
              '0%, 100%': { transform: 'scale(1)', opacity: 0.3 },
              '50%': { transform: 'scale(1.2)', opacity: 0.1 },
            },
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            bottom: -10,
            left: -10,
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(20, 241, 197, 0.1), transparent)',
            animation: 'pulse 4s ease-in-out infinite reverse',
          }}
        />
      </Box>

     
      <Stack
        sx={{
          gap: { lg: '28px', xs: '20px' },
          maxWidth: '650px',
          alignItems: { xs: 'center', lg: 'flex-start' },
          textAlign: { xs: 'center', lg: 'left' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '28px', sm: '32px', md: '40px', lg: '52px' },
            color: '#FFFFFF',
            fontWeight: 800,
            lineHeight: { xs: 1.1, sm: 1.2 },
            textTransform: 'capitalize',
            textShadow: '0 0 10px rgba(0,194,255,0.5)',
            px: { xs: 1, sm: 2 },
            textAlign: { xs: 'center', lg: 'left' }
          }}
        >
          {name}
        </Typography>

        <Typography
          sx={{
            fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
            color: '#00C2FF',
            lineHeight: { xs: 1.5, sm: 1.6, md: 1.7 },
            px: { xs: 1, sm: 2 },
            textAlign: { xs: 'center', lg: 'left' }
          }}
        >
          Exercises keep you strong.{' '}
          <span style={{ textTransform: 'capitalize', color: '#00C2FF', fontWeight: 300 }}>
            {name}
          </span>{' '}
          is one of the best exercises. It will help improve your
          endurance, boost mood, and increase energy levels.
        </Typography>

        {/* Horizontal Icon Row */}
        <Stack
          direction="row"
          gap={{ xs: '14px', sm: '18px', md: '25px', lg: '30px' }}
          justifyContent={{ xs: 'center', lg: 'flex-start' }}
          alignItems="center"
          flexWrap="wrap"
          sx={{
            mt: { xs: '8px', sm: '10px' },
            px: { xs: 1, sm: 2 }
          }}
        >
          {extraDetail.map((item) => (
            <Stack
              key={item.name}
              alignItems="center"
              justifyContent="center"
              gap={{ xs: '8px', sm: '10px' }}
              sx={{ minWidth: { xs: '90px', sm: '100px' } }}
            >
              <Button
                sx={{
                  background: 'linear-gradient(145deg, #00C2FF, #14F1C5)',
                  borderRadius: '50%',
                  width: { xs: '75px', sm: '85px', md: '90px' },
                  height: { xs: '75px', sm: '85px', md: '90px' },
                  minWidth: { xs: '75px', sm: '85px', md: '90px' },
                  minHeight: { xs: '75px', sm: '85px', md: '90px' },
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  boxShadow: '0 0 20px rgba(0, 194, 255, 0.3)',
                  transition: 'all 0.3s ease',
                  touchAction: 'manipulation',
                  '&:hover': {
                    boxShadow: '0 0 30px rgba(0, 194, 255, 0.6)',
                    transform: 'translateY(-5px)',
                  },
                }}
              >
                <Box
                  component="img"
                  src={item.icon}
                  alt={item.name}
                  sx={{
                    width: { xs: '35px', sm: '38px', md: '40px' },
                    height: { xs: '35px', sm: '38px', md: '40px' },
                    filter: 'drop-shadow(0 0 6px #00C2FF)',
                  }}
                />
              </Button>
              <Typography
                textTransform="capitalize"
                sx={{
                  fontSize: { xs: '14px', sm: '16px', md: '18px', lg: '20px' },
                  color: '#E0F7FF',
                  fontWeight: 600,
                  textAlign: 'center',
                }}
              >
                {item.name}
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Detail;
