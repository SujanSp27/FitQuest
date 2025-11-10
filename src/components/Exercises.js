import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography } from '@mui/material';

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
    <Box id="exercises" sx={{ mt: { lg: '110px', xs: '50px' } }} p="20px">
      <Typography
        variant="h4"
        fontWeight="bold"
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb="46px"
        textAlign="center"
      >
        Showing Exercises
      </Typography>

      <Stack
        direction="row"
        sx={{ gap: { lg: '50px', xs: '20px' } }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {currentExercises.map((exercise) => (
          <ExerciseCard
            key={exercise.exerciseId}
            exercise={exercise}
          />
        ))}
      </Stack>

      <Stack sx={{ mt: { lg: '100px', xs: '60px' } }} alignItems="center">
        {exercises.length > exercisesPerPage && (
          <Pagination
            color="linear-gradient(135deg, rgba(0,194,255,0.10) 0%, rgba(34,230,168,0.10) 40%, rgba(0,163,184,0.10) 100%)"
            shape="rounded"
            count={Math.ceil(exercises.length / exercisesPerPage)}
            page={currentPage}
            onChange={paginate}
            size="large"
          />
        )}
      </Stack>
    </Box>
  );
};

export default Exercises;
