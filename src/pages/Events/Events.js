import React, { useContext } from "react";
// MUI
import { Box, Typography, Container } from "@mui/material";
// contexts
import { ArtistContext } from "../../contexts/ArtistContext";
// custom components
import EventCards from "../../components/EventCards";

const Events = () => {
  const { artistData } = useContext(ArtistContext);

  const styles = {
    container: {
      height: "85vh",
    },
    artistImageContainer: {
      textAlign: "center",
      marginTop: 30,
    },
    artistImage: {
      height: 100,
      width: 100,
      borderRadius: 50,
      filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.3))",
    },
    eventCountText: {
      marginTop: 30,
      marginBottom: 30,
    },
  };

  return (
    <Container style={styles.container} maxWidth={false}>
      <Container maxWidth="sm" style={styles.artistImageContainer}>
        <img
          src={
            artistData.data !== undefined
              ? artistData.data.image_url
              : "Image not found"
          }
          style={styles.artistImage}
          alt="Loading..."
        />

        <Typography
          variant="h6"
          component="h2"
          color="text.primary"
          style={{ marginTop: 10 }}
        >
          {artistData.data !== undefined
            ? artistData.data.name
            : "Name not found"}
        </Typography>

        {artistData.data.upcoming_event_count > 0 &&
        artistData.data !== undefined ? (
          <Typography
            color="text.primary"
            align="center"
            style={styles.eventCountText}
          >
            {artistData.data.upcoming_event_count} Upcoming Events
          </Typography>
        ) : (
          <></>
        )}
      </Container>
      <EventCards />
    </Container>
  );
};

export default Events;
