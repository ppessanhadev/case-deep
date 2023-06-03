import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateBranchSchema = z.object({
  id: z.string().uuid(),
  name: z.string().optional(),
  description: z.string().optional(),
});

export class UpdateBranchRequest extends createZodDto(UpdateBranchSchema.omit({ id: true })) {}
export class UpdateBranchResponse extends createZodDto(UpdateBranchSchema) {}
