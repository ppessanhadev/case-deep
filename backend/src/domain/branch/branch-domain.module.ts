import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListBranchesUseCase } from '@domain/branch/list-branches.usecase';
import { CreateBranchUseCase } from './create-branch.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [ListBranchesUseCase, CreateBranchUseCase],
  exports: [ListBranchesUseCase, CreateBranchUseCase],
})
export class BranchDomainModule {}
