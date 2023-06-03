import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { CreateAirConditionerUseCase } from '@domain/air-conditioner/create-air-conditioner.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [CreateAirConditionerUseCase],
  exports: [CreateAirConditionerUseCase],
})
export class AirConditionerDomainModule {}
