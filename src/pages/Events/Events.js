import React, { useContext } from "react";
// MUI
import { Box, Typography, Container } from "@mui/material";
// contexts
import { ArtistContext } from "../../contexts/ArtistContext";
// custom components
import EventCards from "../../components/EventCards";

const Events = () => {
  const { artistData } = useContext(ArtistContext);

  return (
    <>
      <Container style={{ height: "85vh" }}>
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 4,
          }}
        >
          <Container
            maxWidth="sm"
            style={{
              textAlign: "center",
            }}
          >
            <img
              src={artistData.data.image_url}
              style={{
                height: 100,
                width: 100,
                borderRadius: 50,
                filter: "drop-shadow(2px 2px 5px rgba(0,0,0,0.3))",
              }}
              alt="Loading..."
            />
            <Typography
              variant="h6"
              align="center"
              color="text.primary"
              paragraph
            >
              {artistData.data.name}
            </Typography>
          </Container>
        </Box>
        {artistData.data.upcoming_event_count > 0 ? (
          <Typography
            color="text.primary"
            align="center"
            paragraph
            style={{
              marginBottom: 0,
              marginTop: 30,
            }}
          >
            {artistData.data.upcoming_event_count} Upcoming Events
          </Typography>
        ) : (
          ""
        )}
        <Box
          sx={{
            bgcolor: "background.paper",
            pb: 4,
          }}
        >
          <EventCards />
        </Box>
      </Container>
    </>
  );
};

export default Events;
