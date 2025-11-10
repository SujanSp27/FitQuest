import React, { useContext } from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Box, Typography } from "@mui/material";

import ExerciseCard from "./ExerciseCard";
import BodyPart from "./BodyPart";
import RightArrowIcon from "../assets/icons/right-arrow.png";
import LeftArrowIcon from "../assets/icons/left-arrow.png";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow" sx={{ '& img': { width: 22, height: 22 } }}>
      <img src={LeftArrowIcon} alt="left-arrow" />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);
  return (
    <Typography onClick={() => scrollNext()} className="right-arrow" sx={{ '& img': { width: 22, height: 22 } }}>
      <img src={RightArrowIcon} alt="right-arrow" />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart, isBodyParts }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box
        key={item.id || item.name || item}
        itemId={item.id || item.name || item}
        title={item.name || item}
        m="0 24px"
      >
        {isBodyParts ? (
          <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
        ) : (
          <ExerciseCard exercise={item} />
        )}
      </Box>
    ))}
  </ScrollMenu>
);

export default HorizontalScrollbar;