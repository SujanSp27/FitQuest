import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';

const ExerciseCard = ({ exercise }) => (
  <Link
    className="exercise-card"
    to={`/exercise/${exercise.exerciseId}`} // ✅ Correct ID from GitHub API
    style={{ textDecoration: 'none' }}
  >
    <img
      src={exercise.gifUrl}
      alt={exercise.name}
      loading="lazy"
      style={{ width: '100%', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}
    />
    <Stack direction="row" justifyContent="center" mt="10px">
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FFA9A9',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.bodyParts?.[0] || 'Unknown'}
      </Button>
      <Button
        sx={{
          ml: '21px',
          color: '#fff',
          background: '#FCC757',
          fontSize: '14px',
          borderRadius: '20px',
          textTransform: 'capitalize',
        }}
      >
        {exercise.targetMuscles?.[0] || 'Unknown'}
      </Button>
    </Stack>

    <Typography
      ml="21px"
      color="#000"
      fontWeight="bold"
      sx={{ fontSize: { lg: '24px', xs: '20px' } }}
      mt="11px"
      pb="10px"
      textTransform="capitalize"
    >
      {exercise.name}
    </Typography>
  </Link>
);

export default ExerciseCard;
