import React, { useEffect, useState } from 'react';
import Pagination from '@mui/material/Pagination';
import { Box, Stack, Typography, Grid } from '@mui/material';

import { fetchData } from '../utils/fetchData';
import ExerciseCard from './ExerciseCard';
import Loader from './Loader';
import NoResults from './NoResults';

const Exercises = ({ exercises, setExercises, bodyPart }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [exercisesPerPage] = useState(9);
  const [pendingScrollId, setPendingScrollId] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setLoading(true);
        
        // Try multiple API endpoints for exercises
        const endpoints = [
          'https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/exercises.json',
          'https://exercisedb.p.rapidapi.com/exercises',
          // Fallback will be handled by fetchData function
        ];
        
        let allExercises = [];
        for (const endpoint of endpoints) {
          try {
            const options = endpoint.includes('rapidapi.com') ? {
              headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY || '',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
            } : {};
            
            allExercises = await fetchData(endpoint, options);
            if (allExercises && allExercises.length > 0) {
              break;
            }
          } catch (error) {
            console.warn(`Failed to fetch exercises from ${endpoint}:`, error);
            continue;
          }
        }

        if (bodyPart === 'all') {
          setExercises(allExercises);
        } else {
          const filtered = allExercises.filter((exercise) =>
            exercise.bodyParts?.includes(bodyPart) || exercise.bodyPart === bodyPart
          );
          setExercises(filtered);
        }
        
        console.log(`✅ Loaded ${allExercises.length} exercises for body part: ${bodyPart}`);
      } catch (error) {
        console.error('❌ Error fetching exercise data:', error);
        // Set empty array to show "no exercises" state
        setExercises([]);
      } finally {
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, [bodyPart, setExercises]);

  useEffect(() => {
    const handleScrollToExercise = (event) => {
      const targetId = event.detail?.exerciseId;
      if (targetId) {
        setPendingScrollId(targetId);
      }
    };

    window.addEventListener('fitquest-scroll-to-exercise', handleScrollToExercise);
    return () => {
      window.removeEventListener('fitquest-scroll-to-exercise', handleScrollToExercise);
    };
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [exercises]);

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

  useEffect(() => {
    if (!pendingScrollId) return undefined;

    const scrollToCard = () => {
      const el = document.getElementById(`exercise-card-${pendingScrollId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setPendingScrollId(null);
        return true;
      }
      return false;
    };

    if (scrollToCard()) return undefined;

    const retryTimer = setTimeout(() => {
      scrollToCard();
    }, 200);

    return () => clearTimeout(retryTimer);
  }, [pendingScrollId, exercises]);

  if (loading) return <Loader message="Loading exercises..." />;
  
  if (!currentExercises.length) {
    return (
      <NoResults 
        title="No exercises found"
        message={bodyPart === 'all' 
          ? "We're having trouble loading exercises. Please try again later." 
          : `No exercises found for ${bodyPart}. Try selecting a different body part.`
        }
        onReset={() => {
          setExercises([]);
          window.location.reload();
        }}
      />
    );
  }

  return (
    <Box
      id="exercises"
      sx={{
        width: '100%',
        mt: { lg: '110px', xs: '50px' },
        py: { xs: 4, md: 6 },
        minHeight: '100vh'
      }}
    >
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
        <Typography
          variant="h4"
          fontWeight="bold"
          sx={{ 
            fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '44px' },
            color: '#FFFFFF',
            mb: { xs: 3, sm: 4, md: 6 },
            textAlign: 'center',
            px: { xs: 1, sm: 2 }
          }}
        >
          Showing Exercises
        </Typography>

        <Grid
          container
          spacing={{ xs: 2, sm: 2.5, md: 3, lg: 4 }}
          sx={{
            justifyContent: 'center',
            mb: { xs: 4, sm: 6, md: 8 },
            px: { xs: 1, sm: 2 }
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
              alignItems: 'stretch',
              width: '100%',
              maxWidth: { xs: '100%', sm: '400px' }
            }}
          >
            <Box sx={{ width: '100%', maxWidth: { xs: '100%', sm: '400px' }, height: '100%', display: 'flex', justifyContent: 'center' }}>
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
    </Box>
  );
};

export default Exercises;
