import Axios from "axios";

// App ID as described by instructor
const appId = "abc";

const getArtist = async (artist) => {
  const promise = await Axios.get(
    "https://rest.bandsintown.com/artists/" + artist + "?app_id=" + appId,
  );
  console.log("getArtist Response: ", promise);
  return promise;
};

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
