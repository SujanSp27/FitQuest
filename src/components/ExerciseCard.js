import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography } from "@mui/material";

const ExerciseCard = ({ exercise }) => {
  if (!exercise || !exercise.exerciseId) {
    console.warn("⚠️ Missing exerciseId for:", exercise);
    return null;
  }

  return (
<Link
  className="exercise-card"
  to={`/exercise/${exercise.exerciseId}`}
  style={{
    textDecoration: "none",
    borderTop: "4px solid #b1daebff", // ✅ primary.dark from your theme
    background: "#FFFFFF",          // ✅ clean paper white background
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
    transition: "all 0.3s ease",
    overflow: "hidden",
    display: "block",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "scale(1.03)";
    e.currentTarget.style.boxShadow = "0 6px 20px rgba(0, 194, 255, 0.25)"; // ✅ primary.main glow
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)";
  }}
>
      <img
        src={exercise.gifUrl}
        alt={exercise.name}
        loading="lazy"
        style={{
          width: "100%",
          height: "250px",
          objectFit: "cover",
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
        }}
      />
      <Stack direction="row" spacing={1} p="15px" justifyContent="center">
        <Button
          sx={{
            color: "#fff",
            background: "#FF2625",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            "&:hover": { background: "#87c5e6ff" },
          }}
        >
          {exercise.bodyParts?.[0]}
        </Button>
        <Button
          sx={{
            color: "#fff",
            background: "#FCC757",
            fontSize: "14px",
            borderRadius: "20px",
            textTransform: "capitalize",
            "&:hover": { background: "#f8b930" },
          }}
        >
          {exercise.targetMuscles?.[0]}
        </Button>
      </Stack>
      <Typography
        variant="h6"
        fontWeight="bold"
        color="#000"
        textAlign="center"
        px="15px"
        pb="15px"
        textTransform="capitalize"
      >
        {exercise.name}
      </Typography>
    </Link>
  );
};

export default ExerciseCard;
