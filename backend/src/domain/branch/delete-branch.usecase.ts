import { Injectable, NotFoundException } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';

@Injectable()
export class DeleteBranchUseCase {
  constructor(private branchRepository: BranchRepository) {}

  public async delete(id: string) {
    const branchExists = await this.branchRepository.findOne({ where: { id } });

    if (!branchExists) {
      throw new NotFoundException('Branch does not exists.');
    }

    await this.branchRepository.delete(id);
  }
}
