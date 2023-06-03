import { Injectable, NotFoundException } from '@nestjs/common';
import { AirConditionerRepository } from '@infra/repositories/air-conditioner.repository';

@Injectable()
export class DeleteAirConditionerUseCase {
  constructor(private airConditionerRepository: AirConditionerRepository) {}

  public async delete(id: string) {
    const airConditionerExists = await this.airConditionerRepository.findOne({ where: { id } });

    if (!airConditionerExists) {
      throw new NotFoundException('Air conditioner does not exists.');
    }

    await this.airConditionerRepository.delete(id);
  }
}
