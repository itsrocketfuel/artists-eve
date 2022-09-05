import React, { useId, useState, useEffect, useContext } from "react";
// MUI
import { AppBar, Toolbar, Typography } from "@mui/material";
// icons
import EventIcon from "@mui/icons-material/Event";
import SearchBar from "material-ui-search-bar";
// data
import { getArtist } from "../../data/bandsInTownApi";
// contexts
import { ArtistContext } from "../../contexts/ArtistContext";
import { EventsContext } from "../../contexts/EventsContext";

const Header = (props) => {
  const styles = {
    searchBar: { marginLeft: 30, width: "100%" },
    eventIcon: { marginRight: 2, fontSize: 30 },
  };

  const id = useId();
  // state for input value of the search bar (names of artists)
  const [input, setInput] = useState(props?.value ?? "");

  // getting states needed in this component from their respective contexts - all are coming from top level App.js
  const { artistData, setArtistData } = useContext(ArtistContext);
  const { setShowEvents } = useContext(EventsContext);

  // function to add artist data to its state and set home page to render
  const handleOnRequestSearch = async () => {
    setArtistData(await getArtist(input));
    setShowEvents(false);
  };

  // checking for artist data
  useEffect(() => {
    console.log("Header - Artist's Data: ", artistData);
  }, [artistData]);

  return (
    <AppBar position="relative">
      <Toolbar>
        <EventIcon style={styles.eventIcon} />
        <Typography variant="h6" noWrap style={{ overflow: "visible" }}>
          Artist's Eve
        </Typography>
        <SearchBar
          style={styles.searchBar}
          id={id}
          placeholder="Search for Musicians i.e. Eminem"
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onRequestSearch={handleOnRequestSearch}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
