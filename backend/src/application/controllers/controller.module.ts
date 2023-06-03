import { Module } from '@nestjs/common';
import { BranchModule } from '@controllers/branch/branch.module';

@Module({
  imports: [BranchModule],
})
export class ControllerModule {}
