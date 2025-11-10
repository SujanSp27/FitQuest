import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import Loader from "./Loader";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos || exerciseVideos.length === 0) return <Loader />;

  return (
    <Box sx={{ marginTop: { lg: "203px", xs: "20px" } }} p="20px">
      <Typography
        sx={{ fontSize: { lg: "44px", xs: "25px" } }}
        fontWeight={700}
        color="#33B8CA"
        mb="33px"
        textAlign="center"
      >
        Watch{" "}
        <span style={{ color: "#33B8CA", textTransform: "capitalize" }}>
          {name}
        </span>{" "}
        exercise videos
      </Typography>

      <Stack
        sx={{
          flexDirection: { lg: "row" },
          gap: { lg: "40px", xs: "20px" },
          justifyContent: "center",
          alignItems: "center",
        }}
        flexWrap="wrap"
      >
        {exerciseVideos.map((videoId, index) => (
          <a
            key={`${videoId}-${index}`}
            className="exercise-video"
            href={`https://www.youtube.com/watch?v=${videoId}`}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: "none",
              color: "#4FD7FF",
              width: "320px",
              marginBottom: "30px",
              transition: "transform 0.3s",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.05)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.transform = "scale(1)")
            }
          >
            <img
              style={{
                borderRadius: "15px",
                width: "100%",
                height: "200px",
                objectFit: "cover",
              }}
              src={`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`}
              alt={`${name} video`}
            />
            <Box mt="10px" textAlign="center">
              <Typography
                sx={{ fontSize: { lg: "20px", xs: "16px" } }}
                fontWeight={600}
                color="#33B8CA"
              >
                {name} Tutorial #{index + 1}
              </Typography>
              <Typography fontSize="14px" color="#777">
                YouTube Fitness Channel
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  );
};

export default ExerciseVideos;
