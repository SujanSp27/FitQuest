import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";

import { fetchData } from "../utils/fetchData";
import Detail from "../components/Detail";
import ExerciseVideos from "../components/ExerciseVideo";
import SimilarExercises from "../components/SimilarExercises";
import localVideos from "../data/exerciseVideos.json"; // ✅ your generated file

const ExerciseDetail = () => {
  const [exerciseDetail, setExerciseDetail] = useState({});
  const [exerciseVideos, setExerciseVideos] = useState([]);
  const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);
  const [equipmentExercises, setEquipmentExercises] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const fetchExercisesData = async () => {
      try {
        // ✅ Load all exercises from the open GitHub dataset
        const exercisesData = await fetchData(
          "https://raw.githubusercontent.com/ExerciseDB/exercisedb-api/main/src/data/exercises.json"
        );

        // ✅ Find exercise by ID
        const exerciseDetailData = exercisesData.find((ex) => ex.exerciseId === id);
        setExerciseDetail(exerciseDetailData);

        // ✅ Match video data by exercise name (case-insensitive)
        const foundVideos = localVideos.find(
          (vid) =>
            vid.name?.trim().toLowerCase() ===
            exerciseDetailData?.name?.trim().toLowerCase()
        );

        console.log("🎥 Found videos for", exerciseDetailData?.name, ":", foundVideos);

        if (foundVideos && foundVideos.videos?.length > 0) {
          setExerciseVideos(foundVideos.videos);
        } else {
          setExerciseVideos([]);
        }

        // ✅ Filter similar exercises by target muscle
        const targetFiltered = exercisesData.filter((ex) =>
          ex.targetMuscles?.includes(exerciseDetailData.targetMuscles?.[0])
        );
        setTargetMuscleExercises(targetFiltered);

        // ✅ Filter similar exercises by equipment
        const equipmentFiltered = exercisesData.filter((ex) =>
          ex.equipments?.includes(exerciseDetailData.equipments?.[0])
        );
        setEquipmentExercises(equipmentFiltered);
      } catch (error) {
        console.error("❌ Error loading exercise details:", error);
      }
    };

    fetchExercisesData();
  }, [id]);

  if (!exerciseDetail || !exerciseDetail.name)
    return <div>Loading exercise details...</div>;

  return (
    <Box sx={{ mt: { lg: "96px", xs: "60px" } }}>
      <Detail exerciseDetail={exerciseDetail} />
      <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetail.name} />
      <SimilarExercises
        targetMuscleExercises={targetMuscleExercises}
        equipmentExercises={equipmentExercises}
      />
    </Box>
  );
};

export default ExerciseDetail;