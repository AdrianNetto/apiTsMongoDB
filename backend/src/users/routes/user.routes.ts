import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
} from "fastify";
import { CreateCustomerController } from "@/users/controllers/CreateCustomerController";
import { ListCustomersController } from "@/users/controllers/ListCustomersController";
import { DeleteCustomerController } from "@/users/controllers/DeleteCustomerController";
import { ListUniqueCustomerController } from "@/users/controllers/ListUniqueCustomerController";

export async function routes(
  fastify: FastifyInstance,
) {
  fastify.get("/test", async (request: FastifyRequest, reply: FastifyReply) => {
    return { ok: true };
  });

  fastify.post(
    "/create-user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new CreateCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/list-users",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListCustomersController().handle(request, reply);
    }
  );

  fastify.delete(
    "/delete-user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new DeleteCustomerController().handle(request, reply);
    }
  );

  fastify.get(
    "/list-unique-user",
    async (request: FastifyRequest, reply: FastifyReply) => {
      return new ListUniqueCustomerController().handle(request, reply);
    }
  );
}
