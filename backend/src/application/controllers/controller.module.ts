import { Module } from '@nestjs/common';
import { BranchesModule } from '@controllers/branches/branches.module';

@Module({
  imports: [BranchesModule],
})
export class ControllerModule {}
