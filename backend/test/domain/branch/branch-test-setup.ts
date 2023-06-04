import { Provider } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { branchRepositoryMock } from '@test/mocks/branch-repository.mock';
import { CreateBranchUseCase } from '@domain/branch/create-branch.usecase';
import { DeleteBranchUseCase } from '@domain/branch/delete-branch.usecase';
import { ListBranchesUseCase } from '@domain/branch/list-branches.usecase';
import { UpdateBranchUseCase } from '@domain/branch/update-branch.usecase';

export const branchRepositoryModule: Provider = {
  provide: BranchRepository,
  useValue: branchRepositoryMock,
};

export const mockCreateBranchModule: Provider[] = [CreateBranchUseCase, branchRepositoryModule];
export const mockDeleteBranchModule: Provider[] = [DeleteBranchUseCase, branchRepositoryModule];
export const mockListBranchesModule: Provider[] = [ListBranchesUseCase, branchRepositoryModule];
export const mockUpdateBranchModule: Provider[] = [UpdateBranchUseCase, branchRepositoryModule];
