import React from "react";
import { useSpotifyUser } from "../../context/SpotifyUserContext";

import { Box, TextField, Button, Typography } from "@material-ui/core";

export const LoginPage = () => {
  const { spotifyUser, setSpotifyUser } = useSpotifyUser();
  console.log('spotifyUser=', spotifyUser);
  const handleSubmit = () => {
    const token = document.getElementById("inputSpotifyToken").value;
    setSpotifyUser({ ...spotifyUser, token })
  };

  return (
    <>
      <h1>Login</h1>
      <Box>
        <Typography>
          Entrez votre token Spotify API<br />
          Console Spotify : https://developer.spotify.com/console/get-album/
        </Typography>
        <form noValidate autoComplete="off">
          <TextField variant="outlined" label="Token" id="inputSpotifyToken" defaultValue={spotifyUser.token} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>Valider</Button>
        </form>
      </Box>
    </>
  );
};
