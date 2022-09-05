import React, { useContext } from "react";
// MUI
import {
  Card,
  CardContent,
  Box,
  Typography,
  Container,
  Grid,
} from "@mui/material";
// contexts
import { EventsContext } from "../../contexts/EventsContext";
// utils
import dateTimeConverter from "../../utils/dateTimeConverter";

const EventCards = () => {
  // getting events data of an artist from its context
  const { eventsData } = useContext(EventsContext);
  const styles = {
    container: {
      paddingTop: 10,
      paddingBottom: 30,
    },
  };

  return (
    <Container style={styles.container} maxWidth="lg">
      {eventsData.data.length > 0 && eventsData.data !== undefined ? (
        <Grid container spacing={6}>
          {eventsData.data.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <Card style={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {event.venue.country}
                  </Typography>
                  <Typography
                    style={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    {event.venue.city}
                  </Typography>
                  <Typography color="text.secondary" gutterBottom>
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
      ) : (
        <Typography
          variant="h6"
          align="center"
          color="text.secondary"
          style={{ marginTop: 100 }}
        >
          No upcoming events for this artist.
        </Typography>
      )}
    </Container>
  );
};

export default EventCards;
