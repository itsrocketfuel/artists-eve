import React, { useState, useEffect } from "react";
// pages
import Home from "./pages/Home";
import Events from "./pages/Events";
// MUI
import { CssBaseline } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
// contexts
import { ArtistContext } from "./contexts/ArtistContext";
import { EventsContext } from "./contexts/EventsContext";
// custom components
import Header from "./components/Header";
import Footer from "./components/Footer";

const theme = createTheme();

const App = () => {
  // loading persisted data for artist, events and event page toggle if exists, otherwise use defaults
  const storedArtist = JSON.parse(localStorage.getItem("artistData")) || {};
  const storedEvents = JSON.parse(localStorage.getItem("eventsData")) || {};
  const storedEventsToggle =
    JSON.parse(localStorage.getItem("showEvents")) || false;

  // state for artist's data
  const [artistData, setArtistData] = useState(storedArtist);
  // state for events data of an artist
  const [eventsData, setEventsData] = useState(storedEvents);
  // state to render events page if viewed, otherwise show home page
  const [showEvents, setShowEvents] = useState(storedEventsToggle);

  // local storage

  // persisting showEvents state each time it's updated
  useEffect(() => {
    localStorage.setItem("showEvents", JSON.stringify(showEvents));
  }, [showEvents]);

  // persisting artistData state each time it's updated
  useEffect(() => {
    localStorage.setItem("artistData", JSON.stringify(artistData));
  }, [artistData]);

  // persisting artistData state each time it's updated
  useEffect(() => {
    localStorage.setItem("eventsData", JSON.stringify(eventsData));
  }, [eventsData]);

  return (
    <>
      {/* Providing MUI theme to the app */}
      <ThemeProvider theme={theme}>
        {/* Using CSS baseline to reset default CSS, much like how it's done using normalize.css */}
        <CssBaseline />
        {/* Using Context API to provide states/data to other components - Separating contexts for Events and Artist */}
        <ArtistContext.Provider
          value={{ artistData, setArtistData, setShowEvents }}
        >
          <EventsContext.Provider
            value={{ eventsData, setEventsData, showEvents, setShowEvents }}
          >
            <Header />
            {/* If events of an artist are viewed, render Events, otherwise render home page */}
            {showEvents ? (
              <Events />
            ) : (
              <>
                <Home />
                <Footer />
              </>
            )}
          </EventsContext.Provider>
        </ArtistContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
