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
          height: "430px",
          background:
            "linear-gradient(160deg, #0A0E11 0%, #0E1B22 100%)",
          border: "1px solid rgba(0, 194, 255, 0.35)",
          borderRadius: "22px",
          boxShadow:
            "0 10px 30px rgba(0, 194, 255, 0.15), 0 0 25px rgba(0, 194, 255, 0.08)",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          transition: "all 0.4s ease",
          transform: "translateY(0)",
          animation: "floatCard 4s ease-in-out infinite",
          "&:hover": {
            transform: "translateY(-10px) scale(1.02)",
            border: "1px solid rgba(0, 194, 255, 0.7)",
            boxShadow:
              "0 0 35px rgba(0, 194, 255, 0.6), 0 10px 50px rgba(0, 194, 255, 0.25)",
          },
          "@keyframes floatCard": {
            "0%, 100%": { transform: "translateY(0)" },
            "50%": { transform: "translateY(-6px)" },
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
            borderBottom: "1px solid rgba(0,194,255,0.2)",
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
              "&:hover": { transform: "scale(1.07)" },
            }}
          />
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              height: "140px",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.45) 100%)",
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
          sx={{ pt: "14px" }}
        >
          <Button
            sx={{
              color: "#0B0C0F",
              background: "linear-gradient(90deg, #00C2FF, #14F1C5)",
              fontSize: "13px",
              borderRadius: "999px",
              textTransform: "capitalize",
              px: 2,
              py: 0.6,
              fontWeight: 600,
              "&:hover": {
                background: "linear-gradient(90deg, #14F1C5, #00C2FF)",
                boxShadow: "0 0 10px rgba(0,194,255,0.5)",
              },
              boxShadow: "0 2px 8px rgba(0, 194, 255, 0.25)",
              transition: "all 0.3s ease",
            }}
          >
            {exercise.bodyParts?.[0]}
          </Button>
          <Button
            sx={{
              color: "#0B0C0F",
              background: "linear-gradient(90deg, #14F1C5, #00A3B8)",
              fontSize: "13px",
              borderRadius: "999px",
              textTransform: "capitalize",
              px: 2,
              py: 0.6,
              fontWeight: 600,
              "&:hover": {
                background: "linear-gradient(90deg, #00C2FF, #14F1C5)",
                boxShadow: "0 0 10px rgba(0,194,255,0.5)",
              },
              boxShadow: "0 2px 8px rgba(0, 194, 255, 0.25)",
              transition: "all 0.3s ease",
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
            pb: "6px",
            fontSize: { xs: "16px", md: "18px" },
            lineHeight: "1.3",
            textTransform: "capitalize",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textShadow: "0 0 8px rgba(0,194,255,0.4)",
            minHeight: "45px",
            letterSpacing: "0.3px",
          }}
        >
          {exercise.name}
        </Typography>

        {/* View Details Button */}
        <Box
          sx={{
            width: "100%",
            px: "16px",
            pb: "18px",
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
              borderRadius: "30px",
              py: 1.2,
              fontSize: "15px",
              boxShadow: "0 6px 18px rgba(0, 194, 255, 0.28)",
              transition: "all .3s ease-in-out",
              "&:hover": {
                background:
                  "linear-gradient(90deg, #14F1C5 0%, #00C2FF 100%)",
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
