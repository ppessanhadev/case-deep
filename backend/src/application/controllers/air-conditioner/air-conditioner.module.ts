import { Module } from '@nestjs/common';
import { AirConditionerDomainModule } from '@domain/air-conditioner/air-conditioner-domain.module';
import { ListAirConditionersController } from '@controllers/air-conditioner/list-air-conditioners.controller';
import { CreateAirConditionerController } from '@controllers/air-conditioner/create-air-conditioner.controller';

@Module({
  imports: [AirConditionerDomainModule],
  controllers: [CreateAirConditionerController, ListAirConditionersController],
})
export class AirConditionerModule {}
