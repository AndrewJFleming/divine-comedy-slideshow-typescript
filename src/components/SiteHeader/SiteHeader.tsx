import { FC } from "react";
import { Box, Container, Typography } from "@mui/material";

export const SiteHeader: FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: "rgb(195, 195, 204)",
      }}
    >
      <Container>
        <Box
          sx={{
            width: "100%",
            padding: "2rem 0px 2rem 24px",
          }}
        >
          <Typography
            variant="h3"
            style={{
              color: "rgb(28, 27, 34)",
              fontFamily: "san-serif",
              // fontWeight: 'bold',
              // textShadow: "4px 4px 4px #fff",
            }}
          >
            Divine Comedy Slideshow
          </Typography>
          <Typography
            variant="h5"
            sx={{
              color: "rgba(28, 27, 34, 0.7)",
            }}
          >
            <em>with TypeScript</em>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
