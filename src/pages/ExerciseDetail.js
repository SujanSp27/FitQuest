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

        const exercisesData = await fetchData(
          "https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/exercises.json"
        );

        const exerciseDetailData = exercisesData.find(
          (ex) => ex.exerciseId === id
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
          ex.targetMuscles?.includes(exerciseDetailData.targetMuscles?.[0])
        );
        setTargetMuscleExercises(targetFiltered);

        const equipmentFiltered = exercisesData.filter((ex) =>
          ex.equipments?.includes(exerciseDetailData.equipments?.[0])
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
