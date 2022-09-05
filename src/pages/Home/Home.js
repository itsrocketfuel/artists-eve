import React, { useContext } from "react";
// MUI
import { Container, Typography } from "@mui/material";
// custom components
import ArtistCard from "../../components/ArtistCard/ArtistCard";
// contexts
import { ArtistContext } from "../../contexts/ArtistContext";

const Home = () => {
  const { artistData } = useContext(ArtistContext);

  const styles = {
    container: {
      paddingTop: 5,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "85vh",
    },
    logo: {
      height: 300,
      width: 300,
      marginTop: -50,
    },
  };

  return (
    <Container style={styles.container} maxWidth={false}>
      {artistData.data !== undefined && artistData.data !== "" ? (
        <ArtistCard />
      ) : artistData.data === "" ? (
        <Typography variant="h6" color="text.secondary">
          No artist found.
        </Typography>
      ) : (
        <Container
          maxWidth={false}
          style={{
            textAlign: "center",
          }}
        >
          <img
            src={require("../../assets/artists-eve.gif")}
            style={styles.logo}
            alt="Loading..."
          />
          <Typography variant="h6" align="center" color="text.secondary">
            Try searching for your favorite artist.
          </Typography>
        </Container>
      )}
    </Container>
  );
};

export default Home;
