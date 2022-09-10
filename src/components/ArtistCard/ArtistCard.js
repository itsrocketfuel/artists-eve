import React, { useContext, useEffect } from "react";
// MUI
import {
  Button,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Box,
  Typography,
  IconButton,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
// contexts
import { ArtistContext } from "../../contexts/ArtistContext";
import { EventsContext } from "../../contexts/EventsContext";
// data
import { getEvents } from "../../data/bandsInTownApi";

const ArtistCard = () => {
  // getting states needed in this component from their respective contexts - all are coming from top level App.js
  const { artistData } = useContext(ArtistContext);
  const { eventsData, setEventsData, setShowEvents } =
    useContext(EventsContext);

  // function to add events data to its state and show events page in case events are rendered
  const handleOnViewEvents = async () => {
    setEventsData(await getEvents(artistData.data.name));
    setShowEvents(true);
  };

  // checking for events data
  useEffect(() => {
    console.log("Events' Data: ", eventsData);
  }, [eventsData]);

  const styles = {
    card: {
      width: "50vh",
    },
    artistCardTop: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },
    bitIcon: {
      width: 24,
      height: 24,
    },
  };

  return (
    <Card style={styles.card}>
      <CardMedia
        component="img"
        image={
          artistData !== undefined && artistData.data !== undefined
            ? artistData.data.image_url
            : "No image found"
        }
        alt="Artist"
      />
      <CardContent>
        <Box style={styles.artistCardTop}>
          <Typography variant="h6" component="h2" style={{ fontWeight: 600 }}>
            {artistData !== undefined &&
            artistData.data !== undefined &&
            artistData.data !== ""
              ? artistData.data.name
              : "Name not found"}
          </Typography>
          {artistData !== undefined &&
          artistData.data !== undefined &&
          artistData.data !== "" ? (
            <Box>
              <IconButton
                color="primary"
                href={artistData.data.facebook_page_url}
                target="_blank"
                disabled={
                  // disabling Facebook button in case there is no Facebook Url for an artist
                  artistData.data.facebook_page_url !== "" ? false : true
                }
              >
                <FacebookIcon />
              </IconButton>

              <IconButton
                color="primary"
                href={artistData.data.url}
                target="_blank"
              >
                <img
                  src={require("../../assets/bit-ico.png")}
                  style={styles.bitIcon}
                  alt="Bands in Town Icon"
                />
              </IconButton>
            </Box>
          ) : (
            "No artist found."
          )}
        </Box>
        <Typography component="h2" color="text.secondary">
          {artistData !== undefined &&
          artistData.data !== undefined &&
          artistData.data !== ""
            ? "Upcoming Events: " + artistData.data.upcoming_event_count
            : ""}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          style={{ margin: 7 }}
          onClick={handleOnViewEvents}
        >
          View Events
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArtistCard;
