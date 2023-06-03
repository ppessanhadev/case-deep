import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { AirConditionerRepository } from '@infra/repositories/air-conditioner.repository';

@Module({
  imports: [DatabaseModule],
  providers: [BranchRepository, AirConditionerRepository],
  exports: [BranchRepository, AirConditionerRepository],
})
export class RepositoriesModule {}
