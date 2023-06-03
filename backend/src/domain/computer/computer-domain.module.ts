import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListComputersUseCase } from '@domain/computer/list-computers.usecase';
import { CreateComputerUseCase } from '@domain/computer/create-computer.usecase';
import { UpdateComputerUseCase } from '@domain/computer/update-computer.usecase';
import { DeleteComputerUseCase } from '@domain/computer/delete-computer.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [ListComputersUseCase, CreateComputerUseCase, UpdateComputerUseCase, DeleteComputerUseCase],
  exports: [ListComputersUseCase, CreateComputerUseCase, UpdateComputerUseCase, DeleteComputerUseCase],
})
export class ComputerDomainModule {}
