import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';

@Module({
  imports: [RepositoriesModule],
  exports: [RepositoriesModule],
})
export class InfraModule {}
