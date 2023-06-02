import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { BranchesRepository } from '@infra/repositories/branches.repository';

@Module({
  imports: [DatabaseModule],
  providers: [BranchesRepository],
  exports: [BranchesRepository],
})
export class RepositoriesModule {}
