import { Computer } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { ComputerRepository } from '@infra/repositories/computer.repository';
import { UpdateComputerRequest } from '@schemas/computer/update-computer.schema';

@Injectable()
export class UpdateComputerUseCase {
  constructor(private computerRepository: ComputerRepository) {}

  public async update(id: string, computer: UpdateComputerRequest) {
    const computerExists = await this.computerRepository.findOne({ where: { id } });

    if (!computerExists) {
      throw new NotFoundException('Computer does not exists.');
    }

    return this.computerRepository.update(id, computer as Computer);
  }
}
