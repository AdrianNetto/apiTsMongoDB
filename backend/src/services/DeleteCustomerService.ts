import prismaClient from "@/prisma/index";

interface DeleteCustomerProps {
  id: string;
}

class DeleteCustomerService {
  async execute({ id }: DeleteCustomerProps) {
    if (!id) {
      throw new Error('Error: Missing Property "id"');
    }

    const findCustomer = await prismaClient.customer.findFirst({
      where: {
        id: id,
      },
    });

    if (!findCustomer) {
      throw new Error("Error: id not found in our database");
    }

    await prismaClient.customer.delete({
      where: {
        id: findCustomer.id,
      },
    });
    return {
      code: 200,
      msg: "User deleted with success",
    };
  }
}

export { DeleteCustomerService };
