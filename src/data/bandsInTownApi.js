// API documentation is available at https://app.swaggerhub.com/apis/Bandsintown/PublicAPI/3.0.0

import Axios from "axios";

// App ID as described by instructor
const appId = "abc";

// function to make call to Bands in Town API get artist data - passing artist name as an argument
const getArtist = async (artist) => {
  const promise = await Axios.get(
    "https://rest.bandsintown.com/artists/" + artist + "?app_id=" + appId,
  );
  console.log("getArtist Response: ", promise);
  return promise;
};

// function to make call to Bands in Town API get events data (of an artist) - passing artist name as an argument
const getEvents = async (artist) => {
  const promise = await Axios.get(
    "https://rest.bandsintown.com/artists/" +
      artist +
      "/events?app_id=" +
      appId,
  );
  console.log("getEvents Response: ", promise);
  return promise;
};

export { getArtist, getEvents };
