import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { AirConditionerRepository } from '@infra/repositories/air-conditioner.repository';
import { ComputerRepository } from '@infra/repositories/computer.repository';

@Module({
  imports: [DatabaseModule],
  providers: [BranchRepository, AirConditionerRepository, ComputerRepository],
  exports: [BranchRepository, AirConditionerRepository, ComputerRepository],
})
export class RepositoriesModule {}
