import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const UpdateBranchSchema = z.object({
  id: z.string().uuid().nullable(),
  name: z.string(),
  description: z.string(),
});

export class UpdateBranchRequest extends createZodDto(UpdateBranchSchema.omit({ id: true })) {}
export class UpdateBranchResponse extends createZodDto(UpdateBranchSchema) {}
