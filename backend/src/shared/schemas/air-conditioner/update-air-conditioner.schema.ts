import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateAirConditionerSchema = z.object({
  id: z.string().uuid(),
  branchId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  quantity: z.number().int(),
  btu: z.number(),
});

export class UpdateAirConditionerRequest extends createZodDto(
  UpdateAirConditionerSchema.omit({ id: true, branchId: true }),
) {}
export class UpdateAirConditionerResponse extends createZodDto(UpdateAirConditionerSchema) {}
