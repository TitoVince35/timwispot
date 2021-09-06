const axios = require('axios');
axios.defaults.baseURL = "https://api.spotify.com";

const MAX_RESULTS_DEFAULT = 20;
let token = null

// function connect(baseUrl, token) {
//   axios.defaults.baseURL = baseUrl;
//   axios.default.headers.common['Authorization'] = token;
// }

function setToken(token) {
  //
}

function searchAlbumsAndArtists(q, maxResults = MAX_RESULTS_DEFAULT) {
  return axios.get('/v1/search', {
    params: {
      q,
      type: "album,artist",
      limit: maxResults
    }
  });
}

function getArtistAlbums(artistId, maxResults = MAX_RESULTS_DEFAULT) {
  return axios.get(`/v1/artists/${artistId}/albums`, {
    params: {
      limit: maxResults
    }
  });
}

function getAlbums(ids) {
  return axios.get('/v1/albums', {
    params: {
      ids: ids.join(',')
    }
  });
}

module.exports = { setToken, searchAlbumsAndArtists, getArtistAlbums, getAlbums }
