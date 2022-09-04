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
  const { artistData } = useContext(ArtistContext);
  const { eventsData, setEventsData, setShowEvents } =
    useContext(EventsContext);

  const handleOnViewEvents = async () => {
    setEventsData(await getEvents(artistData.data.name));
    setShowEvents(true);
  };

  useEffect(() => {
    console.log("Events' Data: ", eventsData);
  }, [eventsData]);

  return (
    <Card
      sx={{
        height: "100%",
        width: 350,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={artistData.data !== undefined ? artistData.data.image_url : ""}
        alt="random"
      />
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexGrow: 1,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography variant="h6" component="h2" sx={{ fontWeight: 600 }}>
            {artistData.data !== undefined ? artistData.data.name : ""}
          </Typography>
          <Box>
            {artistData.data !== undefined ? (
              <Box>
                <IconButton
                  color="primary"
                  href={artistData.data.facebook_page_url}
                  target="_blank"
                  disabled={
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
                    style={{ width: 26, height: 26 }}
                    alt="Bands in Town Icon"
                  />
                </IconButton>
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Box>
        <Box>
          <Typography component="h2" color="text.secondary">
            {artistData.data !== undefined
              ? "Upcoming Events: " + artistData.data.upcoming_event_count
              : ""}
          </Typography>
        </Box>
      </CardContent>
      <CardActions>
        <Button
          size="medium"
          variant="contained"
          sx={{ m: 1 }}
          onClick={handleOnViewEvents}
        >
          View Events
        </Button>
      </CardActions>
    </Card>
  );
};

export default ArtistCard;
