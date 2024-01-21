import prismaClient from "@/prisma/index";

class ListUniqueCustomerService {
  async execute(id: string) {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: id,
      },
    });

    if(!customer) {
      throw new Error("Error: id not found in our database")
    }

    return customer;
  }
}

export { ListUniqueCustomerService };
