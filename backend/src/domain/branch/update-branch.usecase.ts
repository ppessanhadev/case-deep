import { Branch } from '@prisma/client';
import { Injectable, NotFoundException } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';
import { UpdateBranchRequest } from '@schemas/branches/update.branch.controller';

@Injectable()
export class UpdateBranchUseCase {
  constructor(private branchRepository: BranchRepository) {}

  public async update(id: string, branch: UpdateBranchRequest) {
    const branchExists = await this.branchRepository.findOne({ where: { id } });

    if (!branchExists) {
      throw new NotFoundException('Branch not found.');
    }

    return this.branchRepository.update(id, branch as Branch);
  }
}
