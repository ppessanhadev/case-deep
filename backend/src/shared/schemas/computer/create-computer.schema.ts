import { z } from 'zod';
import { Brand } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';

const CreateComputerSchema = z.object({
  branchId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  quantity: z.preprocess((v) => Number(v), z.number().int()),
  brand: z.enum([Brand.Acer, Brand.Alienware, Brand.Asus, Brand.Dell, Brand.Gigabyte, Brand.Samsung, Brand.Unknown]),
});

export class CreateComputerRequest extends createZodDto(CreateComputerSchema) {}
