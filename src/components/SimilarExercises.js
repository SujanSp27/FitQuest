import React from "react";
import { Typography, Box, Stack } from "@mui/material";
import HorizontalScrollbar from "./HorizontalScrollbar";
import Loader from "./Loader";

const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => (
  <Box sx={{ mt: { lg: "100px", xs: "0px" } }} p="20px">
    {/* Target Muscle Section */}
    <Typography
      sx={{ fontSize: { lg: "44px", xs: "25px" } }}
      fontWeight={700}
      color="#000"
      mb="33px"
      textAlign="center"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Target Muscle
      </span>{" "}
      Exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {targetMuscleExercises.length !== 0 ? (
        <HorizontalScrollbar data={targetMuscleExercises} isBodyParts={false} />
      ) : (
        <Loader />
      )}
    </Stack>

    {/* Equipment Section */}
    <Typography
      sx={{
        fontSize: { lg: "44px", xs: "25px" },
        mt: { lg: "100px", xs: "60px" },
      }}
      fontWeight={700}
      color="#000"
      mb="33px"
      textAlign="center"
    >
      Similar{" "}
      <span style={{ color: "#FF2625", textTransform: "capitalize" }}>
        Equipment
      </span>{" "}
      Exercises
    </Typography>

    <Stack direction="row" sx={{ p: 2, position: "relative" }}>
      {equipmentExercises.length !== 0 ? (
        <HorizontalScrollbar data={equipmentExercises} isBodyParts={false} />
      ) : (
        <Loader />
      )}
    </Stack>
  </Box>
);

export default SimilarExercises;
