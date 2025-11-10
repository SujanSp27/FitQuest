import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, Box } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  if (!exercise || !exercise.exerciseId) {
    console.warn("⚠️ Missing exerciseId for:", exercise);
    return null;
  }

  return (
<Link
  className="exercise-card"
  to={`/exercise/${exercise.exerciseId}`}
  style={{ textDecoration: "none", display: "block" }}
>
  <Box
    sx={{
      width: '100%',
      height: '100%',
      minHeight: '480px',
      display: 'flex',
      flexDirection: 'column',
      background: 'linear-gradient(145deg, #101417 0%, #0E1B22 100%)',
      border: '1px solid rgba(0, 194, 255, 0.3)',
      borderTop: '4px solid #00C2FF',
      borderRadius: '20px',
      boxShadow: '0 6px 25px rgba(0, 194, 255, 0.15)',
      overflow: 'hidden',
      transform: 'scale(1)',
      transition: 'all 0.3s ease-in-out',
      cursor: 'pointer',
      '&:hover': {
        transform: 'scale(1.05)',
        boxShadow: '0 0 20px rgba(0,194,255,0.6)',
      },
    }}
  >
    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
      <Box
        component="img"
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        sx={{
          width: '100%',
          height: 200,
          objectFit: 'cover',
          transition: 'transform .3s ease-in-out',
          '.exercise-card:hover &': { transform: 'scale(1.08)' }
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 70,
          background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.12) 100%)',
        }}
      />
    </Box>

    <Stack direction="row" spacing={1} justifyContent="center" px="16px" pt="14px">
      <Button
        sx={{
          color: '#0B0C0F',
          background: '#00C2FF',
          fontSize: '13px',
          borderRadius: '999px',
          textTransform: 'capitalize',
          px: 1.5,
          '&:hover': { background: '#4FD7FF' },
          boxShadow: '0 2px 8px rgba(0, 194, 255, 0.25)'
        }}
      >
        {exercise.bodyParts?.[0]}
      </Button>
      <Button
        sx={{
          color: '#0B0C0F',
          background: '#4FD7FF',
          fontSize: '13px',
          borderRadius: '999px',
          textTransform: 'capitalize',
          px: 1.5,
          '&:hover': { background: '#00C2FF' },
          boxShadow: '0 2px 8px rgba(0, 194, 255, 0.25)'
        }}
      >
        {exercise.targetMuscles?.[0]}
      </Button>
    </Stack>

    <Typography
      variant="h6"
      fontWeight="bold"
      color="#FFFFFF"
      textAlign="center"
      sx={{ px: '16px', pt: '10px', pb: '10px', fontSize: { xs: '16px', md: '20px' }, textTransform: 'capitalize' }}
    >
      {exercise.name}
    </Typography>

    <Box px="16px" pb="18px" sx={{ mt: 'auto' }}>
      <Button
        fullWidth
        component={Link}
        to={`/exercise/${exercise.exerciseId}`}
        sx={{
          background: 'linear-gradient(90deg, #00C2FF 0%, #00A3B8 100%)',
          color: '#FFFFFF',
          fontWeight: 700,
          borderRadius: '30px',
          py: 1,
          transition: 'all .25s ease-in-out',
          boxShadow: '0 6px 18px rgba(0, 194, 255, 0.28)',
          '&:hover': { background: 'linear-gradient(90deg, #0093CC 0%, #007A89 100%)', transform: 'translateY(-1px)', boxShadow: '0 0 10px #00C2FF' }
        }}
        onClick={(e) => e.stopPropagation()}
      >
        View Details
      </Button>
    </Box>
  </Box>
</Link>
  );
};

export default ExerciseCard;
