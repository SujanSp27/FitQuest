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

  const handleSearch = async () => {
    if (search) {
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
            name.includes(search) ||
            target.includes(search) ||
            equipment.includes(search) ||
            bodyPart.includes(search)
          );
        });

        setSearch('');
        setExercises(filtered);
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    }
  };

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="50px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>

      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: '800px', xs: '350px' },
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises (e.g., deadlift, pushup, squat)"
          type="text"
        />
        <Button
          className="search-btn"
          sx={{
            bgcolor: '#ff2625',
            color: '#fff',
            textTransform: 'none',
            width: { lg: '175px', xs: '80px' },
            fontSize: { lg: '20px', xs: '14px' },
            height: '56px',
            position: 'absolute',
            right: '0',
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>

      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
