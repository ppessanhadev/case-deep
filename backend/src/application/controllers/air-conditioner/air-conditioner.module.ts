import { Module } from '@nestjs/common';
import { AirConditionerDomainModule } from '@domain/air-conditioner/air-conditioner-domain.module';
import { CreateAirConditionerController } from '@controllers/air-conditioner/create-air-conditioner.controller';

@Module({
  imports: [AirConditionerDomainModule],
  controllers: [CreateAirConditionerController],
})
export class AirConditionerModule {}
