import { Module } from '@nestjs/common';
import { RepositoriesModule } from '@infra/repositories/repositories.module';
import { ListAirConditionersUseCase } from '@domain/air-conditioner/list-air-conditioners.usecase';
import { CreateAirConditionerUseCase } from '@domain/air-conditioner/create-air-conditioner.usecase';
import { UpdateAirConditionerUseCase } from '@domain/air-conditioner/update-air-conditioner.usecase';

@Module({
  imports: [RepositoriesModule],
  providers: [CreateAirConditionerUseCase, ListAirConditionersUseCase, UpdateAirConditionerUseCase],
  exports: [CreateAirConditionerUseCase, ListAirConditionersUseCase, UpdateAirConditionerUseCase],
})
export class AirConditionerDomainModule {}
