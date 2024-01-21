import prismaClient from "@/prisma/index";

interface CreateCustomerProps {
  name: string;
  email: string;
}

class CreateCustomerService {
  async execute({ name, email }: CreateCustomerProps) {
    if (!name || !name) {
      throw new Error("Error: Missing Properties");
    }

    const customer = await prismaClient.customer.create({
      data: {
        name,
        email,
        status: true,
      },
    });

    return customer;
  }
}

export { CreateCustomerService };
