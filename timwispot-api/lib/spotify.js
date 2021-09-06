const axios = require('axios');
axios.defaults.baseURL = "https://api.spotify.com";

const MAX_RESULTS_DEFAULT = 20;
let authToken = ""

function setAuthToken(token) {
  console.log("Setting token:", token)
  authToken = token;
}

async function searchAlbumsAndArtists(q, maxResults = MAX_RESULTS_DEFAULT) {
  const result = await axios.get('/v1/search', {
    params: {
      q,
      type: "album,artist",
      limit: maxResults
    },
    headers: {
      'Authorization': `Bearer ${authToken}`,
    }
  });
  return result.data;
}

async function getArtistAlbums(artistId) {
  const result = await axios.get(`/v1/artists/${artistId}/albums`, {
    params: {
      limit: MAX_RESULTS_DEFAULT
    },
    headers: {
      'Authorization': `Bearer ${authToken}`,
    }
  });
  // console.log(`Found ${result.data.items.length} album(s) for artist ${artistId}.`);
  return result.data.items;
}

function getAlbums(ids) {
  return axios.get('/v1/albums', {
    params: {
      ids: ids.join(',')
    },
    headers: {
      'Authorization': `Bearer ${authToken}`,
    }
  });
}

module.exports = { setAuthToken, searchAlbumsAndArtists, getArtistAlbums, getAlbums }
