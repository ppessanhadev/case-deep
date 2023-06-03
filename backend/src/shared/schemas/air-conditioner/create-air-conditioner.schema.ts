import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateAirConditionerSchema = z.object({
  branchId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  quantity: z.preprocess((v: string) => Number(v), z.number().int()),
  btu: z.preprocess((v: string) => Number(v), z.number()),
});

export class CreateAirConditionerRequest extends createZodDto(CreateAirConditionerSchema) {}
