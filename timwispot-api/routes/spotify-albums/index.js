
const { searchSpotifyAlbums, getSpotifyAlbums, setSpotifyToken } = require('./actions');

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

const extractBearerToken = (request, reply, done) => {
  const auth = request.headers.authorization;
  if (auth && auth.length > 7) {
    const token = auth.slice(7);
    setSpotifyToken(token);
    done();
  }
  else {
    throw new Error('No auth token.')
  }
}

module.exports = function (fastify, opts, done) {

  fastify.route({
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
    preHandler: extractBearerToken,
    handler: async function (request, reply) {
      const { q } = request.query;
      reply.send({ albums: await searchSpotifyAlbums(q) });
    },
  });

  fastify.route({
    method: 'GET',
    url: '/spotify-albums',
    schema: {
      querystring: {
        ids: { type: 'array', items: { type: 'string' } }
      },
      response: {
        200: AlbumsSchema
      },
    },
    preHandler: extractBearerToken,
    handler: async (request, reply) => {
      const { ids } = request.query;
      reply.send(await getSpotifyAlbums(ids));
    }
  });

  done();
}
