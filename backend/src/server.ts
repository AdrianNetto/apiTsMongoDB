import Fastify from "fastify";
import { routes } from "./routes";
import cors from "@fastify/cors";

const app = Fastify({ logger: false });

const url = "http://localhost:3333/"

const start = async () => {
  await app.register(cors);
  await app.register(routes);

  try {
    await app.listen({ port: 3333 });
    console.log(`🚀 Server running on URL: ${url} 🚀`)
  } catch (err) {
    process.exit(1);
  }
};

start();
