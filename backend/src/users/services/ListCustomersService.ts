import prismaClient from "@/prisma";

class ListCustomersService {
  async execute() {
    const customers = await prismaClient.customer.findMany();

    if(customers.length === 0) {
      return "No users found"
    }

    return customers;
  }
}

export { ListCustomersService };
