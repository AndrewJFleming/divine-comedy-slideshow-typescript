import { Box, Typography } from "@mui/material";
import { FC } from "react";
import { SlideData } from "../../interfaces";

interface Props {
  selectedSlide: SlideData;
  pageColor: string;
}

export const FeaturedSlide: FC<Props> = ({ selectedSlide, pageColor }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <Box
        mb={2}
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: pageColor,
            filter: "hue-rotate(90deg) saturate(150%)",
          }}
        >
          {selectedSlide.name}
        </Typography>
        <Typography
          variant="body1"
          pl={2}
          sx={{
            color: pageColor,
            filter: "hue-rotate(90deg) saturate(150%)",
          }}
        >
          <em>
            Canto {selectedSlide.canto} · Line {selectedSlide.line}
          </em>
        </Typography>
      </Box>
      <Box className="imageWrapper" sx={{ backgroundColor: pageColor }}>
        <img
          style={{ width: "100%" }}
          src={selectedSlide.imageUrl}
          alt={selectedSlide.name}
        />
      </Box>
    </Box>
  );
};
