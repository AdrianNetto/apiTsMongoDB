import { FastifyRequest, FastifyReply } from "fastify";
import { ListUniqueCustomerService } from "@/services/ListUniqueCustomerService";

class ListUniqueCustomerController {
  async handle(request: FastifyRequest, reply: FastifyReply) {
    const { id } = request.query as { id: string };
    const customerService = new ListUniqueCustomerService();

    const customer = await customerService.execute(id);

    reply.send(customer);
  }
}

export { ListUniqueCustomerController };
