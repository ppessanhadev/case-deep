import { Injectable } from '@nestjs/common';
import { AirConditionerRepository } from '@infra/repositories/air-conditioner.repository';

@Injectable()
export class ListAirConditionersUseCase {
  constructor(private airConditionerRepository: AirConditionerRepository) {}

  public async list() {
    return this.airConditionerRepository.list();
  }
}
