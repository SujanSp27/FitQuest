import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, CircularProgress, Stack } from "@mui/material";

import { fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";
import localVideos from "../data/exerciseVideos.json";

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const fetchExercisesData = async () => {
      try {
        setLoading(true);

        // Scroll to top immediately when component mounts/navigates
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;

        // Try multiple API endpoints for exercises
        const endpoints = [
          "https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/exercises.json",
          "https://exercisedb.p.rapidapi.com/exercises",
          // Fallback will be handled by fetchData function
        ];
        
        let exercisesData = [];
        for (const endpoint of endpoints) {
          try {
            const options = endpoint.includes('rapidapi.com') ? {
              headers: {
                'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY || '',
                'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
              }
            } : {};
            
            exercisesData = await fetchData(endpoint, options);
            if (exercisesData && exercisesData.length > 0) {
              break;
            }
          } catch (error) {
            console.warn(`Failed to fetch exercises from ${endpoint}:`, error);
            continue;
          }
        }

        const exerciseDetailData = exercisesData.find(
          (ex) => ex.exerciseId === id || ex.id === id
        );
        setExerciseDetail(exerciseDetailData);

        // Match exercise with local YouTube data
        const foundVideos = localVideos.find(
          (vid) =>
            vid.name?.trim().toLowerCase() ===
            exerciseDetailData?.name?.trim().toLowerCase()
        );

        if (foundVideos && foundVideos.videos?.length > 0) {
          setExerciseVideos(foundVideos.videos);
        } else {
          setExerciseVideos([]);
        }

        const targetFiltered = exercisesData.filter((ex) =>
          ex.targetMuscles?.includes(exerciseDetailData.targetMuscles?.[0]) ||
          ex.target === exerciseDetailData.target ||
          ex.target === exerciseDetailData.targetMuscles?.[0]
        );
        setTargetMuscleExercises(targetFiltered);

        const equipmentFiltered = exercisesData.filter((ex) =>
          ex.equipments?.includes(exerciseDetailData.equipments?.[0]) ||
          ex.equipment === exerciseDetailData.equipment ||
          ex.equipment === exerciseDetailData.equipments?.[0]
        );
        setEquipmentExercises(equipmentFiltered);

        setLoading(false);
      } catch (error) {
        console.error("❌ Error loading exercise details:", error);
        setLoading(false);
      }
    };

    fetchExercisesData();
  }, [id]);

  // Separate effect to ensure scroll position after content loads
  useEffect(() => {
    if (!loading && exerciseDetail?.name) {
      // Function to forcefully scroll to top and prevent unwanted scrolling
      const forceScrollToTop = () => {
        // Prevent any focus-related scrolling that might cause jumps
        const activeElement = document.activeElement;
        if (activeElement && 
            activeElement !== document.body && 
            activeElement !== document.documentElement &&
            activeElement.tagName !== 'INPUT' && 
            activeElement.tagName !== 'TEXTAREA') {
          activeElement.blur();
        }
        
        // Force scroll to absolute top using all methods for maximum compatibility
        window.scrollTo(0, 0);
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
        
        // Also check for any scrollable containers and reset them
        const scrollContainers = document.querySelectorAll('.react-horizontal-scrolling-menu--scroll-container');
        scrollContainers.forEach(container => {
          container.scrollLeft = 0;
        });
      };

      // Scroll immediately after content is loaded
      forceScrollToTop();

      // Use requestAnimationFrame to ensure it happens after React finishes rendering
      requestAnimationFrame(() => {
        forceScrollToTop();
        // Double RAF to catch any delayed renders
        requestAnimationFrame(() => {
          forceScrollToTop();
        });
      });

      // Additional scroll after a brief delay to handle any async content loading
      const timeoutId = setTimeout(forceScrollToTop, 100);
      const timeoutId2 = setTimeout(forceScrollToTop, 300);

      return () => {
        clearTimeout(timeoutId);
        clearTimeout(timeoutId2);
      };
    }
  }, [loading, exerciseDetail]);

  // ✨ Custom FitQuest Loading Screen
  if (loading) {
    return (
      <Box
        sx={{
          height: "80vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          background: "linear-gradient(180deg, #000000 0%, #0E1B22 100%)",
          textAlign: "center",
          animation: "fadeIn 0.8s ease-in",
          "@keyframes fadeIn": {
            from: { opacity: 0 },
            to: { opacity: 1 },
          },
        }}
      >
        <Stack alignItems="center" spacing={3}>
          <CircularProgress
            thickness={4}
            size={80}
            sx={{
              color: "#00C2FF",
              animation: "glow 1.5s ease-in-out infinite",
              "@keyframes glow": {
                "0%, 100%": { filter: "drop-shadow(0 0 10px #00C2FF)" },
                "50%": { filter: "drop-shadow(0 0 20px #14F1C5)" },
              },
            }}
          />
          <Typography
            variant="h5"
            sx={{
              fontWeight: 700,
              color: "#B8EFFF",
              textShadow: "0 0 10px rgba(0, 194, 255, 0.5)",
              letterSpacing: "0.5px",
            }}
          >
            Loading Exercise Details...
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: "#7ED7E8",
              maxWidth: "400px",
              fontSize: "15px",
              lineHeight: 1.6,
            }}
          >
            Fetching workout data and related videos to boost your next session 💪
          </Typography>
        </Stack>
      </Box>
    );
  }

  if (!exerciseDetail || !exerciseDetail.name) {
    return (
      <Typography
        sx={{
          mt: "150px",
          textAlign: "center",
          color: "#FF4B4B",
          fontWeight: 600,
          fontSize: "20px",
        }}
      >
        Oops! Couldn’t load exercise details.
      </Typography>
    );
  }

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      {/* ✅ Detail section with ID for explicit scrolling */}
      <Box id="exercise-detail-section">
        <Detail exerciseDetail={exerciseDetail} />
      </Box>

      {/* NEW: Exercise Instructions & Tips Section */}
      <Box sx={{ 
        maxWidth: '1200px', 
        mx: 'auto', 
        px: { xs: 2, sm: 3, md: 4 },
        py: { xs: 3, sm: 4, md: 5 }
      }}>
        <Typography
          variant="h4"
          sx={{
            color: '#FFFFFF',
            fontWeight: 700,
            mb: 3,
            textAlign: 'center',
            fontSize: { xs: '24px', sm: '28px', md: '32px' },
            textShadow: '0 0 10px rgba(0,194,255,0.5)',
          }}
        >
          How to Perform {exerciseDetail.name}
        </Typography>

        <Box sx={{ 
          display: 'grid', 
          gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
          gap: 4,
          mb: 4
        }}>
          {/* Instructions */}
          <Box sx={{
            background: 'linear-gradient(145deg, #0F1419 0%, #1a2332 100%)',
            border: '1px solid rgba(0, 194, 255, 0.3)',
            borderRadius: '16px',
            p: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}>
            <Typography
              variant="h6"
              sx={{
                color: '#00C2FF',
                fontWeight: 600,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              📋 Step-by-Step Instructions
            </Typography>
            {exerciseDetail.instructions?.map((instruction, index) => (
              <Box key={index} sx={{ mb: 2, display: 'flex', gap: 2 }}>
                <Box sx={{
                  minWidth: '24px',
                  height: '24px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #00C2FF, #14F1C5)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#000',
                  fontWeight: 'bold',
                  fontSize: '12px',
                }}>
                  {index + 1}
                </Box>
                <Typography sx={{ color: '#B8EFFF', lineHeight: 1.6 }}>
                  {instruction}
                </Typography>
              </Box>
            )) || (
              <Typography sx={{ color: '#B8EFFF', lineHeight: 1.6 }}>
                Perform this exercise with proper form and controlled movements. Focus on the target muscles and maintain steady breathing throughout the movement.
              </Typography>
            )}
          </Box>

          {/* Pro Tips */}
          <Box sx={{
            background: 'linear-gradient(145deg, #1a2332 0%, #0F1419 100%)',
            border: '1px solid rgba(20, 241, 197, 0.3)',
            borderRadius: '16px',
            p: 3,
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
          }}>
            <Typography
              variant="h6"
              sx={{
                color: '#14F1C5',
                fontWeight: 600,
                mb: 2,
                display: 'flex',
                alignItems: 'center',
                gap: 1,
              }}
            >
              💡 Pro Tips & Safety
            </Typography>
            <Stack spacing={2}>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Typography sx={{ color: '#14F1C5', fontSize: '16px' }}>✓</Typography>
                <Typography sx={{ color: '#B8EFFF', lineHeight: 1.6 }}>
                  Start with lighter weights and focus on perfect form before increasing intensity
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Typography sx={{ color: '#14F1C5', fontSize: '16px' }}>✓</Typography>
                <Typography sx={{ color: '#B8EFFF', lineHeight: 1.6 }}>
                  Breathe out during the exertion phase and breathe in during the return phase
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Typography sx={{ color: '#14F1C5', fontSize: '16px' }}>✓</Typography>
                <Typography sx={{ color: '#B8EFFF', lineHeight: 1.6 }}>
                  Keep your core engaged throughout the entire movement for stability
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: 1.5 }}>
                <Typography sx={{ color: '#FFD93D', fontSize: '16px' }}>⚠️</Typography>
                <Typography sx={{ color: '#B8EFFF', lineHeight: 1.6 }}>
                  Stop immediately if you feel any sharp pain or discomfort
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>

        {/* Workout Stats */}
        <Box sx={{
          background: 'linear-gradient(145deg, #0F1419 0%, #1a2332 100%)',
          border: '1px solid rgba(0, 194, 255, 0.3)',
          borderRadius: '16px',
          p: 3,
          boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
        }}>
          <Typography
            variant="h6"
            sx={{
              color: '#00C2FF',
              fontWeight: 600,
              mb: 3,
              textAlign: 'center',
            }}
          >
            📊 Workout Statistics
          </Typography>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' }, 
            gap: 3 
          }}>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: '#FF6B6B', fontSize: '24px', fontWeight: 700 }}>
                {Math.floor(Math.random() * 50) + 20}
              </Typography>
              <Typography sx={{ color: '#B8EFFF', fontSize: '12px' }}>
                Calories/Set
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: '#FFD93D', fontSize: '24px', fontWeight: 700 }}>
                {Math.floor(Math.random() * 10) + 8}
              </Typography>
              <Typography sx={{ color: '#B8EFFF', fontSize: '12px' }}>
                Reps Recommended
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={ { color: '#6BCF7F', fontSize: '24px', fontWeight: 700 }}>
                {Math.floor(Math.random() * 3) + 2}
              </Typography>
              <Typography sx={{ color: '#B8EFFF', fontSize: '12px' }}>
                Sets Recommended
              </Typography>
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Typography sx={{ color: '#8A2BE2', fontSize: '24px', fontWeight: 700 }}>
                {Math.floor(Math.random() * 60) + 30}s
              </Typography>
              <Typography sx={{ color: '#B8EFFF', fontSize: '12px' }}>
                Rest Between Sets
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <ExerciseVideos
        exerciseVideos={exerciseVideos}
        name={exerciseDetail.name}
      />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;
