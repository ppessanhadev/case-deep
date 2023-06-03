import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateAirConditionerSchema = z.object({
  id: z.string().uuid(),
  branchId: z.string().uuid(),
  name: z.string().optional(),
  description: z.string().optional(),
  quantity: z.preprocess((v) => Number(v), z.number().int()).optional(),
  btu: z.number().optional(),
});

export class UpdateAirConditionerRequest extends createZodDto(
  UpdateAirConditionerSchema.omit({ id: true, branchId: true }),
) {}
export class UpdateAirConditionerResponse extends createZodDto(UpdateAirConditionerSchema) {}
