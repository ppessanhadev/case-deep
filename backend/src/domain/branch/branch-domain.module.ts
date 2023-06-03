import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListBranchesUseCase } from '@domain/branch/list-branches.usecase';
import { CreateBranchUseCase } from '@domain/branch/create-branch.usecase';
import { UpdateBranchUseCase } from '@domain/branch/update-branch.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [ListBranchesUseCase, CreateBranchUseCase, UpdateBranchUseCase],
  exports: [ListBranchesUseCase, CreateBranchUseCase, UpdateBranchUseCase],
})
export class BranchDomainModule {}
