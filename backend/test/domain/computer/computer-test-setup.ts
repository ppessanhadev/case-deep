import { Provider } from '@nestjs/common';
import { ComputerRepository } from '@infra/repositories/computer.repository';
import { computerRepositoryMock } from '@test/mocks/computer-repository.mock';
import { branchRepositoryModule } from '@test/domain/branch/branch-test-setup';
import { ListComputersUseCase } from '@domain/computer/list-computers.usecase';
import { CreateComputerUseCase } from '@domain/computer/create-computer.usecase';
import { UpdateComputerUseCase } from '@domain/computer/update-computer.usecase';
import { DeleteComputerUseCase } from '@domain/computer/delete-computer.usecase';

const computerRepositoryModule: Provider = {
  provide: ComputerRepository,
  useValue: computerRepositoryMock,
};

export const mockCreateComputerModule: Provider[] = [
  CreateComputerUseCase,
  computerRepositoryModule,
  branchRepositoryModule,
];
export const mockListComputersModule: Provider[] = [ListComputersUseCase, computerRepositoryModule];
export const mockUpdateComputerModule: Provider[] = [UpdateComputerUseCase, computerRepositoryModule];
export const mockDeleteComputerModule: Provider[] = [DeleteComputerUseCase, computerRepositoryModule];
