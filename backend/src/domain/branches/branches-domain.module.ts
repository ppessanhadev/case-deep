import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListBranchesUseCase } from '@domain/branches/list-branches.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [ListBranchesUseCase],
  exports: [ListBranchesUseCase],
})
export class BranchesDomainModule {}
