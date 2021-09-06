import React, { useContext, useState } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import { SpotifyUserContext } from "../../context/SpotifyUserContext";
import ListAlbums from "../../components/ListAlbums";

const API_HOSTNAME = "http://localhost:9000";

export const SearchPage = () => {
  const { token } = useContext(SpotifyUserContext)
  const [foundAlbums, setFoundAlbums] = useState([]);

  // const handleChange = (event) => { setState(event.target.value) };
  // const handleSubmit = () => {
  //   setSpotifyUser({ ...spotifyUser, token: state })
  // };
  const searchAlbums = (queryInput) => {
    const headers = { Authorization: `Bearer ${token}` };
    return fetch(`${API_HOSTNAME}/spotify-albums/search?q=${queryInput}`, { headers, origin: '' })
      .then(response => response.body.albums)
  };

  const handleSubmit = async () => {
    const searchString = document.getElementById("searchString").value;
    setFoundAlbums(await searchAlbums(searchString));
  }

  return (
    <>
      <h1>Recherche d'albums</h1>
      <Box>
        <Typography>Recherche</Typography>
        <form noValidate autoComplete="off">
          <TextField id="searchString" variant="outlined" label="Nom de l'album / artiste" />
          <Button variant="contained" color="primary" onClick={handleSubmit}>Valider</Button>
        </form>
      </Box>
      {foundAlbums.length && <ListAlbums albums={foundAlbums} />}
    </>
  );
};
