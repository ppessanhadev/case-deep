import { Injectable, NotFoundException } from '@nestjs/common';
import { BranchRepository } from '@infra/repositories/branch.repository';

@Injectable()
export class DeleteBranchUseCase {
  constructor(private branchRepository: BranchRepository) {}

  public async delete(id: string) {
    const userExists = await this.branchRepository.findOne({ where: { id } });

    if (!userExists) {
      throw new NotFoundException('User does not exists.');
    }

    await this.branchRepository.delete(id);
  }
}
