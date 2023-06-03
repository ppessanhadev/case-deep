import { Module } from '@nestjs/common';
import { AirConditionerDomainModule } from '@domain/air-conditioner/air-conditioner-domain.module';
import { ListAirConditionersController } from '@controllers/air-conditioner/list-air-conditioners.controller';
import { CreateAirConditionerController } from '@controllers/air-conditioner/create-air-conditioner.controller';
import { UpdateAirConditionerController } from '@controllers/air-conditioner/update-air-conditioner.controller';
import { DeleteAirConditionerController } from '@controllers/air-conditioner/delete-air-conditioner.controller';

@Module({
  imports: [AirConditionerDomainModule],
  controllers: [
    CreateAirConditionerController,
    ListAirConditionersController,
    UpdateAirConditionerController,
    DeleteAirConditionerController,
  ],
})
export class AirConditionerModule {}
