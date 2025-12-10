import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  // Show content even when no videos are available
  const hasVideos = exerciseVideos && exerciseVideos.length > 0;

  return (
    <Box 
      sx={{ 
        width: '100%',
        marginTop: { xs: "20px", sm: "40px", md: "80px", lg: "203px" }
      }} 
    >
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
      <Typography
        sx={{ 
          fontSize: { xs: "22px", sm: "28px", md: "32px", lg: "44px" },
          lineHeight: { xs: 1.2, sm: 1.3 }
        }}
        fontWeight={700}
        color="#33B8CA"
        mb={{ xs: "20px", sm: "28px", md: "33px" }}
        textAlign="center"
        px={{ xs: 1, sm: 2 }}
      >
        {hasVideos ? "Watch" : "Learn About"}{" "}
        <span style={{ color: "#33B8CA", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        {hasVideos ? "exercise videos" : "exercise"}
      </Typography>

      {hasVideos ? (
        <Stack
          sx={{
            flexDirection: { xs: "column", lg: "row" },
            gap: { xs: "16px", sm: "20px", md: "30px", lg: "40px" },
            justifyContent: "center",
            alignItems: "center",
          }}
          flexWrap="wrap"
        >
          {exerciseVideos.map((videoId, index) => (
            <Box
              key={`${videoId}-${index}`}
              component="a"
              className="exercise-video"
              href={`https://www.youtube.com/watch?v=${videoId}`}
              target="_blank"
              rel="noreferrer"
              sx={{
                textDecoration: "none",
                color: "#4FD7FF",
                width: { xs: "100%", sm: "320px", md: "340px", lg: "387px" },
                maxWidth: { xs: "100%", sm: "320px", md: "340px", lg: "387px" },
                marginBottom: { xs: "16px", sm: "24px", md: "30px" },
                transition: "transform 0.3s",
                touchAction: "manipulation",
                "&:hover": {
                  transform: "scale(1.05)",
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  borderRadius: "15px",
                  width: "100%",
                  height: { xs: "180px", sm: "200px", md: "220px" },
                  objectFit: "cover",
                }}
                src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
                alt={`${name} video`}
              />
              <Box mt={{ xs: "8px", sm: "10px" }} textAlign="center" px={{ xs: 1, sm: 0 }}>
                <Typography
                  sx={{ 
                    fontSize: { xs: "14px", sm: "16px", md: "18px", lg: "20px" },
                    lineHeight: { xs: 1.3, sm: 1.4 }
                  }}
                  fontWeight={600}
                  color="#33B8CA"
                >
                  {name} Tutorial #{index + 1}
                </Typography>
                <Typography 
                  sx={{ 
                    fontSize: { xs: "12px", sm: "13px", md: "14px" },
                    mt: { xs: "4px", sm: "6px" }
                  }} 
                  color="#777"
                >
                  YouTube Fitness Channel
                </Typography>
              </Box>
            </Box>
          ))}
        </Stack>
      ) : (
        // Show alternative content when no videos are available
        <Box
          sx={{
            textAlign: "center",
            py: { xs: 4, sm: 6, md: 8 },
            px: { xs: 2, sm: 4 },
            background: "linear-gradient(135deg, rgba(0, 194, 255, 0.1) 0%, rgba(20, 241, 197, 0.1) 100%)",
            borderRadius: "20px",
            border: "1px solid rgba(0, 194, 255, 0.2)",
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: "48px", sm: "64px", md: "80px" },
              mb: 2,
            }}
          >
            🎥
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "#FFFFFF",
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "18px", sm: "22px", md: "26px" },
            }}
          >
            Video Tutorials Coming Soon
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#B8EFFF",
              mb: 3,
              fontSize: { xs: "14px", sm: "16px" },
              maxWidth: "600px",
              mx: "auto",
              lineHeight: 1.6,
            }}
          >
            We're working on adding video tutorials for {name}. In the meantime, 
            check out the detailed instructions and similar exercises below to master this movement.
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              gap: 2,
              flexWrap: "wrap",
            }}
          >
            <Box
              component="a"
              href={`https://www.youtube.com/results?search_query=${encodeURIComponent(name + " exercise tutorial")}`}
              target="_blank"
              rel="noreferrer"
              sx={{
                textDecoration: "none",
                background: "linear-gradient(135deg, #00C2FF 0%, #14F1C5 100%)",
                color: "#0B0C0F",
                px: 3,
                py: 1.5,
                borderRadius: "12px",
                fontWeight: 700,
                fontSize: { xs: "13px", sm: "14px" },
                transition: "all 0.3s ease",
                "&:hover": {
                  transform: "translateY(-2px)",
                  boxShadow: "0 8px 24px rgba(0, 194, 255, 0.3)",
                },
              }}
            >
              Search YouTube
            </Box>
          </Box>
        </Box>
      )}
      </Box>
    </Box>
  );
};

export default ExerciseVideos;
