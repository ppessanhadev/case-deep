import { Module } from '@nestjs/common';
import { BranchesDomainModule } from '@domain/branches/branches-domain.module';
import { ListBranchesController } from '@controllers/branches/list-branches.controller';
import { CreateBranchController } from '@controllers/branches/create-branch.controller';

@Module({
  imports: [BranchesDomainModule],
  controllers: [ListBranchesController, CreateBranchController],
})
export class BranchesModule {}
