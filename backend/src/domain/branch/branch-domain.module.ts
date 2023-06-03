import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListBranchesUseCase } from '@domain/branch/list-branches.usecase';
import { CreateBranchUseCase } from '@domain/branch/create-branch.usecase';
import { UpdateBranchUseCase } from '@domain/branch/update-branch.usecase';
import { DeleteBranchUseCase } from '@domain/branch/delete-branch.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [ListBranchesUseCase, CreateBranchUseCase, UpdateBranchUseCase, DeleteBranchUseCase],
  exports: [ListBranchesUseCase, CreateBranchUseCase, UpdateBranchUseCase, DeleteBranchUseCase],
})
export class BranchDomainModule {}
