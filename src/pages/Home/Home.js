import React, { useContext } from "react";
// MUI
import { Box, Typography, Container } from "@mui/material";
// custom components
import ArtistCard from "../../components/ArtistCard/ArtistCard";
// contexts
import { ArtistContext } from "../../contexts/ArtistContext";

const Home = () => {
  const { artistData } = useContext(ArtistContext);

  return (
    <>
      {artistData.data !== undefined ? (
        <Container
          sx={{ py: 5 }}
          maxWidth="md"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <ArtistCard />
        </Container>
      ) : (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
            pb: 4,
          }}
        >
          <Container
            maxWidth="sm"
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={require("../../assets/artists-eve.gif")}
              style={{ height: 300, width: 300, marginTop: "8%" }}
              alt="Loading..."
            />
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              Try searching for your favorite artist.
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
};

export default Home;
