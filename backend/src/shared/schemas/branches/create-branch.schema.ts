import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const CreateBranchSchema = z.object({
  name: z.string(),
  description: z.string(),
});

export class CreateBranchRequest extends createZodDto(CreateBranchSchema) {}
