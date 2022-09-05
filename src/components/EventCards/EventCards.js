import React, { useContext } from "react";
// MUI
import { Card, CardContent, Typography, Container, Grid } from "@mui/material";
import PublicIcon from "@mui/icons-material/Public";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EventIcon from "@mui/icons-material/Event";
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
    icon: {
      marginRight: 10,
      color: "dimGray",
    },
  };

  return (
    <Container style={styles.container} maxWidth="lg">
      {eventsData.data !== undefined && eventsData.data.length > 0 ? (
        <Grid container spacing={6}>
          {eventsData.data.map((event) => (
            <Grid item key={event.id} xs={12} sm={6} md={4}>
              <Card style={{ minWidth: 275 }}>
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    display={"flex"}
                    alignItems={"center"}
                  >
                    <PublicIcon style={styles.icon} />
                    {event.venue.country}
                  </Typography>
                  <Typography
                    style={{ fontSize: 14 }}
                    color="text.secondary"
                    display={"flex"}
                    alignItems={"center"}
                    gutterBottom
                    marginBottom={1.5}
                  >
                    <LocationCityIcon style={styles.icon} />
                    {event.venue.city}
                  </Typography>
                  <Typography
                    color="text.secondary"
                    display={"flex"}
                    alignItems={"center"}
                    lineHeight={1.1}
                    gutterBottom
                  >
                    <LocationOnIcon style={styles.icon} />
                    <b style={{ marginRight: 10 }}>Venue: </b>{" "}
                    {event.venue.name}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="text.secondary"
                    display={"flex"}
                    alignItems={"center"}
                    marginTop={2}
                  >
                    <EventIcon style={styles.icon} />{" "}
                    <b style={{ marginRight: 10 }}>Date: </b>{" "}
                    {dateTimeConverter(event.datetime)}
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
