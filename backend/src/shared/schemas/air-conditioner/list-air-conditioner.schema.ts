import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ListAirConditionersSchema = z.object({
  id: z.string().uuid(),
  branchId: z.string().uuid(),
  name: z.string(),
  description: z.string(),
  quantity: z.number().int(),
  btu: z.number(),
});

export class ListAirConditionersResponse extends createZodDto(ListAirConditionersSchema) {}
