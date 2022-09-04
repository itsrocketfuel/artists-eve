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
  const id = useId();
  const [input, setInput] = useState(props?.value ?? "");

  const { artistData, setArtistData } = useContext(ArtistContext);
  const { setShowEvents } = useContext(EventsContext);

  const handleOnRequestSearch = async () => {
    setArtistData(await getArtist(input));
    setShowEvents(false);
  };

  useEffect(() => {
    console.log("Artist's Data: ", artistData);
  }, [artistData]);

  return (
    <AppBar position="relative">
      <Toolbar>
        <EventIcon sx={{ mr: 2, fontSize: 30 }} />
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          sx={{ overflow: "visible" }}
        >
          Artist's Eve
        </Typography>
        <SearchBar
          id={id}
          style={{ marginLeft: 30, width: "100%" }}
          placeholder="Search for Musicians"
          value={input}
          onInput={(e) => setInput(e.target.value)}
          onRequestSearch={handleOnRequestSearch}
        />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
