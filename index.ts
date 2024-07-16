import Fastify from "fastify";

const fastify = Fastify({
  logger: false,
});

fastify.get("/", async (_request, reply) => {
  const res = await (
    await fetch(process.env.EZTV_URL + "/iptv/xmltv.xml")
  ).text();
  const resTransformed = res.replaceAll(".etv", "");

  reply.header("Content-Type", "application/xml");
  reply.send(resTransformed);
});

// Run the server!
fastify.listen({ port: 80, host: "0.0.0.0" }, function (err, address) {
  if (err) {
    fastify.log.error(err);
    process.exit(1);
  }
  // Server is now listening on ${address}
});
