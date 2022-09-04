import React, { useState } from "react";
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
  // state for artist's data
  const [artistData, setArtistData] = useState({});
  const [eventsData, setEventsData] = useState({});
  const [showEvents, setShowEvents] = useState(false);

  return (
    <>
      {/* Providing MUI theme to the app */}
      <ThemeProvider theme={theme}>
        {/* Using CSS baseline to reset default CSS, much like how it's done using normalize.css */}
        <CssBaseline />
        <ArtistContext.Provider value={{ artistData, setArtistData }}>
          <EventsContext.Provider
            value={{ eventsData, setEventsData, showEvents, setShowEvents }}
          >
            <Header />
            {showEvents ? <Events /> : <Home />}
            <Footer />
          </EventsContext.Provider>
        </ArtistContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
