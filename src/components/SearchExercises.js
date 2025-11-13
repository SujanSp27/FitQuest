import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        'https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/bodyparts.json'
      );
      setBodyParts(['all', ...bodyPartsData]);
    };
    fetchExercisesData();
  }, []);

  const handleSearch = async (incomingQuery) => {
    const query = (incomingQuery ?? search)?.trim().toLowerCase();
    if (query) {
      try {
        const allExercises = await fetchData(
          'https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/exercises.json'
        );

        const filtered = allExercises.filter((exercise) => {
          const name = exercise.name?.toLowerCase() || '';
          const target = exercise.targetMuscles?.join(' ').toLowerCase() || '';
          const equipment = exercise.equipments?.join(' ').toLowerCase() || '';
          const bodyPart = exercise.bodyParts?.join(' ').toLowerCase() || '';
          return (
            name.includes(query) ||
            target.includes(query) ||
            equipment.includes(query) ||
            bodyPart.includes(query)
          );
        });

        setSearch('');
        setExercises(filtered);

        const firstExerciseId = filtered[0]?.exerciseId;
        if (firstExerciseId) {
          setTimeout(() => {
            window.dispatchEvent(
              new CustomEvent('fitquest-scroll-to-exercise', {
                detail: { exerciseId: firstExerciseId },
              })
            );
          }, 0);
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
  };

  useEffect(() => {
    const onGlobalSearch = (e) => handleSearch(e.detail?.query || '');
    window.addEventListener('fitquest-search', onGlobalSearch);
    return () => window.removeEventListener('fitquest-search', onGlobalSearch);
  }, []);

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
          alignItems="center" 
          mt={{ xs: '24px', sm: '30px', md: '37px' }} 
          justifyContent="center" 
          p={{ xs: '12px', sm: '16px', md: '20px' }}
          sx={{ width: '100%', overflowX: 'hidden' }}
        >
          <Typography 
            fontWeight={700} 
            sx={{ 
              fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '44px' },
              lineHeight: { xs: 1.2, sm: 1.3 },
              px: { xs: 1, sm: 2 }
            }} 
            mb={{ xs: '30px', sm: '40px', md: '50px' }} 
            textAlign="center"
          >
            Awesome Exercises You <br /> Should Know
          </Typography>

          <Box 
            position="relative" 
            mb={{ xs: '40px', sm: '56px', md: '72px' }}
            sx={{ 
              width: '100%',
              maxWidth: { xs: '100%', sm: '500px', md: '700px', lg: '800px' },
              px: { xs: 1, sm: 2 }
            }}
          >
        <TextField
          sx={{
            input: { 
              fontWeight: '700', 
              border: 'none', 
              borderRadius: '30px', 
              color: '#FFFFFF',
              fontSize: { xs: '0.875rem', sm: '1rem' },
              padding: { xs: '12px 14px', sm: '14px 16px' },
              '::placeholder': { color: '#B8EFFF', opacity: 1 } 
            },
            width: '100%',
            backgroundColor: '#101417',
            borderRadius: '30px',
            boxShadow: '0 6px 18px rgba(0, 194, 255, 0.12)',
            '& .MuiOutlinedInput-root': { borderRadius: '30px' },
            '& fieldset': { borderColor: '#00C2FF' },
            '&:hover fieldset': { borderColor: '#4FD7FF' },
            '&.Mui-focused fieldset': { borderColor: '#00A3B8' }
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Exercises (e.g., deadlift, pushup, squat)"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            background: 'linear-gradient(90deg, #00C2FF 0%, #00A3B8 100%)',
            color: '#FFFFFF',
            textTransform: 'none',
            width: { xs: '70px', sm: '100px', md: '130px', lg: '175px' },
            fontSize: { xs: '12px', sm: '14px', md: '16px', lg: '20px' },
            height: { xs: '48px', sm: '52px', md: '56px' },
            position: 'absolute',
            right: '0',
            top: '50%',
            transform: 'translateY(-50%)',
            transition: 'all .25s ease',
            borderRadius: '30px',
            boxShadow: '0 6px 18px rgba(0, 194, 255, 0.25)',
            touchAction: 'manipulation',
            '&:hover': { background: 'linear-gradient(90deg, #0093CC 0%, #007A89 100%)', transform: 'translateY(-50%) translateY(-1px)' }
          }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
          </Box>

          <Box sx={{ position: 'relative', width: '100%', p: { xs: '12px', sm: '16px', md: '20px' }, overflowX: 'hidden' }}>
            <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
          </Box>
        </Stack>
      </Box>
    </Box>
  );
};

export default SearchExercises;
