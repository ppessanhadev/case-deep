import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListComputersUseCase } from '@domain/computer/list-computers.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [ListComputersUseCase],
  exports: [ListComputersUseCase],
})
export class ComputerDomainModule {}
