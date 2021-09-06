const { searchAlbumsAndArtists, getArtistAlbums, getAlbums, setAuthToken } = require('../../lib/spotify');

const MAX_ALBUM_RESPONSE = 20;

function mapAlbumFormat(album) {
  const { id, artists, images, name, release_date, total_tracks } = album;
  try {
    return {
      id,
      title: name,
      artist_name: artists[0].name,
      release_date,
      total_tracks,
      image_url: images.pop().url,
    }
  }
  catch (err) {
    console.log(`Problem with album ${id}:`, err)
    return {
      id,
      title: "Failed to map album data",
      artist_name: "Unknown",
      release_date: "xxxxxx",
      total_tracks: 0,
      image_url: "https://fr.aion.gameforge.com/website/resources/pubajax/ranking/legion/emblem/63/67189/",
    }
  }
}

function getSpotifyAlbums(albumIds) {
  setAuthToken(token);
  return getAlbums(albumIds);
}

async function searchSpotifyAlbums(q) {
  const result = await searchAlbumsAndArtists(q);
  // Search returned artists for albums
  const foundArtists = result.artists.items.map(art => art.id);
  const artistsAlbums = Array.prototype.concat(...await Promise.all(foundArtists.map(getArtistAlbums)));
  // Just keep the right number
  const albums = result.albums.items.concat(artistsAlbums).splice(0, MAX_ALBUM_RESPONSE);
  // Just keep the good data
  return albums.map(mapAlbumFormat);
}

function setSpotifyToken(token) {
  setAuthToken(token)
}

module.exports = {
  searchSpotifyAlbums,
  getSpotifyAlbums,
  setSpotifyToken,
};
