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
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '30px', color: '#FFFFFF', '::placeholder': { color: '#B8EFFF', opacity: 1 } },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#101417',
            borderRadius: '30px',
            boxShadow: '0 6px 18px rgba(0, 194, 255, 0.12)',
            '& .MuiOutlinedInput-root': { borderRadius: '30px' },
            '& fieldset': { borderColor: '#00C2FF' },
            '&:hover fieldset': { borderColor: '#4FD7FF' },
            '&.Mui-focused fieldset': { borderColor: '#00A3B8' }
          }}
          height="76px"
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
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
            transition: 'all .25s ease',
            borderRadius: '30px',
            boxShadow: '0 6px 18px rgba(0, 194, 255, 0.25)',
            '&:hover': { background: 'linear-gradient(90deg, #0093CC 0%, #007A89 100%)', transform: 'translateY(-1px)' }
          }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
