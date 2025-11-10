import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos || exerciseVideos.length === 0) return <Loader />;

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
        Watch{" "}
        <span style={{ color: "#33B8CA", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

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
      </Box>
    </Box>
  );
};

export default ExerciseVideos;
