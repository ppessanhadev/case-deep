import { Provider } from '@nestjs/common';
import { branchRepositoryMock } from '@test/mocks/branch-repository.mock';
import { CreateBranchUseCase } from '@domain/branch/create-branch.usecase';
import { BranchRepository } from '@infra/repositories/branch.repository';

const branchRepositoryModule: Provider = {
  provide: BranchRepository,
  useValue: branchRepositoryMock,
};

export const mockCreateBranchModule: Provider[] = [CreateBranchUseCase, branchRepositoryModule];
