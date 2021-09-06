const fastify = require("fastify")({ logger: true })
fastify.register(require('fastify-cors'), {
    origin: '*'
});

fastify.register(require("./routes/spotify-albums"));

(async () => {
    try {
        await fastify.listen(9000);

    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();
