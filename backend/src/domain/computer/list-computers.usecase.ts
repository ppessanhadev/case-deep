import { Injectable } from '@nestjs/common';
import { ComputerRepository } from '@infra/repositories/computer.repository';

@Injectable()
export class ListComputersUseCase {
  constructor(private computerRepository: ComputerRepository) {}

  public async list() {
    return this.computerRepository.list();
  }
}
