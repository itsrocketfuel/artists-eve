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
  // state for events data of an artist
  const [eventsData, setEventsData] = useState({});
  // state to render events page if viewed, otherwise show home page
  const [showEvents, setShowEvents] = useState(false);

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
            {showEvents ? <Events /> : <Home />}
            <Footer />
          </EventsContext.Provider>
        </ArtistContext.Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
