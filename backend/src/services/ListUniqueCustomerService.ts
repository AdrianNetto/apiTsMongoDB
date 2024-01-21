import prismaClient from "../prisma";

class ListUniqueCustomerService {
  async execute(id: string) {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: id,
      },
    });

    return customer;
  }
}

export { ListUniqueCustomerService };
