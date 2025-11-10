import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box 
    sx={{ 
      width: '100%',
      mt: { xs: "20px", sm: "40px", md: "60px", lg: "100px" },
      overflowX: 'hidden'
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
    {/* Target Muscle Section */}
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
      Similar{" "}
      <span style={{ color: "#33B8CA", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      Exercises
    </Typography>

    <Stack 
      direction="row" 
      sx={{ 
        p: { xs: 1, sm: 1.5, md: 2 }, 
        position: "relative",
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} isBodyParts={false} />
      ) : (
        <Loader />
      )}
    </Stack>

    {/* Equipment Section */}
    <Typography
      sx={{
        fontSize: { xs: "22px", sm: "28px", md: "32px", lg: "44px" },
        mt: { xs: "40px", sm: "60px", md: "80px", lg: "100px" },
        lineHeight: { xs: 1.2, sm: 1.3 }
      }}
      fontWeight={700}
      color="#33B8CA"
      mb={{ xs: "20px", sm: "28px", md: "33px" }}
      textAlign="center"
      px={{ xs: 1, sm: 2 }}
    >
      Similar{" "}
      <span style={{ color: "#33B8CA", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      Exercises
    </Typography>

    <Stack 
      direction="row" 
      sx={{ 
        p: { xs: 1, sm: 1.5, md: 2 }, 
        position: "relative",
        width: '100%',
        overflowX: 'hidden'
      }}
    >
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} />
      ) : (
        <Loader />
      )}
    </Stack>
    </Box>
  </Box>
);

export default SimilarExercises;
