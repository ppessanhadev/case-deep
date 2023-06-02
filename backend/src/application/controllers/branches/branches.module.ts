import { Module } from '@nestjs/common';
import { BranchesDomainModule } from '@domain/branches/branches-domain.module';
import { ListBranchesController } from '@controllers/branches/list-branches.controller';

@Module({
  imports: [BranchesDomainModule],
  controllers: [ListBranchesController],
})
export class BranchesModule {}
