import Axios from "axios";

const CLIENT_ID = "c5a87e6afef44e609d189a617ade0510";
const CLIENT_SECRET = "36e98ec9fb044d98855e8c73c087bda0";

const auth_parameters = {
  method: "POST",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
  body:
    "grant_type=client_credentials&client_id" +
    CLIENT_ID +
    "&client_secret=" +
    CLIENT_SECRET,
};

const getAccessToken = async () => {
  const promise = await Axios.get(
    "https://accounts.spotify.com/api/token/",
    auth_parameters,
  );
  console.log("Spotify Access Token: ", promise);
  return promise;
};

export { getAccessToken };
