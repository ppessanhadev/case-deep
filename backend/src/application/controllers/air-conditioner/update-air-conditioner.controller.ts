import { Body, Query } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { UpdateAirConditionerUseCase } from '@domain/air-conditioner/update-air-conditioner.usecase';
import {
  UpdateAirConditionerRequest,
  UpdateAirConditionerResponse,
} from '@schemas/air-conditioner/update-air-conditioner.schema';

@DefineController('air-conditioner')
export class UpdateAirConditionerController {
  constructor(private updateAirConditionerUseCase: UpdateAirConditionerUseCase) {}

  @DefineRoute({
    method: 'UPDATE',
    summary: 'Updates one air conditioner, receives id as query and all data that will be modified',
    queries: [{ name: 'id', example: 'efeb858e-77a7-4e78-8960-7e0754b70f76' }],
    response: { type: UpdateAirConditionerResponse },
  })
  public async create(@Body() body: UpdateAirConditionerRequest, @Query('id') id: string) {
    return this.updateAirConditionerUseCase.update(id, body);
  }
}
