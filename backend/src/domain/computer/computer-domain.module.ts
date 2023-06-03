import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListComputersUseCase } from '@domain/computer/list-computers.usecase';
import { CreateComputerUseCase } from '@domain/computer/create-computer.usecase';
import { UpdateComputerUseCase } from '@domain/computer/update-computer.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [ListComputersUseCase, CreateComputerUseCase, UpdateComputerUseCase],
  exports: [ListComputersUseCase, CreateComputerUseCase, UpdateComputerUseCase],
})
export class ComputerDomainModule {}
