const fastify = require("fastify")({ logger: true })
    (async () => {
        try {
            await fastify.listen(3000);

        } catch (err) {
            fastify.log.error(err);
            process.exit(1);
        }
    })();
