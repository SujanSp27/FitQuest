import { Link } from "react-router-dom";
import { Button, Typography, Box } from "@mui/material";
import { getExerciseEmoji } from "../utils/imageUtils";

const ExerciseCard = ({ exercise }) => {

  if (!exercise || (!exercise.exerciseId && !exercise.id)) {
    console.warn("⚠️ Missing exerciseId/id for:", exercise);
    return null;
  }

  // Handle different data structures from different APIs
  const exerciseId = exercise.exerciseId || exercise.id;
  const bodyPart = exercise.bodyParts?.[0] || exercise.bodyPart || 'general';
  const targetMuscle = exercise.targetMuscles?.[0] || exercise.target || 'muscle';
  const exerciseName = exercise.name || 'Unknown Exercise';
  const exerciseEmoji = getExerciseEmoji(exercise);



  return (
    <Box
      component={Link}
      className="exercise-card"
      to={`/exercise/${exerciseId}`}
      id={`exercise-card-${exerciseId}`}
      sx={{
        textDecoration: "none",
        flex: "1 1 300px",
        maxWidth: "100%",
        minWidth: { xs: "260px", sm: "280px", md: "300px" },
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "auto",
          minHeight: { xs: "180px", sm: "200px", md: "220px" },
          width: "100%",
          background: "linear-gradient(145deg, #0F1419 0%, #1a2332 100%)",
          border: "1px solid rgba(0, 194, 255, 0.4)",
          borderRadius: "16px",
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.3), 0 2px 8px rgba(0, 194, 255, 0.1)",
          overflow: "hidden",
          cursor: "pointer",
          position: "relative",
          transition: "all 0.3s ease",
          "&:hover": {
            transform: "translateY(-3px)",
            border: "1px solid rgba(0, 194, 255, 0.7)",
            boxShadow: "0 8px 32px rgba(0, 0, 0, 0.4), 0 4px 16px rgba(0, 194, 255, 0.2)",
          },
        }}
      >
        {/* Compact Header with Icon */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            p: { xs: 1.5, sm: 2 },
            borderBottom: "1px solid rgba(0, 194, 255, 0.15)",
          }}
        >
          {/* Exercise Icon */}
          <Box
            sx={{
              width: { xs: "45px", sm: "50px" },
              height: { xs: "45px", sm: "50px" },
              borderRadius: "10px",
              background: "linear-gradient(135deg, #00C2FF 0%, #14F1C5 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              mr: 1.5,
              boxShadow: "0 3px 12px rgba(0, 194, 255, 0.25)",
              flexShrink: 0,
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "20px", sm: "24px" },
                color: "#0B0C0F",
                fontWeight: "bold",
              }}
            >
              {exerciseEmoji}
            </Typography>
          </Box>

          {/* Exercise Info */}
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontSize: { xs: "15px", sm: "16px" },
                fontWeight: 700,
                textTransform: "capitalize",
                mb: 0.3,
                lineHeight: 1.2,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {exerciseName}
            </Typography>
            <Typography
              variant="body2"
              sx={{
                color: "#7ED7E8",
                fontSize: { xs: "11px", sm: "12px" },
                opacity: 0.8,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {bodyPart} • {targetMuscle}
            </Typography>
          </Box>
        </Box>

        {/* Rich Content Details */}
        <Box sx={{ 
          p: { xs: 1.5, sm: 2 }, 
          pb: { xs: 1, sm: 1.2 },
          display: "flex", 
          flexDirection: "column", 
          gap: 1.5,
          flex: 1
        }}>
          {/* Equipment and Stats Row */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            {/* Equipment Badge */}
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                px: 1.5,
                py: 0.4,
                borderRadius: "6px",
                background: "rgba(0, 194, 255, 0.12)",
                border: "1px solid rgba(0, 194, 255, 0.25)",
                flex: 1,
                minWidth: 0,
              }}
            >
              <Typography
                sx={{
                  color: "#00C2FF",
                  fontSize: { xs: "10px", sm: "11px" },
                  fontWeight: 600,
                  textTransform: "capitalize",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap",
                }}
              >
                {exercise.equipments?.[0] || exercise.equipment || 'Body Weight'}
              </Typography>
            </Box>

            {/* Exercise Type Badge */}
            <Box
              sx={{
                px: 1,
                py: 0.4,
                borderRadius: "6px",
                background: "rgba(20, 241, 197, 0.12)",
                border: "1px solid rgba(20, 241, 197, 0.25)",
              }}
            >
              <Typography
                sx={{
                  color: "#14F1C5",
                  fontSize: { xs: "9px", sm: "10px" },
                  fontWeight: 600,
                  textTransform: "uppercase",
                }}
              >
                {bodyPart.split(' ')[0]}
              </Typography>
            </Box>
          </Box>

          {/* Instructions Preview */}
          <Box>
            <Typography
              variant="body2"
              sx={{
                color: "#7ED7E8",
                fontSize: { xs: "9px", sm: "10px" },
                lineHeight: 1.4,
                opacity: 0.9,
                overflow: "hidden",
                display: "-webkit-box",
                WebkitLineClamp: 2,
                WebkitBoxOrient: "vertical",
              }}
            >
              {exercise.instructions?.[0] || `Effective ${bodyPart} exercise targeting ${targetMuscle}. Perfect for building strength and endurance.`}
            </Typography>
          </Box>

          {/* Difficulty Indicator */}
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 0.5 }}>
              <Typography
                variant="body2"
                sx={{
                  color: "#B8EFFF",
                  fontSize: { xs: "10px", sm: "11px" },
                  fontWeight: 500,
                }}
              >
                Difficulty
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: "#14F1C5",
                  fontSize: { xs: "9px", sm: "10px" },
                  fontWeight: 600,
                }}
              >
                Beginner
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 0.3 }}>
              {[1, 2, 3, 4, 5].map((level) => (
                <Box
                  key={level}
                  sx={{
                    flex: 1,
                    height: "3px",
                    borderRadius: "1.5px",
                    background: level <= 3 
                      ? "linear-gradient(90deg, #00C2FF, #14F1C5)" 
                      : "rgba(255, 255, 255, 0.15)",
                  }}
                />
              ))}
            </Box>
          </Box>

          {/* Exercise Stats & Features */}
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 1 }}>
            {/* Calories Burned */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography sx={{ fontSize: "12px" }}>🔥</Typography>
              <Typography
                sx={{
                  color: "#FF6B6B",
                  fontSize: { xs: "9px", sm: "10px" },
                  fontWeight: 600,
                }}
              >
                {Math.floor(Math.random() * 50) + 20} cal
              </Typography>
            </Box>

            {/* Duration */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography sx={{ fontSize: "12px" }}>⏱️</Typography>
              <Typography
                sx={{
                  color: "#FFD93D",
                  fontSize: { xs: "9px", sm: "10px" },
                  fontWeight: 600,
                }}
              >
                {Math.floor(Math.random() * 10) + 5} min
              </Typography>
            </Box>

            {/* Popularity */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography sx={{ fontSize: "12px" }}>⭐</Typography>
              <Typography
                sx={{
                  color: "#6BCF7F",
                  fontSize: { xs: "9px", sm: "10px" },
                  fontWeight: 600,
                }}
              >
                {(Math.random() * 2 + 3).toFixed(1)}
              </Typography>
            </Box>
          </Box>

          {/* Quick Action Tags */}
          <Box sx={{ display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {/* Favorite Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0.8,
                py: 0.3,
                borderRadius: "12px",
                background: "rgba(255, 107, 107, 0.1)",
                border: "1px solid rgba(255, 107, 107, 0.3)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(255, 107, 107, 0.2)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography sx={{ fontSize: "10px", mr: 0.3 }}>❤️</Typography>
              <Typography
                sx={{
                  color: "#FF6B6B",
                  fontSize: { xs: "8px", sm: "9px" },
                  fontWeight: 600,
                }}
              >
                Save
              </Typography>
            </Box>

            {/* Share Button */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0.8,
                py: 0.3,
                borderRadius: "12px",
                background: "rgba(107, 207, 127, 0.1)",
                border: "1px solid rgba(107, 207, 127, 0.3)",
                cursor: "pointer",
                transition: "all 0.2s ease",
                "&:hover": {
                  background: "rgba(107, 207, 127, 0.2)",
                  transform: "scale(1.05)",
                },
              }}
            >
              <Typography sx={{ fontSize: "10px", mr: 0.3 }}>📤</Typography>
              <Typography
                sx={{
                  color: "#6BCF7F",
                  fontSize: { xs: "8px", sm: "9px" },
                  fontWeight: 600,
                }}
              >
                Share
              </Typography>
            </Box>

            {/* Video Available Badge */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                px: 0.8,
                py: 0.3,
                borderRadius: "12px",
                background: "rgba(255, 217, 61, 0.1)",
                border: "1px solid rgba(255, 217, 61, 0.3)",
              }}
            >
              <Typography sx={{ fontSize: "10px", mr: 0.3 }}>🎥</Typography>
              <Typography
                sx={{
                  color: "#FFD93D",
                  fontSize: { xs: "8px", sm: "9px" },
                  fontWeight: 600,
                }}
              >
                Video
              </Typography>
            </Box>
          </Box>

          {/* Personal Best - Simplified */}
          <Box sx={{ 
            background: "rgba(0, 194, 255, 0.05)",
            border: "1px solid rgba(0, 194, 255, 0.15)",
            borderRadius: "8px",
            p: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between"
          }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
              <Typography sx={{ fontSize: "12px" }}>🎯</Typography>
              <Typography
                sx={{
                  color: "#B8EFFF",
                  fontSize: { xs: "9px", sm: "10px" },
                  fontWeight: 500,
                }}
              >
                Personal Best
              </Typography>
            </Box>
            <Typography
              sx={{
                color: "#00C2FF",
                fontSize: { xs: "9px", sm: "10px" },
                fontWeight: 700,
              }}
            >
              {Math.floor(Math.random() * 50) + 10} reps
            </Typography>
          </Box>
        </Box>

        {/* Compact Action Button */}
        <Box sx={{ px: { xs: 1.5, sm: 2 }, pb: { xs: 1.5, sm: 2 } }}>
          <Button
            fullWidth
            sx={{
              background: "linear-gradient(135deg, #00C2FF 0%, #14F1C5 100%)",
              color: "#0B0C0F",
              fontWeight: 700,
              borderRadius: "8px",
              py: { xs: 0.6, sm: 0.8 },
              fontSize: { xs: "11px", sm: "12px" },
              textTransform: "none",
              boxShadow: "0 2px 8px rgba(0, 194, 255, 0.2)",
              transition: "all 0.3s ease",
              "&:hover": {
                background: "linear-gradient(135deg, #14F1C5 0%, #00A3B8 100%)",
                transform: "translateY(-1px)",
                boxShadow: "0 3px 12px rgba(0, 194, 255, 0.3)",
              },
            }}
          >
            View Details
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ExerciseCard;
