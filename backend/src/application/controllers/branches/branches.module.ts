import { Module } from '@nestjs/common';
import { ListBranchesController } from '@controllers/branches/list-branches.controller';

@Module({
  controllers: [ListBranchesController],
})
export class BranchesModule {}
