import { Injectable, NotFoundException } from '@nestjs/common';
import { AirConditionerRepository } from '@infra/repositories/air-conditioner.repository';
import { UpdateAirConditionerRequest } from '@schemas/air-conditioner/update-air-conditioner.schema';
import { AirConditioner } from '@prisma/client';

@Injectable()
export class UpdateAirConditionerUseCase {
  constructor(private airConditionerRepository: AirConditionerRepository) {}

  public async update(id: string, airConditioner: UpdateAirConditionerRequest) {
    const airConditionerExists = await this.airConditionerRepository.findOne({ where: { id } });

    if (!airConditionerExists) {
      throw new NotFoundException('Air conditioner not found.');
    }

    return this.airConditionerRepository.update(id, airConditioner as AirConditioner);
  }
}
