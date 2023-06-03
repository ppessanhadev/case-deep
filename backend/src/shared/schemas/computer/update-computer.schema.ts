import { z } from 'zod';
import { Brand } from '@prisma/client';
import { createZodDto } from 'nestjs-zod';

const UpdateComputerSchema = z.object({
  id: z.string().uuid(),
  branchId: z.string().uuid(),
  name: z.string().optional(),
  description: z.string().optional(),
  quantity: z.preprocess((v) => Number(v), z.number().int()).optional(),
  brand: z
    .enum([Brand.Acer, Brand.Alienware, Brand.Asus, Brand.Dell, Brand.Gigabyte, Brand.Samsung, Brand.Unknown])
    .optional(),
});

export class UpdateComputerRequest extends createZodDto(UpdateComputerSchema.omit({ id: true, branchId: true })) {}
export class UpdateComputerResponse extends createZodDto(UpdateComputerSchema) {}
