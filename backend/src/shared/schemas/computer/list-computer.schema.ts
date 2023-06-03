import { z } from 'zod';
import { Brand } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';

const ListComputersSchema = z.array(
  z.object({
    id: z.string().uuid(),
    branchId: z.string().uuid(),
    name: z.string(),
    description: z.string(),
    quantity: z.number().int(),
    brand: z.enum([Brand.Acer, Brand.Alienware, Brand.Asus, Brand.Dell, Brand.Gigabyte, Brand.Samsung, Brand.Unknown]),
  }),
);

export class ListComputersResponse extends createZodDto(ListComputersSchema) {}
