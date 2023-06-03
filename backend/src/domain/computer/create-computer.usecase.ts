import { Computer } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { ComputerRepository } from '@infra/repositories/computer.repository';
import { CreateComputerRequest } from '@schemas/computer/create-computer.schema';

@Injectable()
export class CreateComputerUseCase {
  constructor(private branchRepository: BranchRepository, private computerRepository: ComputerRepository) {}

  public async create(computer: CreateComputerRequest) {
    const branch = await this.branchRepository.findOne({
      where: { id: computer.branchId },
    });

    if (!branch) {
      throw new NotFoundException('Branch not found.');
    }

    await this.computerRepository.create(computer as Computer);
  }
}
