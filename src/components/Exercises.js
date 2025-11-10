import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography, Grid } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        const allExercises = await fetchData(
          'https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/exercises.json'
        );

        if (bodyPart === 'all') {
          setExercises(allExercises);
        } else {
          const filtered = allExercises.filter((exercise) =>
            exercise.bodyParts?.includes(bodyPart)
          );
          setExercises(filtered);
        }
      } catch (error) {
        console.error('❌ Error fetching exercise data:', error);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  // Pagination logic
  const indexOfLastExercise = currentPage * exercisesPerPage;
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
  const currentExercises = exercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  );

  const paginate = (event, value) => {
    setCurrentPage(value);
    window.scrollTo({ top: 1800, behavior: 'smooth' });
  };

  if (!currentExercises.length) return <Loader />;

  return (
    <Box
      id="exercises"
      sx={{
        mt: { lg: '110px', xs: '50px' },
        px: { xs: 2, md: 4, lg: 6 },
        py: { xs: 4, md: 6 },
        minHeight: '100vh'
      }}
    >
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ 
          fontSize: { lg: '44px', xs: '30px' },
          color: '#FFFFFF',
          mb: { xs: 4, md: 6 },
          textAlign: 'center'
        }}
      >
        Showing Exercises
      </Typography>

      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{
          justifyContent: 'center',
          mb: { xs: 6, md: 8 }
        }}
      >
        {currentExercises.map((exercise) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={exercise.exerciseId}
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'stretch'
            }}
          >
            <Box sx={{ width: '100%', maxWidth: '400px', height: '100%' }}>
              <ExerciseCard exercise={exercise} />
            </Box>
          </Grid>
        ))}
      </Grid>

      <Stack sx={{ mt: { lg: '100px', xs: '60px' } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="primary"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
            sx={{
              '& .MuiPaginationItem-root': {
                color: '#B8EFFF',
                '&.Mui-selected': {
                  backgroundColor: '#00C2FF',
                  color: '#0B0C0F',
                  '&:hover': {
                    backgroundColor: '#4FD7FF'
                  }
                },
                '&:hover': {
                  backgroundColor: 'rgba(0, 194, 255, 0.2)'
                }
              }
            }}
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
