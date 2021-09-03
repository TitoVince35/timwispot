const fastify = require("fastify")({ logger: true })
const routes = require("./routes");

routes.forEach(routeOptions => fastify.route(routeOptions));

(async () => {
    try {
        await fastify.listen(3000);

    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
})();
