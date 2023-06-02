import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { BranchRepository } from '@infra/repositories/branch.repository';

@Module({
  imports: [DatabaseModule],
  providers: [BranchRepository],
  exports: [BranchRepository],
})
export class RepositoriesModule {}
