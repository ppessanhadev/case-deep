import { Module } from '@nestjs/common';
import { BranchDomainModule } from '@domain/branch/branch-domain.module';
import { ListBranchesController } from '@controllers/branch/list-branches.controller';
import { CreateBranchController } from '@controllers/branch/create-branch.controller';
import { UpdateBranchController } from '@controllers/branch/update-branch.controller';

@Module({
  imports: [BranchDomainModule],
  controllers: [ListBranchesController, CreateBranchController, UpdateBranchController],
})
export class BranchModule {}
