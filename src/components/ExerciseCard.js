import React from "react";
import { Link } from "react-router-dom";
import { Button, Stack, Typography, Box } from "@mui/material";

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
        flex: "1 1 300px",
        maxWidth: "340px",
        minWidth: "280px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "center",
          height: "420px",
          background: "linear-gradient(145deg, #101417 0%, #0E1B22 100%)",
          border: "1px solid rgba(0, 194, 255, 0.3)",
          borderRadius: "22px",
          boxShadow:
            "0 10px 25px rgba(0, 194, 255, 0.1), 0 0 30px rgba(0, 194, 255, 0.05)",
          overflow: "hidden",
          transition: "all 0.4s ease",
          cursor: "pointer",
          position: "relative",
          transform: "translateY(0)",
          "&:hover": {
            transform: "translateY(-12px)",
            boxShadow:
              "0 0 25px rgba(0, 194, 255, 0.6), 0 10px 40px rgba(0, 194, 255, 0.25)",
            border: "1px solid rgba(0, 194, 255, 0.6)",
          },
        }}
      >
        {/* Exercise Image */}
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: "230px",
            overflow: "hidden",
          }}
        >
          <Box
            component="img"
            src={exercise.gifUrl}
            alt={exercise.name}
            loading="lazy"
            sx={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              transition: "transform .4s ease",
              "&:hover": { transform: "scale(1.05)" },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "150px",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.4) 100%)",
            }}
          />
        </Box>

        {/* Muscle Type Buttons */}
        <Stack
          direction="row"
          spacing={1.5}
          justifyContent="center"
          alignItems="center"
          flexWrap="wrap"
          sx={{ pt: "12px" }}
        >
          <Button
            sx={{
              color: "#0B0C0F",
              background: "#00C2FF",
              fontSize: "13px",
              borderRadius: "999px",
              textTransform: "capitalize",
              px: 2,
              py: 0.5,
              fontWeight: 600,
              "&:hover": { background: "#14F1C5" },
              boxShadow: "0 2px 8px rgba(0, 194, 255, 0.25)",
            }}
          >
            {exercise.bodyParts?.[0]}
          </Button>
          <Button
            sx={{
              color: "#0B0C0F",
              background: "#14F1C5",
              fontSize: "13px",
              borderRadius: "999px",
              textTransform: "capitalize",
              px: 2,
              py: 0.5,
              fontWeight: 600,
              "&:hover": { background: "#00C2FF" },
              boxShadow: "0 2px 8px rgba(0, 194, 255, 0.25)",
            }}
          >
            {exercise.targetMuscles?.[0]}
          </Button>
        </Stack>

        {/* Exercise Title */}
        <Typography
          variant="h6"
          fontWeight="700"
          color="#FFFFFF"
          textAlign="center"
          sx={{
            px: "16px",
            pt: "10px",
            pb: "4px",
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: "1.3",
            textTransform: "capitalize",
            height: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "0 0 8px rgba(0,194,255,0.4)",
            minHeight: "45px",
          }}
        >
          {exercise.name}
        </Typography>

        {/* View Details Button */}
        <Box
          sx={{
            width: "100%",
            px: "16px",
            pb: "12px",
            mt: "auto",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            fullWidth
            sx={{
              background: "linear-gradient(90deg, #00C2FF 0%, #00A3B8 100%)",
              color: "#FFFFFF",
              fontWeight: 700,
              borderRadius: "28px",
              py: 1.1,
              fontSize: "15px",
              boxShadow: "0 4px 15px rgba(0, 194, 255, 0.25)",
              transition: "all .25s ease-in-out",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #0093CC 0%, #007A89 100%)",
                transform: "translateY(-3px)",
                boxShadow: "0 0 20px #00C2FF",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </Link>
  );
};

export default ExerciseCard;
