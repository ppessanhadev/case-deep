import { Body } from '@nestjs/common';
import { DefineController, DefineRoute } from '@application/decorators';
import { CreateAirConditionerRequest } from '@schemas/air-conditioner/create-air-conditioner.schema';
import { CreateAirConditionerUseCase } from '@domain/air-conditioner/create-air-conditioner.usecase';

@DefineController('air-conditioner')
export class CreateAirConditionerController {
  constructor(private createAirConditionerUseCase: CreateAirConditionerUseCase) {}

  @DefineRoute({
    method: 'POST',
    summary: 'Register a new air conditioner on database if gives a branch id',
    code: 201,
  })
  public async create(@Body() body: CreateAirConditionerRequest) {
    return this.createAirConditionerUseCase.create(body);
  }
}
