import { Injectable, NotFoundException } from '@nestjs/common';
import { ComputerRepository } from '@infra/repositories/computer.repository';

@Injectable()
export class DeleteComputerUseCase {
  constructor(private computerRepository: ComputerRepository) {}

  public async delete(id: string) {
    const computerExists = await this.computerRepository.findOne({ where: { id } });

    if (!computerExists) {
      throw new NotFoundException('Computer does not exists.');
    }

    await this.computerRepository.delete(id);
  }
}
