const { searchAlbumsAndArtists, getArtistAlbums, getAlbums } = require('../../lib/spotify');

const MAX_ALBUM_RESPONSE = 20;

function mapAlbumFormat({ id, artists, images, name, release_date, total_tracks }) {
  return {
    id,
    title: name,
    artist_name: artists[0].name,
    release_date,
    total_tracks,
    image_url: images.pop().url,
  }
}

function getSpotifyAlbums(albumIds) {
  return getAlbums(albumIds);
}

async function searchSpotifyAlbums(q) {
  const result = await searchAlbumsAndArtists(q);
  // Search returned artists for albums
  const foundArtists = result.artists.items.map(art => art.id);
  const artistsAlbums = await Promise.all(foundArtists.map(getArtistAlbums));
  // Just keep the right number
  const albums = result.albums.items.concat(artistsAlbums).splice(MAX_ALBUM_RESPONSE);
  // Just keep the good data
  return albums.map(mapAlbumFormat);
}

module.exports = {
  searchSpotifyAlbums,
  getSpotifyAlbums,
};
