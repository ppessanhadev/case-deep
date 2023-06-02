import { createZodDto } from 'nestjs-zod';
import { z } from 'zod';

const ListBranchesSchema = z.array(
  z.object({
    id: z.string().uuid(),
    name: z.string(),
    description: z.string(),
  }),
);

export class ListBranchesResponse extends createZodDto(ListBranchesSchema) {}
