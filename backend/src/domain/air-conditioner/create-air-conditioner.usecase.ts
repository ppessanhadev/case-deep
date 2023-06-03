import { AirConditioner } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { AirConditionerRepository } from '@infra/repositories/air-conditioner.repository';
import { CreateAirConditionerRequest } from '@schemas/air-conditioner/create-air-conditioner.schema';

@Injectable()
export class CreateAirConditionerUseCase {
  constructor(private branchRepository: BranchRepository, private airConditionerRepository: AirConditionerRepository) {}

  public async create(airConditioner: CreateAirConditionerRequest) {
    const branch = await this.branchRepository.findOne({
      where: { id: airConditioner.branchId },
    });

    if (!branch) {
      throw new NotFoundException('Branch not found.');
    }

    await this.airConditionerRepository.create(airConditioner as AirConditioner);
  }
}
