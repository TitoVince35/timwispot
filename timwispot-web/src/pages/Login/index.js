import React, { useContext, useState } from "react";
import { SpotifyUserContext } from "../../context/SpotifyUserContext";

import { Box, TextField, Button, Typography } from "@material-ui/core";

export const LoginPage = () => {
  const [spotifyUser, setSpotifyUser] = useContext(SpotifyUserContext);
  const [state, setState] = useState(spotifyUser.token);

  const handleChange = (event) => { setState(event.target.value) };
  const handleSubmit = () => {
    setSpotifyUser({ ...spotifyUser, token: state })
  };

  return (
    <>
      <h1>Login</h1>
      <Box>
        <Typography>Entrez votre token Spotify API</Typography>
        <form noValidate autoComplete="off">
          <TextField variant="outlined" label="Token" value={state} onChange={handleChange} />
          <Button variant="contained" color="primary" onClick={handleSubmit}>Valider</Button>
        </form>
      </Box>
    </>
  );
};
