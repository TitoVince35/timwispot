const { searchSpotifyAlbums, getSpotifyAlbums } = require('./spotify-albums/actions');

const AlbumsSchema = {
  type: 'object',
  properties: {
    albums: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          title: { type: 'string' },
          artist_name: { type: 'string' },
          image_url: { type: 'string' },
          release_date: { type: 'string' },
          total_tracks: { type: 'number' }
        }
      }
    }
  }
};

module.exports = [
  {
    method: 'GET',
    url: '/spotify-albums/search',
    schema: {
      querystring: {
        q: { type: 'string' }
      },
      response: {
        200: AlbumsSchema
      },
    },
    handler: async (request) => {
      const { q } = request.query;
      return searchSpotifyAlbums(q);
    }
  },

  {
    method: 'GET',
    url: '/spotify-albums',
    schema: {
      querystring: {
        ids: { type: 'array', items: { type: 'string' } }
      },
      // response: {
      //   200: AlbumsSchema
      // },
    },
    handler: async (request) => {
      const { ids } = request.query;
      return getSpotifyAlbums(ids);
    }
  }
];
