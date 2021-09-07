import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@material-ui/core";
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSpotifyUser } from "../../context/SpotifyUserContext";
import ListAlbums from "../../components/ListAlbums";
import Snackbar from '@material-ui/core/Snackbar';

const API_HOSTNAME = "http://localhost:9000";

export const SearchPage = () => {
  const { spotifyUser } = useSpotifyUser();
  const [foundAlbums, setFoundAlbums] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [fetchError, setFetchError] = useState(null);

  const searchAlbums = (queryInput) => {
    const headers = spotifyUser.token ? { Authorization: `Bearer ${spotifyUser.token}` } : {};
    return fetch(`${API_HOSTNAME}/spotify-albums/search?q=${queryInput}`, { headers, origin: '' })
      .then(response => response.json())
      .then(({ albums }) => albums);
  };

  const handleSubmit = async () => {
    const searchString = document.getElementById("searchString").value;
    setIsLoading(true);
    setFetchError(null);
    try {
      const fetchedAlbums = await searchAlbums(searchString);
      setFoundAlbums(fetchedAlbums);
    }
    catch (err) {
      setFetchError("Failed search :", err);
    }
    setIsLoading(false);
  }

  return (
    <>
      <h1>Recherche d'albums</h1>
      <Box>
        <Typography>Recherche</Typography>
        <form noValidate autoComplete="off">
          <TextField id="searchString" variant="outlined" label="Nom de l'album / artiste" />
          {isLoading
            ? <CircularProgress />
            : <Button variant="contained" color="primary" onClick={handleSubmit}>Valider</Button>
          }
        </form>
      </Box>
      {foundAlbums.length && <ListAlbums albums={foundAlbums} />}
      <Snackbar open={Boolean(fetchError)}>{fetchError}</Snackbar>
    </>
  );
};
