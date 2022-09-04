import React, { useContext } from "react";
// MUI
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
  Typography,
  Container,
  IconButton,
  Grid,
} from "@mui/material";
// contexts
import { EventsContext } from "../../contexts/EventsContext";
// utils
import dateTimeConverter from "../../utils/dateTimeConverter";

const EventCards = () => {
  const { eventsData } = useContext(EventsContext);

  return (
    <>
      {eventsData.data.length > 0 ? (
        <>
          <Container sx={{ pt: 4, pb: 16 }} maxWidth="md">
            {/* End hero unit */}
            <Grid container spacing={6}>
              {eventsData.data.map((event) => (
                <Grid item key={event.id} xs={12} sm={6} md={4}>
                  <Card sx={{ minWidth: 275 }}>
                    <CardContent>
                      <Typography variant="h5" component="div">
                        {event.venue.country}
                      </Typography>
                      <Typography
                        sx={{ fontSize: 14 }}
                        color="text.secondary"
                        gutterBottom
                      >
                        {event.venue.city}
                      </Typography>
                      <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        <b>Venue:</b> {event.venue.name}
                      </Typography>
                      <Typography variant="body2">
                        Date: {dateTimeConverter(event.datetime)}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </>
      ) : (
        <Box
          sx={{
            bgcolor: "background.paper",
            pt: 10,
            pb: 10,
          }}
        >
          <Container
            maxWidth="sm"
            style={{
              textAlign: "center",
            }}
          >
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              paragraph
            >
              No upcoming events for this artist.
            </Typography>
          </Container>
        </Box>
      )}
    </>
  );
};

export default EventCards;
